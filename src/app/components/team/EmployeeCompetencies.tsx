import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

export default function EmployeeCompetencies() {
  const data = [
    { subject: 'Hard Skills', required: 4, current: 3.5, fullMark: 5 },
    { subject: 'Soft Skills', required: 3, current: 4, fullMark: 5 },
    { subject: 'Лидерство', required: 3, current: 2.5, fullMark: 5 },
    { subject: 'Аналитика', required: 4, current: 3, fullMark: 5 },
    { subject: 'Бизнес-понимание', required: 3, current: 3, fullMark: 5 },
  ];

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col h-[380px]">
      <div className="mb-2">
        <h3 className="text-[18px] font-bold text-gray-900">Оценка компетенций</h3>
        <p className="text-[13px] text-gray-500 mt-1">Оценка 360 (Май 2025)</p>
      </div>
      
      <div className="flex-1 w-full mt-2 -ml-4 min-h-[250px]">
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data} accessibilityLayer={false}>
            <PolarGrid stroke="#E5E7EB" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 11, fontWeight: 500 }} />
            <PolarRadiusAxis angle={90} domain={[0, 5]} tick={false} axisLine={false} />
            
            <Radar
              name="Ожидание"
              dataKey="required"
              stroke="#9CA3AF"
              strokeDasharray="4 4"
              fill="none"
              strokeWidth={2}
            />
            <Radar
              name="Факт"
              dataKey="current"
              stroke="#E30611"
              fill="#E30611"
              fillOpacity={0.12}
              strokeWidth={2}
            />
            <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} iconType="circle" iconSize={8} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
