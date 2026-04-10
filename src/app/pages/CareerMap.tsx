import { ChevronRight, ArrowUpRight, TrendingUp, Award, Target, Crosshair } from "lucide-react";
import CareerPathTimeline from "../components/career/CareerPathTimeline";
import TransitionRequirements from "../components/career/TransitionRequirements";
import TargetRoleInfo from "../components/career/TargetRoleInfo";
import SkillsGapChart from "../components/career/SkillsGapChart";

export default function CareerMap() {
  return (
    <div className="max-w-[1400px] w-full pb-10 animate-in fade-in duration-300">
      <div className="flex items-center gap-2 text-[13px] font-medium mb-6">
        <span className="text-emerald-600 cursor-pointer hover:underline">Главная</span>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-emerald-600 cursor-pointer hover:underline">Моя карьера</span>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-500">Карьерная карта</span>
      </div>

      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-[32px] font-bold text-gray-900 tracking-tight leading-tight">Карьерная карта</h1>
          <p className="text-gray-500 text-[15px] mt-1.5">Ваш карьерный трек в департаменте IT</p>
        </div>
        <button className="bg-[#E30611] hover:bg-[#c9050f] text-white px-6 py-3 rounded-xl font-medium text-[15px] transition-colors flex items-center gap-2 shadow-[0_4px_14px_rgba(227,6,17,0.2)]">
          Подать заявку на ассессмент
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<Award className="w-5 h-5 text-gray-600" />} value="Middle" label="Текущий грейд" bgIcon="bg-gray-100" />
        <StatCard icon={<Target className="w-5 h-5 text-[#E30611]" />} value="Senior" label="Целевой грейд" bgIcon="bg-red-50" />
        <StatCard icon={<TrendingUp className="w-5 h-5 text-blue-600" />} value="75%" label="Готовность к переходу" bgIcon="bg-blue-50" />
        <StatCard icon={<Crosshair className="w-5 h-5 text-emerald-600" />} value="В резерве" label="Статус" bgIcon="bg-emerald-50" valueSize="text-[28px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <CareerPathTimeline />
          <TransitionRequirements />
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <SkillsGapChart />
          <TargetRoleInfo />
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
  bgIcon = "bg-white",
  valueSize = "text-[32px]",
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  bgIcon?: string;
  valueSize?: string;
}) {
  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-center">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-white shadow-sm ${bgIcon}`}>{icon}</div>
        <span className={`${valueSize} font-bold text-gray-900 leading-none`}>{value}</span>
      </div>
      <div className="text-[14px] text-gray-500 mt-2 font-medium">{label}</div>
    </div>
  );
}
