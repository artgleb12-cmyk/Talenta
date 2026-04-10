import { ChevronRight, ChevronDown, CheckCircle2, TrendingUp, Target, Clock } from "lucide-react";
import EmployeeIPR from "../components/team/EmployeeIPR";
import EmployeeKPIs from "../components/team/EmployeeKPIs";
import EmployeeCompetencies from "../components/team/EmployeeCompetencies";
import ManagerActions from "../components/team/ManagerActions";

export default function TeamDevelopment() {
  return (
    <div className="max-w-[1400px] w-full pb-10 animate-in fade-in duration-300">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-[13px] font-medium mb-6">
        <span className="text-emerald-600 cursor-pointer hover:underline">Главная</span>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-emerald-600 cursor-pointer hover:underline">Моя команда</span>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-500">Развитие сотрудника</span>
      </div>

      {/* Header & Employee Selector */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-[32px] font-bold text-gray-900 tracking-tight leading-tight">Карточка развития</h1>
          <p className="text-gray-500 text-[15px] mt-1.5">Отслеживание прогресса, KPI и компетенций</p>
        </div>
        
        {/* Employee Selector Dropdown */}
        <div className="bg-white border border-gray-200 rounded-[16px] p-2 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-pointer hover:border-gray-300 transition-colors w-full md:w-auto">
          <img src="https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?w=128&q=80" alt="Анна Смирнова" className="w-10 h-10 rounded-full object-cover shadow-sm" />
          <div className="pr-4">
            <div className="text-[14px] font-bold text-gray-900 leading-tight">Анна Смирнова</div>
            <div className="text-[12px] text-gray-500 font-medium">Middle Frontend • Grade 8</div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 mr-2" />
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<Target className="w-5 h-5 text-[#E30611]" />} value="95%" label="Выполнение KPI" bgIcon="bg-red-50" />
        <StatCard icon={<TrendingUp className="w-5 h-5 text-blue-600" />} value="60%" label="Прогресс ИПР" bgIcon="bg-blue-50" />
        <StatCard icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />} value="8/10" label="Пройдено курсов" bgIcon="bg-emerald-50" />
        <StatCard icon={<Clock className="w-5 h-5 text-amber-600" />} value="15 авг" label="Ближайшая оценка" bgIcon="bg-amber-50" valueSize="text-[28px]" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <EmployeeKPIs />
          <EmployeeIPR />
        </div>

        {/* Right Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <EmployeeCompetencies />
          <ManagerActions />
        </div>
      </div>
    </div>
  )
}

function StatCard({ 
  icon, 
  value, 
  label, 
  bgIcon = "bg-white",
  valueSize = "text-[32px]"
}: { 
  icon: React.ReactNode, 
  value: string, 
  label: string, 
  bgIcon?: string,
  valueSize?: string 
}) {
  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-center">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-white shadow-sm ${bgIcon}`}>
          {icon}
        </div>
        <span className={`${valueSize} font-bold text-gray-900 leading-none`}>{value}</span>
      </div>
      <div className="text-[14px] text-gray-500 mt-2 font-medium">{label}</div>
    </div>
  )
}
