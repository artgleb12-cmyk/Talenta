import { Target, TrendingUp } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';

export default function EmployeeKPIs() {
  const kpiData = [
    { name: 'Янв', plan: 100, fact: 105 },
    { name: 'Фев', plan: 100, fact: 98 },
    { name: 'Мар', plan: 100, fact: 100 },
    { name: 'Апр', plan: 100, fact: 110 },
    { name: 'Май', plan: 100, fact: 95 },
    { name: 'Июн', plan: 100, fact: 102 },
  ];

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-[18px] font-bold text-gray-900">Выполнение KPI</h3>
          <p className="text-[13px] text-gray-500 mt-1">Динамика за последние 6 месяцев</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-200"></div>
            <span className="text-[12px] font-medium text-gray-600">План</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#E30611]"></div>
            <span className="text-[12px] font-medium text-gray-600">Факт</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[220px]">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={kpiData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barGap={0} accessibilityLayer={false}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 11 }}
            />
            <Tooltip 
              cursor={{ fill: '#f9fafb' }}
              contentStyle={{ borderRadius: '12px', border: '1px solid #f3f4f6', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '13px', fontWeight: 500 }}
            />
            <Bar dataKey="plan" name="План" fill="#e5e7eb" radius={[4, 4, 0, 0]} barSize={16} />
            <Bar dataKey="fact" name="Факт" fill="#E30611" radius={[4, 4, 0, 0]} barSize={16}>
              {kpiData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fact >= entry.plan ? '#10b981' : '#E30611'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* KPI Summary items */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-50/80 p-4 rounded-[16px] border border-gray-100 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <Target className="w-5 h-5 text-gray-400" />
          </div>
          <div>
            <div className="text-[12px] text-gray-500 font-medium">Среднее выполнение</div>
            <div className="text-[18px] font-bold text-gray-900">101.6%</div>
          </div>
        </div>
        <div className="bg-[#FFFDF5] p-4 rounded-[16px] border border-[#FFEAB3] flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-amber-100">
            <TrendingUp className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <div className="text-[12px] text-gray-500 font-medium">Динамика к прошлому полугодию</div>
            <div className="text-[18px] font-bold text-amber-600">+12%</div>
          </div>
        </div>
      </div>
    </div>
  )
}
