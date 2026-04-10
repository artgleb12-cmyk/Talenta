import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Cell } from "recharts";

export default function SkillsGapChart() {
  const data = [
    { skill: "React/Vue", current: 3, target: 4, name: "Фреймворки" },
    { skill: "TS", current: 3.5, target: 4, name: "TypeScript" },
    { skill: "Architecture", current: 2, target: 3, name: "Архитектура" },
    { skill: "CI/CD", current: 2, target: 3, name: "CI/CD" },
    { skill: "Mentoring", current: 1, target: 3, name: "Наставничество" },
  ];

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col h-[360px]">
      <div className="mb-2">
        <h3 className="text-[18px] font-bold text-gray-900">Разрыв компетенций (Gap)</h3>
        <p className="text-[13px] text-gray-500 mt-1">Оценка текущих навыков для Senior</p>
      </div>

      <div className="flex-1 w-full mt-4 -ml-4 min-h-[250px]">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 0 }} barGap={2} accessibilityLayer={false}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#6b7280", fontSize: 11, fontWeight: 500 }} dy={10} />
            <YAxis domain={[0, 4]} axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 11 }} ticks={[1, 2, 3, 4]} />
            <Tooltip cursor={{ fill: "#f9fafb" }} contentStyle={{ borderRadius: "12px", border: "1px solid #f3f4f6", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", fontSize: "13px", fontWeight: 500 }} />
            <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} iconType="circle" iconSize={8} />
            <Bar dataKey="target" name="Требуемый" fill="#e5e7eb" radius={[4, 4, 0, 0]} barSize={12} />
            <Bar dataKey="current" name="Текущий" fill="#E30611" radius={[4, 4, 0, 0]} barSize={12}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.current >= entry.target ? "#10b981" : "#E30611"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
