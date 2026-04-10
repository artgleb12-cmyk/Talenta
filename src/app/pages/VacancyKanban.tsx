import { useParams } from "react-router";

const columns = [
  { key: "new", title: "Новые", items: ["Иван Петров", "Мария Лебедева"] },
  { key: "screen", title: "Скрининг", items: ["Анна Смирнова"] },
  { key: "tech", title: "Тех интервью", items: ["Сергей Волков", "Павел Кузнецов"] },
  { key: "offer", title: "Оффер", items: ["Екатерина Орлова"] },
];

export default function VacancyKanban() {
  const { id } = useParams();

  return (
    <div className="max-w-[1400px] mx-auto pb-10 flex flex-col gap-5">
      <div className="bg-white rounded-3xl border border-slate-100 p-6">
        <h2 className="text-2xl font-bold text-slate-900">Канбан кандидатов по вакансии #{id}</h2>
        <p className="text-slate-500">Перетаскивайте карточки между этапами подбора</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {columns.map((col) => (
          <div key={col.key} className="bg-white rounded-2xl border border-slate-100 p-4">
            <div className="font-semibold text-slate-900 mb-3">{col.title} ({col.items.length})</div>
            <div className="space-y-3">
              {col.items.map((name) => (
                <div key={name} className="p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-700">{name}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
