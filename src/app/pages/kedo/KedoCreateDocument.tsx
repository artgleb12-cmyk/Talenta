import { useState } from "react"
import { useNavigate, Link } from "react-router"
import { 
  ChevronRight, 
  Check, 
  FileText, 
  Building, 
  Users, 
  Send, 
  Search,
  X,
  Bell,
  Clock,
  Settings,
  AlertCircle
} from "lucide-react"
import { cn } from "../../../lib/utils"
import { users } from "../../data/kedo"

const steps = [
  { id: 1, title: "Документ", description: "Выбор шаблона", icon: FileText },
  { id: 2, title: "Компания", description: "Юридическое лицо", icon: Building },
  { id: 3, title: "Сотрудники", description: "Выбор получателей", icon: Users },
  { id: 4, title: "Отправка", description: "Настройка маршрута", icon: Send },
]

const templates = [
  { id: 1, name: "Заявление на ежегодный оплачиваемый отпуск", type: "Заявление", isPopular: true },
  { id: 2, name: "Приказ о приеме на работу", type: "Приказ", isPopular: true },
  { id: 3, name: "Дополнительное соглашение к трудовому договору", type: "Договор", isPopular: false },
  { id: 4, name: "Согласие на обработку персональных данных", type: "Согласие", isPopular: true },
  { id: 5, name: "Ознакомление с локальными нормативными актами", type: "Уведомление", isPopular: false },
]

const companies = [
  { id: 1, name: "ООО «Экстил Цифровые Системы»", inn: "7725284024", usersCount: 1250 },
  { id: 2, name: "ООО «ЭЦС»", inn: "7725284024", usersCount: 430 },
  { id: 3, name: "ООО «Технологии Цифровой Трансформации»", inn: "9727004220", usersCount: 15 },
]

export function KedoCreateDocument() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  
  // Form State
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null)
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  
  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(c => c + 1)
  }
  
  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(c => c - 1)
  }

  const handleLaunch = () => {
    // Navigate back to dashboard and perhaps show a toast in a real app
    navigate("/kedo")
  }

  const toggleUser = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500 max-w-[1200px] mx-auto">
      {/* Header section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 mb-1.5 font-medium">
            <Link to="/" className="hover:text-[#E30611] cursor-pointer transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/kedo" className="hover:text-[#E30611] cursor-pointer transition-colors">КЭДО</Link>
            <span>/</span>
            <span className="text-slate-900">Запуск на подпись</span>
          </div>
          <h1 className="text-[28px] font-bold tracking-tight text-slate-900 flex items-center gap-3">
            Мастер запуска документа
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate("/kedo")}
            className="h-[42px] px-5 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-[14px] hover:bg-slate-50 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all"
          >
            Отменить
          </button>
        </div>
      </div>

      <div className="flex gap-8 flex-1 min-h-0">
        {/* Sidebar Stepper */}
        <div className="w-[280px] shrink-0">
          <div className="bg-white rounded-2xl p-6 shadow-[0px_2px_12px_rgba(0,0,0,0.03)] border border-slate-100/60 sticky top-0">
            <div className="space-y-8">
              {steps.map((step, index) => {
                const isActive = step.id === currentStep
                const isPassed = step.id < currentStep
                const isNext = step.id > currentStep
                const StepIcon = step.icon

                return (
                  <div key={step.id} className="relative">
                    {index !== steps.length - 1 && (
                      <div className={cn(
                        "absolute left-[19px] top-[40px] bottom-[-32px] w-[2px]",
                        isPassed ? "bg-[#E30611]" : "bg-slate-100"
                      )} />
                    )}
                    <div className="flex items-start gap-4 relative z-10">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors duration-300",
                        isActive ? "border-[#E30611] bg-white text-[#E30611]" : 
                        isPassed ? "border-[#E30611] bg-[#E30611] text-white" : 
                        "border-slate-200 bg-slate-50 text-slate-400"
                      )}>
                        {isPassed ? <Check className="w-5 h-5" /> : <StepIcon className="w-5 h-5" />}
                      </div>
                      <div className="pt-1">
                        <div className={cn(
                          "text-[14px] font-bold mb-0.5",
                          isActive ? "text-slate-900" :
                          isPassed ? "text-slate-700" :
                          "text-slate-400"
                        )}>
                          {step.title}
                        </div>
                        <div className={cn(
                          "text-[12px] font-medium",
                          isActive || isPassed ? "text-slate-500" : "text-slate-400"
                        )}>
                          {step.description}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-white rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.03)] border border-slate-100/60 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-8">
            
            {/* STEP 1: DOCUMENT */}
            {currentStep === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Выберите шаблон документа</h2>
                
                <div className="mb-6 relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Поиск по шаблонам..." 
                    className="w-full h-[46px] pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E30611]/20 focus:border-[#E30611] transition-all font-medium placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-3">
                  {templates.map(template => (
                    <div 
                      key={template.id}
                      onClick={() => setSelectedTemplate(template.id)}
                      className={cn(
                        "p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between",
                        selectedTemplate === template.id 
                          ? "border-[#E30611] bg-red-50/30" 
                          : "border-slate-100 hover:border-slate-200 hover:bg-slate-50"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center",
                          selectedTemplate === template.id ? "bg-[#E30611] text-white" : "bg-slate-100 text-slate-500"
                        )}>
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-[15px]">{template.name}</div>
                          <div className="text-[13px] text-slate-500 mt-0.5">{template.type}</div>
                        </div>
                      </div>
                      {selectedTemplate === template.id && (
                        <Check className="w-5 h-5 text-[#E30611]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: COMPANY */}
            {currentStep === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-xl font-bold text-slate-900 mb-6">От какого лица отправляем документ?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {companies.map(company => (
                    <div 
                      key={company.id}
                      onClick={() => setSelectedCompany(company.id)}
                      className={cn(
                        "p-5 rounded-xl border-2 cursor-pointer transition-all",
                        selectedCompany === company.id 
                          ? "border-[#E30611] bg-red-50/30 shadow-[0_4px_12px_rgba(227,6,17,0.08)]" 
                          : "border-slate-100 hover:border-slate-200 hover:bg-slate-50"
                      )}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center",
                          selectedCompany === company.id ? "bg-[#E30611] text-white" : "bg-slate-100 text-slate-500"
                        )}>
                          <Building className="w-6 h-6" />
                        </div>
                        {selectedCompany === company.id && (
                          <div className="w-6 h-6 rounded-full bg-[#E30611] flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="font-bold text-slate-900 text-[16px] mb-1">{company.name}</div>
                      <div className="text-[13px] text-slate-500 font-medium space-y-1">
                        <div>ИНН: {company.inn}</div>
                        <div>Сотрудников: {company.usersCount}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: EMPLOYEES */}
            {currentStep === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col h-full">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Выберите сотрудников для подписания</h2>
                
                <div className="flex gap-6 h-full min-h-[400px]">
                  {/* Left: Search & List */}
                  <div className="flex-1 flex flex-col">
                    <div className="mb-4 relative">
                      <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Поиск по ФИО или должности..." 
                        className="w-full h-[42px] pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E30611]/20 focus:border-[#E30611] transition-all font-medium placeholder:text-slate-400"
                      />
                    </div>

                    <div className="border border-slate-100 rounded-xl overflow-hidden flex-1 flex flex-col">
                      <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-slate-500">Доступно: {filteredUsers.length}</span>
                        <button 
                          onClick={() => setSelectedUsers(filteredUsers.map(u => u.id))}
                          className="text-[13px] font-medium text-[#E30611] hover:underline"
                        >
                          Выбрать всех
                        </button>
                      </div>
                      <div className="overflow-y-auto flex-1 p-2 space-y-1">
                        {filteredUsers.map(user => (
                          <div 
                            key={user.id}
                            onClick={() => toggleUser(user.id)}
                            className={cn(
                              "flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors",
                              selectedUsers.includes(user.id) ? "bg-red-50/50" : "hover:bg-slate-50"
                            )}
                          >
                            <div className={cn(
                              "w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors",
                              selectedUsers.includes(user.id) ? "bg-[#E30611] border-[#E30611]" : "border-slate-300 bg-white"
                            )}>
                              {selectedUsers.includes(user.id) && <Check className="w-3.5 h-3.5 text-white" />}
                            </div>
                            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                            <div>
                              <div className="text-[14px] font-semibold text-slate-900 leading-tight">{user.name}</div>
                              <div className="text-[12px] text-slate-500">{user.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Selected */}
                  <div className="w-[280px] border border-slate-100 rounded-xl flex flex-col bg-slate-50/50">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-white rounded-t-xl">
                      <span className="text-[13px] font-semibold text-slate-700">Выбрано: {selectedUsers.length}</span>
                      {selectedUsers.length > 0 && (
                        <button 
                          onClick={() => setSelectedUsers([])}
                          className="text-[13px] font-medium text-slate-500 hover:text-slate-700"
                        >
                          Очистить
                        </button>
                      )}
                    </div>
                    <div className="p-3 overflow-y-auto flex-1 space-y-2">
                      {selectedUsers.length === 0 ? (
                        <div className="text-center py-8 text-slate-400 text-[13px]">
                          Нет выбранных сотрудников
                        </div>
                      ) : (
                        users.filter(u => selectedUsers.includes(u.id)).map(user => (
                          <div key={`sel-${user.id}`} className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-2 overflow-hidden">
                              <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full object-cover shrink-0" />
                              <span className="text-[13px] font-medium text-slate-700 truncate">{user.name}</span>
                            </div>
                            <button 
                              onClick={() => toggleUser(user.id)}
                              className="text-slate-400 hover:text-red-500 p-1"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: SUMMARY & SEND */}
            {currentStep === 4 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Проверка и отправка</h2>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="col-span-2 space-y-4">
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                      <h3 className="text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-4">Сводка по рассылке</h3>
                      
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                            <FileText className="w-5 h-5 text-slate-600" />
                          </div>
                          <div>
                            <div className="text-[13px] text-slate-500 mb-0.5">Документ</div>
                            <div className="font-semibold text-slate-900">
                              {templates.find(t => t.id === selectedTemplate)?.name || "Не выбран"}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                            <Building className="w-5 h-5 text-slate-600" />
                          </div>
                          <div>
                            <div className="text-[13px] text-slate-500 mb-0.5">Компания</div>
                            <div className="font-semibold text-slate-900">
                              {companies.find(c => c.id === selectedCompany)?.name || "Не выбрана"}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                            <Users className="w-5 h-5 text-slate-600" />
                          </div>
                          <div>
                            <div className="text-[13px] text-slate-500 mb-0.5">Получатели ({selectedUsers.length})</div>
                            <div className="flex -space-x-2 mt-1">
                              {users.filter(u => selectedUsers.includes(u.id)).slice(0, 5).map(user => (
                                <img 
                                  key={user.id} 
                                  src={user.avatar} 
                                  className="w-8 h-8 rounded-full border-2 border-slate-50 object-cover" 
                                  title={user.name}
                                />
                              ))}
                              {selectedUsers.length > 5 && (
                                <div className="w-8 h-8 rounded-full border-2 border-slate-50 bg-slate-200 text-slate-600 flex items-center justify-center text-[11px] font-bold z-10">
                                  +{selectedUsers.length - 5}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 space-y-4">
                    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                      <h3 className="text-[14px] font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Settings className="w-4 h-4 text-slate-400" />
                        Настройки маршрута
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-[13px] font-medium text-slate-700 block mb-2">Каналы уведомлений</label>
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" defaultChecked className="rounded border-slate-300 text-[#E30611] focus:ring-[#E30611]" />
                              <span className="text-[13px] text-slate-600">Email</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" defaultChecked className="rounded border-slate-300 text-[#E30611] focus:ring-[#E30611]" />
                              <span className="text-[13px] text-slate-600">Push-уведомления (Моб. апп)</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="rounded border-slate-300 text-[#E30611] focus:ring-[#E30611]" />
                              <span className="text-[13px] text-slate-600">SMS (Платная опция)</span>
                            </label>
                          </div>
                        </div>

                        <div className="h-px bg-slate-100" />

                        <div>
                          <label className="text-[13px] font-medium text-slate-700 block mb-2 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-400" />
                            Срок подписания
                          </label>
                          <select className="w-full h-9 px-3 rounded-lg border border-slate-200 bg-white text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#E30611]/20 focus:border-[#E30611]">
                            <option>3 рабочих дня</option>
                            <option>5 рабочих дней</option>
                            <option>До конца текущего месяца</option>
                            <option>Без срока</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {(!selectedTemplate || !selectedCompany || selectedUsers.length === 0) && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-orange-50 text-orange-700 border border-orange-200 mb-6">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-[13px] font-medium">Для запуска маршрута необходимо заполнить все предыдущие шаги.</p>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Footer Navigation */}
          <div className="bg-slate-50 p-6 border-t border-slate-100 flex items-center justify-between shrink-0">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="h-[42px] px-6 rounded-xl text-slate-600 font-semibold text-[14px] hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-sm transition-all disabled:opacity-50 disabled:pointer-events-none"
            >
              Назад
            </button>
            
            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                className="h-[42px] px-6 rounded-xl bg-slate-900 text-white font-semibold text-[14px] hover:bg-slate-800 shadow-sm flex items-center gap-2 transition-all"
              >
                Далее
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleLaunch}
                disabled={!selectedTemplate || !selectedCompany || selectedUsers.length === 0}
                className="h-[42px] px-8 rounded-xl bg-[#E30611] text-white font-semibold text-[14px] hover:bg-[#CC050F] shadow-[0_2px_8px_rgba(227,6,17,0.3)] flex items-center gap-2 transition-all disabled:opacity-50 disabled:pointer-events-none"
              >
                <Send className="w-4 h-4" />
                Запустить маршрут
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


