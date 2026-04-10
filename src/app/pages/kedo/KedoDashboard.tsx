import { Plus, Send, Search, Filter, LayoutGrid, List } from "lucide-react"
import { Link } from "react-router"
import { StatCard } from "../../components/kedo/StatCard"
import { DocumentTable } from "../../components/kedo/DocumentTable"
import { documents } from "../../data/kedo"
import { FileText, Clock, AlertTriangle, CheckCircle } from "lucide-react"

export function KedoDashboard() {
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
          <Link 
            to="/kedo/create"
            className="h-[42px] px-5 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-[14px] hover:bg-slate-50 hover:border-slate-300 shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex items-center gap-2 transition-all"
          >
            <Plus className="w-4 h-4" />
            Создать документ
          </Link>
          <Link 
            to="/kedo/create"
            className="h-[42px] px-5 rounded-xl bg-[#E30611] text-white font-semibold text-[14px] hover:bg-[#CC050F] shadow-[0_2px_8px_rgba(227,6,17,0.3)] flex items-center gap-2 transition-all"
          >
            <Send className="w-4 h-4" />
            Запустить на подпись
          </Link>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-8 border-b border-slate-200 mt-2 mb-2">
        <Link to="/kedo" className="pb-3 border-b-2 border-[#E30611] text-[#E30611] font-semibold text-[14px]">
          Реестр документов
        </Link>
        <Link to="/kedo/templates" className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-[14px] transition-colors">
          Шаблоны
        </Link>
        <Link to="/kedo/settings" className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-[14px] transition-colors">Права доступа</Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
        <StatCard
          title="Всего документов"
          value="1,247"
          icon={<FileText className="w-6 h-6" />}
          iconBgColor="bg-blue-50"
          iconColor="text-blue-600"
          trend="up"
          trendValue="12%"
          subtitle="за текущий месяц"
        />
        <StatCard
          title="На подписи"
          value="42"
          icon={<Clock className="w-6 h-6" />}
          iconBgColor="bg-orange-50"
          iconColor="text-orange-500"
          trend="up"
          trendValue="5"
          subtitle="ожидают действий"
        />
        <StatCard
          title="Требует внимания"
          value="8"
          icon={<AlertTriangle className="w-6 h-6" />}
          iconBgColor="bg-red-50"
          iconColor="text-red-500"
          trend="down"
          trendValue="2"
          subtitle="ошибки маршрута"
        />
        <StatCard
          title="Завершено"
          value="890"
          icon={<CheckCircle className="w-6 h-6" />}
          iconBgColor="bg-emerald-50"
          iconColor="text-emerald-500"
          trend="up"
          trendValue="24%"
          subtitle="успешных подписаний"
        />
      </div>

      {/* Main Content Area */}
      <div className="mt-4 flex flex-col gap-5">
        
        {/* Toolbar */}
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.03)] border border-slate-100/60">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Поиск по документам..." 
                className="h-[38px] pl-9 pr-4 w-[280px] rounded-lg border border-slate-200 bg-slate-50 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#E30611]/20 focus:border-[#E30611] transition-all font-medium placeholder:text-slate-400"
              />
            </div>
            
            <div className="h-6 w-[1px] bg-slate-200" />
            
            <button className="h-[38px] px-4 rounded-lg border border-slate-200 bg-white text-slate-600 font-medium text-[13px] hover:bg-slate-50 flex items-center gap-2 transition-colors">
              <Filter className="w-4 h-4" />
              Фильтры
              <span className="flex items-center justify-center w-5 h-5 rounded bg-red-100 text-[#E30611] text-[11px] font-bold ml-1">3</span>
            </button>
            
            <div className="flex gap-2">
              <select className="h-[38px] px-3 rounded-lg border border-slate-200 bg-white text-slate-600 font-medium text-[13px] focus:outline-none focus:ring-2 focus:ring-[#E30611]/20 focus:border-[#E30611] hover:bg-slate-50 transition-colors appearance-none pr-8 relative cursor-pointer" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '16px' }}>
                <option>Все статусы</option>
                <option>На подписи</option>
                <option>Подписан</option>
              </select>
              <select className="h-[38px] px-3 rounded-lg border border-slate-200 bg-white text-slate-600 font-medium text-[13px] focus:outline-none focus:ring-2 focus:ring-[#E30611]/20 focus:border-[#E30611] hover:bg-slate-50 transition-colors appearance-none pr-8 cursor-pointer" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '16px' }}>
                <option>Любой срок</option>
                <option>Просроченные</option>
                <option>Сегодня</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <Link to="/kedo" className="p-1.5 rounded-md bg-white shadow-sm text-slate-700" title="Список">
              <List className="w-4 h-4" />
            </Link>
            <Link to="/kedo/kanban" className="p-1.5 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 transition-colors" title="Канбан">
              <LayoutGrid className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Table/Registry */}
        <DocumentTable documents={documents} />

      </div>
    </div>
  )
}



