import { useMemo, useState } from "react";
import { Plus, Search, Filter, ChevronRight } from "lucide-react";
import { Link } from "react-router";

type Vacancy = {
  id: string;
  title: string;
  department: string;
  city: string;
  status: "Открыта" | "На согласовании" | "Пауза";
  candidates: number;
  updatedAt: string;
};

const data: Vacancy[] = [
  { id: "V-101", title: "Frontend разработчик", department: "IT", city: "Москва", status: "Открыта", candidates: 27, updatedAt: "10.04.2026" },
  { id: "V-102", title: "Backend разработчик", department: "IT", city: "Санкт-Петербург", status: "Открыта", candidates: 19, updatedAt: "09.04.2026" },
  { id: "V-103", title: "HR бизнес-партнер", department: "HR", city: "Казань", status: "На согласовании", candidates: 8, updatedAt: "08.04.2026" },
  { id: "V-104", title: "Аналитик данных", department: "BI", city: "Екатеринбург", status: "Пауза", candidates: 11, updatedAt: "05.04.2026" },
];

export default function Vacancies() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<string>("Все");

  const filtered = useMemo(() => {
    return data.filter((row) => {
      const hitQuery = `${row.title} ${row.department} ${row.city}`.toLowerCase().includes(query.toLowerCase());
      const hitStatus = status === "Все" || row.status === status;
      return hitQuery && hitStatus;
    });
  }, [query, status]);

  return (
    <div className="max-w-[1400px] mx-auto pb-10 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Список вакансий</h2>
          <p className="text-sm text-slate-500">Управление позициями и этапами подбора</p>
        </div>
        <button className="bg-red-600 text-white rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-red-700 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" /> Создать вакансию
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 p-4 flex flex-wrap gap-3 items-center">
        <div className="relative min-w-[260px] flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Поиск по вакансии, отделу, городу" className="w-full h-10 pl-9 pr-3 rounded-xl border border-slate-200 bg-slate-50 text-sm" />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="h-10 rounded-xl border border-slate-200 px-3 text-sm bg-white">
            <option>Все</option>
            <option>Открыта</option>
            <option>На согласовании</option>
            <option>Пауза</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100 text-sm text-slate-500">
            <tr>
              <th className="py-3 px-5">Вакансия</th>
              <th className="py-3 px-5">Отдел</th>
              <th className="py-3 px-5">Город</th>
              <th className="py-3 px-5">Статус</th>
              <th className="py-3 px-5">Кандидаты</th>
              <th className="py-3 px-5">Обновлено</th>
              <th className="py-3 px-5">Действие</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((v) => (
              <tr key={v.id} className="border-b last:border-b-0 border-slate-100 hover:bg-slate-50/50">
                <td className="py-3 px-5 font-semibold text-slate-900">{v.title}</td>
                <td className="py-3 px-5 text-slate-600">{v.department}</td>
                <td className="py-3 px-5 text-slate-600">{v.city}</td>
                <td className="py-3 px-5"><Status value={v.status} /></td>
                <td className="py-3 px-5 text-slate-700">{v.candidates}</td>
                <td className="py-3 px-5 text-slate-500">{v.updatedAt}</td>
                <td className="py-3 px-5">
                  <Link to={`/vacancies/${v.id}`} className="text-red-600 hover:text-red-700 text-sm font-medium inline-flex items-center gap-1">Открыть <ChevronRight className="w-4 h-4" /></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Status({ value }: { value: Vacancy["status"] }) {
  const cls = value === "Открыта" ? "bg-emerald-50 text-emerald-700" : value === "На согласовании" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600";
  return <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${cls}`}>{value}</span>;
}
