import { Link } from "react-router";
import { Search, UserPlus } from "lucide-react";

const candidates = [
  { id: "c1", name: "Иван Петров", role: "Frontend разработчик", stage: "HR интервью", score: 86 },
  { id: "c2", name: "Анна Смирнова", role: "Product Manager", stage: "Тех интервью", score: 91 },
  { id: "c3", name: "Сергей Волков", role: "UX/UI дизайнер", stage: "Оффер", score: 88 },
];

export default function Candidates() {
  return (
    <div className="max-w-[1400px] mx-auto pb-10 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Кандидаты</h2>
          <p className="text-sm text-slate-500">Реестр кандидатов и текущие этапы</p>
        </div>
        <button className="bg-red-600 text-white rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-red-700 transition-colors flex items-center gap-2">
          <UserPlus className="w-4 h-4" /> Добавить кандидата
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 p-4">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input placeholder="Поиск по имени, позиции, этапу" className="w-full h-10 pl-9 pr-3 rounded-xl border border-slate-200 bg-slate-50 text-sm" />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100 text-sm text-slate-500">
            <tr>
              <th className="py-3 px-5">Кандидат</th>
              <th className="py-3 px-5">Позиция</th>
              <th className="py-3 px-5">Этап</th>
              <th className="py-3 px-5">Скоринг</th>
              <th className="py-3 px-5">Профиль</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr key={c.id} className="border-b last:border-b-0 border-slate-100 hover:bg-slate-50/50">
                <td className="py-3 px-5 font-semibold text-slate-900">{c.name}</td>
                <td className="py-3 px-5 text-slate-600">{c.role}</td>
                <td className="py-3 px-5 text-slate-600">{c.stage}</td>
                <td className="py-3 px-5"><span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">{c.score}</span></td>
                <td className="py-3 px-5"><Link to={`/candidates/${c.id}`} className="text-red-600 hover:text-red-700 text-sm font-medium">Открыть</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
