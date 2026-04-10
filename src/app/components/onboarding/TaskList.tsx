import { CheckCircle2, Clock, PlayCircle } from "lucide-react";

export default function TaskList() {
  const tasks = [
    { title: "Ознакомиться с Welcome-книгой", type: "Документ", status: "done", progress: 100 },
    { title: "Пройти курс «Структура компании»", type: "Обучение", status: "done", progress: 100 },
    { title: "Изучить регламенты", type: "Документ", status: "in_progress", progress: 75, date: "В процессе" },
    { title: "Встреча с руководителем (1-on-1)", type: "Встреча", status: "pending", date: "до 28 июня" },
    { title: "Пройти тест по продукту", type: "Оценка", status: "pending", date: "до 30 июня" },
  ];

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col h-full min-h-[380px]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-[18px] font-bold text-gray-900">Задачи на 1 месяц</h3>
          <p className="text-[13px] text-gray-500 mt-1">Осталось 3 задачи</p>
        </div>
        <button className="text-[13px] font-medium text-[#E30611] hover:underline">Все задачи</button>
      </div>

      <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-2" style={{ scrollbarWidth: "thin" }}>
        {tasks.map((task, idx) => (
          <div key={idx} className="flex items-start gap-4 p-3.5 rounded-[16px] hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
            <div className="mt-0.5 shrink-0">
              {task.status === "done" && <CheckCircle2 className="w-[22px] h-[22px] text-emerald-500" />}
              {task.status === "in_progress" && <PlayCircle className="w-[22px] h-[22px] text-amber-500" />}
              {task.status === "pending" && <Clock className="w-[22px] h-[22px] text-gray-300" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className={`text-[14px] font-bold ${task.status === "done" ? "text-gray-500 line-through" : "text-gray-900"} truncate`}>{task.title}</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[11px] font-bold px-2 py-0.5 bg-gray-100 text-gray-600 rounded-[6px] uppercase tracking-wider">{task.type}</span>
                {task.date && <span className={`text-[12px] font-medium ${task.status === "in_progress" ? "text-amber-600 bg-amber-50 px-2 py-0.5 rounded-[6px]" : "text-gray-400"}`}>{task.date}</span>}
                {task.status === "in_progress" && <span className="text-[12px] font-bold text-gray-900 ml-auto">{task.progress}%</span>}
              </div>
              {task.status === "in_progress" && (
                <div className="mt-2.5 w-full bg-gray-100 rounded-full h-1 overflow-hidden">
                  <div className="bg-[#E30611] h-full rounded-full" style={{ width: `${task.progress}%` }}></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
