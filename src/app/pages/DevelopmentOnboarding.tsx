import { ChevronRight, ArrowUpRight, Target, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import AdaptationTimeline from "../components/onboarding/AdaptationTimeline";
import FourAxesChart from "../components/onboarding/FourAxesChart";
import TaskList from "../components/onboarding/TaskList";
import MentorCard from "../components/onboarding/MentorCard";
import AchievementsCard from "../components/onboarding/AchievementsCard";
import UpcomingEventsCard from "../components/onboarding/UpcomingEventsCard";

export default function Onboarding() {
  return (
    <div className="max-w-[1400px] w-full pb-10">
      <div className="flex items-center gap-2 text-[13px] font-medium mb-6">
        <span className="text-emerald-600 cursor-pointer hover:underline">Главная</span>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-emerald-600 cursor-pointer hover:underline">Мое развитие и обучение</span>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-500">Мой онбординг</span>
      </div>

      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-[32px] font-bold text-gray-900 tracking-tight leading-tight">Мой онбординг</h1>
          <p className="text-gray-500 text-[15px] mt-1.5">Индивидуальный план адаптации на 2025-2026</p>
        </div>
        <button className="bg-[#E30611] hover:bg-[#c9050f] text-white px-6 py-3 rounded-xl font-medium text-[15px] transition-colors flex items-center gap-2 shadow-[0_4px_14px_rgba(227,6,17,0.2)]">
          Перейти к обучению
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<Target className="w-5 h-5 text-[#E30611]" />} value="30" label="Дней в компании" />
        <StatCard icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />} value="12" label="Пройдено курсов" />
        <StatCard icon={<Clock className="w-5 h-5 text-amber-600" />} value="4" label="Осталось встреч" />
        <StatCard icon={<TrendingUp className="w-5 h-5 text-blue-600" />} value="65%" label="Общий прогресс" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <AdaptationTimeline />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FourAxesChart />
            <TaskList />
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <MentorCard />
          <AchievementsCard />
          <UpcomingEventsCard />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-center">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-50 bg-white">{icon}</div>
        <span className="text-[32px] font-bold text-gray-900 leading-none">{value}</span>
      </div>
      <div className="text-[14px] text-gray-500 mt-2 font-medium">{label}</div>
    </div>
  );
}
