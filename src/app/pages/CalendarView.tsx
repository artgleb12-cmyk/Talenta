import { CalendarDays, Clock, Users } from "lucide-react";

const events = [
  { id: 1, time: "10:00", title: "HR интервью", participant: "Иван Петров", interviewer: "Елена Воронова" },
  { id: 2, time: "14:30", title: "Тех интервью", participant: "Анна Смирнова", interviewer: "Алексей Морозов" },
  { id: 3, time: "16:00", title: "Финальное интервью", participant: "Сергей Волков", interviewer: "Мария Крылова" },
];

export default function CalendarView() {
  return (
    <div className="max-w-[1200px] mx-auto pb-10 flex flex-col gap-5">
      <div className="bg-white rounded-3xl border border-slate-100 p-6">
        <h2 className="text-2xl font-bold text-slate-900">Календарь интервью</h2>
        <p className="text-slate-500">План на сегодня и ближайшие даты</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2 text-slate-700 font-semibold">
          <CalendarDays className="w-5 h-5" /> Сегодня, 10 апреля 2026
        </div>
        <div className="divide-y divide-slate-100">
          {events.map((e) => (
            <div key={e.id} className="px-6 py-4 flex items-center gap-4 hover:bg-slate-50/50">
              <div className="text-sm font-semibold text-slate-800 min-w-[70px] flex items-center gap-1"><Clock className="w-4 h-4" /> {e.time}</div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900">{e.title}</div>
                <div className="text-sm text-slate-500">Кандидат: {e.participant}</div>
              </div>
              <div className="text-sm text-slate-600 flex items-center gap-1"><Users className="w-4 h-4" /> {e.interviewer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
