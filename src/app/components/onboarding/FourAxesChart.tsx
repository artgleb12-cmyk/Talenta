import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts";

export default function FourAxesChart() {
  const data = [
    { subject: "Адаптивность", target: 4, current: 3.5, fullMark: 5 },
    { subject: "Лидерство", target: 3, current: 2, fullMark: 5 },
    { subject: "Коммуникация", target: 5, current: 4.5, fullMark: 5 },
    { subject: "Аналитика", target: 4, current: 3, fullMark: 5 },
    { subject: "Командная работа", target: 5, current: 4.5, fullMark: 5 },
  ];

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col h-full min-h-[380px]">
      <div className="mb-2">
        <h3 className="text-[18px] font-bold text-gray-900">Профиль компетенций</h3>
        <p className="text-[13px] text-gray-500 mt-1">Текущий уровень vs целевой</p>
      </div>

      <div className="flex-1 w-full mt-4 -ml-4 min-h-[250px]">
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data} accessibilityLayer={false}>
            <PolarGrid stroke="#E5E7EB" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: "#6B7280", fontSize: 11, fontWeight: 500 }} />
            <PolarRadiusAxis angle={90} domain={[0, 5]} tick={false} axisLine={false} />

            <Radar name="Целевой" dataKey="target" stroke="#0066FF" strokeDasharray="4 4" fill="none" strokeWidth={2} />
            <Radar name="Текущий" dataKey="current" stroke="#E30611" fill="#E30611" fillOpacity={0.12} strokeWidth={2} />
            <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "20px" }} iconType="circle" iconSize={8} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
