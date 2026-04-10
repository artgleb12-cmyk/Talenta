import { BriefcaseBusiness, Users, Calendar, Award, ChevronRight, Plus, UserPlus, PlayCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const stats = [
  { label: "Вакансии в работе", value: "12", icon: BriefcaseBusiness, color: "text-red-500", bg: "bg-red-50" },
  { label: "Кандидатов на этапах", value: "148", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
  { label: "Интервью на сегодня", value: "5", icon: Calendar, color: "text-emerald-500", bg: "bg-emerald-50" },
  { label: "Офферов в ожидании", value: "3", icon: Award, color: "text-amber-500", bg: "bg-amber-50" },
];

const funnelData = [
  { id: "new", name: "Новые", value: 100 },
  { id: "screen", name: "Скрининг", value: 60 },
  { id: "hr", name: "Интервью HR", value: 35 },
  { id: "lead", name: "Интервью руководителя", value: 15 },
  { id: "offer", name: "Оффер", value: 5 },
  { id: "hired", name: "Нанят", value: 3 },
];

const interviews = [
  { id: 1, name: "Иван Петров", role: "Frontend разработчик", time: "10:00 - 11:00", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop", type: "HR" },
  { id: 2, name: "Анна Смирнова", role: "Product Manager", time: "14:30 - 15:30", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop", type: "Тех интервью" },
  { id: 3, name: "Сергей Волков", role: "UX/UI дизайнер", time: "16:00 - 17:00", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop", type: "Финал" },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 max-w-[1400px] mx-auto pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center justify-between transition-transform hover:-translate-y-1 duration-300">
            <div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-[14px] text-slate-500 font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-[18px] font-bold text-slate-900">Воронка подбора</h2>
              <p className="text-[14px] text-slate-500 mt-1">Конверсия кандидатов по этапам (за 30 дней)</p>
            </div>
            <button className="text-[14px] font-medium text-red-600 hover:text-red-700 flex items-center gap-1">
              Все отчеты
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={funnelData} margin={{ top: 0, right: 30, left: 40, bottom: 0 }} accessibilityLayer={false}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: "#64748B", fontSize: 12 }} />
                <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#475569", fontSize: 13, fontWeight: 500 }} />
                <Tooltip />
                <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                  {funnelData.map((entry) => (<Cell key={entry.id} fill="#EF4444" />))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
          <h2 className="text-[18px] font-bold text-slate-900">Быстрые действия</h2>
          <div className="grid grid-cols-2 gap-3">
            <ActionButton icon={Plus} label="Создать вакансию" />
            <ActionButton icon={UserPlus} label="Добавить кандидата" />
            <ActionButton icon={Calendar} label="Назначить интервью" />
            <ActionButton icon={PlayCircle} label="Запустить адаптацию" />
          </div>

          <h3 className="text-[16px] font-bold text-slate-900 mt-3">Собеседования на сегодня</h3>
          <div className="space-y-3">
            {interviews.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <ImageWithFallback src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="min-w-0">
                  <div className="text-[14px] font-semibold text-slate-900 truncate">{item.name}</div>
                  <div className="text-[12px] text-slate-500 truncate">{item.role}</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-[12px] font-semibold text-slate-700">{item.time}</div>
                  <div className="text-[11px] text-slate-400">{item.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <button className="border border-dashed border-slate-300 rounded-2xl p-3 h-[120px] text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-colors flex flex-col items-center justify-center gap-2 text-center">
      <Icon className="w-5 h-5" />
      <span className="text-[13px] font-medium leading-tight">{label}</span>
    </button>
  );
}
