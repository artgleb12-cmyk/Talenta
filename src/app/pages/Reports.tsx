import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const conversion = [
  { stage: "Новые", value: 100 },
  { stage: "Скрининг", value: 60 },
  { stage: "Тех интервью", value: 35 },
  { stage: "Оффер", value: 5 },
];

const sources = [
  { name: "HH", value: 42, color: "#EF4444" },
  { name: "Рефералы", value: 28, color: "#3B82F6" },
  { name: "LinkedIn", value: 18, color: "#10B981" },
  { name: "Сайт", value: 12, color: "#F59E0B" },
];

export default function Reports() {
  return (
    <div className="max-w-[1400px] mx-auto pb-10 flex flex-col gap-5">
      <div className="bg-white rounded-3xl border border-slate-100 p-6">
        <h2 className="text-2xl font-bold text-slate-900">Отчеты и аналитика</h2>
        <p className="text-slate-500">Конверсия по этапам и эффективность источников</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-3xl border border-slate-100 p-6 h-[360px]">
          <h3 className="font-semibold text-slate-900 mb-4">Воронка подбора</h3>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={conversion}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#EF4444" radius={8} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 p-6 h-[360px]">
          <h3 className="font-semibold text-slate-900 mb-4">Источники кандидатов</h3>
          <ResponsiveContainer width="100%" height="88%">
            <PieChart>
              <Pie data={sources} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110}>
                {sources.map((item) => <Cell key={item.name} fill={item.color} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
