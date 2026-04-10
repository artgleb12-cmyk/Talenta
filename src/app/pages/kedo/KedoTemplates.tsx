import { useState } from "react"
import { Link } from "react-router"
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  FileText, 
  Briefcase, 
  ClipboardList, 
  FileWarning, 
  Clock,
  Users
} from "lucide-react"
import { cn } from "../../../lib/utils"

// Mock Data for Templates
const templateCategories = ["Все", "Заявления", "Приказы", "Договоры", "Уведомления", "Прочее"]

const mockTemplates = [
  {
    id: "TPL-01",
    title: "Заявление на ежегодный оплачиваемый отпуск",
    type: "Заявления",
    icon: FileText,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    description: "Стандартная форма запроса на ежегодный отпуск. Требует согласования руководителя.",
    updatedAt: "12.04.2026",
    usesCount: 1245,
    target: "Все сотрудники"
  },
  {
    id: "TPL-02",
    title: "Приказ о приеме на работу",
    type: "Приказы",
    icon: ClipboardList,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    description: "Формируется автоматически на основе данных кандидата из модуля рекрутинга.",
    updatedAt: "10.04.2026",
    usesCount: 430,
    target: "HR Отдел"
  },
  {
    id: "TPL-03",
    title: "Дополнительное соглашение к ТД (Изменение оклада)",
    type: "Договоры",
    icon: Briefcase,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    description: "Используется при пересмотре заработной платы или изменении должности.",
    updatedAt: "05.04.2026",
    usesCount: 89,
    target: "HR Отдел, Руководители"
  },
  {
    id: "TPL-04",
    title: "Согласие на обработку персональных данных",
    type: "Заявления",
    icon: FileText,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    description: "Обязательный документ при приеме на работу или изменении ПДн.",
    updatedAt: "01.03.2026",
    usesCount: 2100,
    target: "Все сотрудники"
  },
  {
    id: "TPL-05",
    title: "Уведомление о начале отпуска",
    type: "Уведомления",
    icon: FileWarning,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    description: "Автоматическая рассылка за 2 недели до начала отпуска по графику.",
    updatedAt: "15.02.2026",
    usesCount: 1850,
    target: "Системный (Авто)"
  },
  {
    id: "TPL-06",
    title: "Заявление о переводе на дистанционную работу",
    type: "Заявления",
    icon: FileText,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    description: "Форма для запроса гибридного или полностью удаленного формата работы.",
    updatedAt: "22.03.2026",
    usesCount: 312,
    target: "Все сотрудники"
  },
  {
    id: "TPL-07",
    title: "Обходной лист при увольнении",
    type: "Прочее",
    icon: ClipboardList,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-500",
    description: "Маршрут согласования с IT, Бухгалтерией, АХО и Руководителем.",
    updatedAt: "18.01.2026",
    usesCount: 145,
    target: "Увольняемые"
  },
  {
    id: "TPL-08",
    title: "Договор о материальной ответственности",
    type: "Договоры",
    icon: Briefcase,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    description: "Индивидуальная материальная ответственность для складских работников и АХО.",
    updatedAt: "09.04.2026",
    usesCount: 56,
    target: "МОЛ"
  }
]

export function KedoTemplates() {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTemplates = mockTemplates.filter(tpl => {
    const matchesCategory = activeCategory === "Все" || tpl.type === activeCategory
    const matchesSearch = tpl.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tpl.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 max-w-[1200px] mx-auto">
      {/* Header section */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 mb-1.5 font-medium">
            <Link to="/" className="hover:text-[#E30611] cursor-pointer transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-slate-900">КЭДО</span>
          </div>
          <h1 className="text-[28px] font-bold tracking-tight text-slate-900 flex items-center gap-3">
            Кадровый электронный документооборот
          </h1>
          <p className="text-[14px] text-slate-500 mt-1 font-medium">Управление реестром и подписанием документов</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="h-[42px] px-5 rounded-xl bg-[#E30611] text-white font-semibold text-[14px] hover:bg-[#CC050F] shadow-[0_2px_8px_rgba(227,6,17,0.3)] flex items-center gap-2 transition-all">
            <Plus className="w-4 h-4" />
            Создать шаблон
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-8 border-b border-slate-200 mt-2 mb-2">
        <Link to="/kedo" className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-[14px] transition-colors">
          Реестр документов
        </Link>
        <Link to="/kedo/templates" className="pb-3 border-b-2 border-[#E30611] text-[#E30611] font-semibold text-[14px]">
          Шаблоны
        </Link>
        <Link to="/kedo/settings" className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-[14px] transition-colors">Права доступа</Link>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
        {/* Categories */}
        <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl overflow-x-auto hide-scrollbar">
          {templateCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-lg text-[13px] font-semibold transition-all whitespace-nowrap",
                activeCategory === cat 
                  ? "bg-white text-slate-900 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Filter */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Поиск по шаблонам..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-[40px] pl-9 pr-4 w-full md:w-[260px] rounded-xl border border-slate-200 bg-white text-[13px] focus:outline-none focus:ring-2 focus:ring-[#E30611]/20 focus:border-[#E30611] transition-all font-medium placeholder:text-slate-400"
            />
          </div>
          <button className="h-[40px] px-4 rounded-xl border border-slate-200 bg-white text-slate-600 font-medium text-[13px] hover:bg-slate-50 flex items-center gap-2 transition-colors">
            <Filter className="w-4 h-4" />
            Фильтры
          </button>
        </div>
      </div>

      {/* Grid of Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4">
        {filteredTemplates.map(template => (
          <div 
            key={template.id}
            className="group flex flex-col bg-white rounded-2xl p-5 shadow-[0px_2px_12px_rgba(0,0,0,0.03)] border border-slate-100/60 hover:border-slate-300 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 relative cursor-pointer h-full"
          >
            {/* Header / Icon */}
            <div className="flex items-start justify-between mb-4">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", template.iconBg)}>
                <template.icon className={cn("w-6 h-6", template.iconColor)} />
              </div>
              <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors opacity-0 group-hover:opacity-100">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400">{template.type}</span>
              </div>
              <h3 className="text-[15px] font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#E30611] transition-colors">
                {template.title}
              </h3>
              <p className="text-[13px] text-slate-500 line-clamp-2 leading-relaxed">
                {template.description}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
              <div className="flex items-center justify-between text-[12px] text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {template.updatedAt}
                </div>
                <div>{template.usesCount} раз</div>
              </div>
              <div className="flex items-center gap-1.5 text-[12px] text-slate-500 font-medium">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">{template.target}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredTemplates.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-slate-100 border-dashed mt-4">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-[16px] font-bold text-slate-900 mb-1">Шаблоны не найдены</h3>
          <p className="text-[14px] text-slate-500 max-w-sm">
            По вашему запросу «{searchQuery}» ничего не найдено в категории «{activeCategory}». Попробуйте изменить параметры поиска.
          </p>
          <button 
            onClick={() => { setSearchQuery(""); setActiveCategory("Все"); }}
            className="mt-6 text-[14px] font-semibold text-[#E30611] hover:underline"
          >
            Сбросить фильтры
          </button>
        </div>
      )}
    </div>
  )
}



