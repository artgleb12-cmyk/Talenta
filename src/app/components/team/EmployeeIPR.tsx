import { CheckCircle2, Clock, PlayCircle } from "lucide-react";
import { clsx } from "clsx";

export default function EmployeeIPR() {
  const iprTasks = [
    {
      id: 1,
      title: "Пройти курс «Архитектура Frontend-приложений»",
      type: "Обучение",
      status: "done",
      progress: 100,
      deadline: "Выполнено",
      result: "Сертификат получен, 98 баллов"
    },
    {
      id: 2,
      title: "Провести 3 код-ревью для Junior разработчиков",
      type: "Практика",
      status: "in_progress",
      progress: 66,
      deadline: "до 30 авг",
      meta: "2 / 3 ревью"
    },
    {
      id: 3,
      title: "Подготовить доклад на внутренний митап",
      type: "Развитие",
      status: "pending",
      progress: 0,
      deadline: "до 15 сен",
    }
  ];

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex-1">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-[18px] font-bold text-gray-900">Индивидуальный план развития (ИПР)</h3>
          <p className="text-[13px] text-gray-500 mt-1">Текущие задачи и обучение сотрудника</p>
        </div>
        <button className="text-[13px] font-bold text-[#E30611] hover:underline">Добавить цель</button>
      </div>

      <div className="flex flex-col gap-3">
        {iprTasks.map((task) => (
          <div key={task.id} className="flex items-start gap-4 p-4 rounded-[16px] border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-colors group">
            <div className="mt-0.5 shrink-0">
              {task.status === 'done' && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
              {task.status === 'in_progress' && <PlayCircle className="w-6 h-6 text-amber-500" />}
              {task.status === 'pending' && <Clock className="w-6 h-6 text-gray-300" />}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <div className={clsx(
                  "text-[15px] font-bold truncate",
                  task.status === 'done' ? "text-gray-500 line-through" : "text-gray-900"
                )}>
                  {task.title}
                </div>
                <div className={clsx(
                  "inline-flex items-center px-2 py-0.5 rounded-[6px] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap w-fit",
                  task.status === 'done' ? "bg-emerald-50 text-emerald-600" :
                  task.status === 'in_progress' ? "bg-amber-50 text-amber-600" :
                  "bg-gray-100 text-gray-500"
                )}>
                  {task.deadline}
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[11px] font-bold px-2 py-0.5 bg-gray-100 text-gray-600 rounded-[6px] uppercase tracking-wider">
                  {task.type}
                </span>
                {task.meta && (
                  <span className="text-[12px] font-medium text-gray-500 bg-white px-2 py-0.5 rounded-md shadow-sm border border-gray-100">
                    {task.meta}
                  </span>
                )}
                {task.result && (
                  <span className="text-[12px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                    {task.result}
                  </span>
                )}
              </div>

              {(task.status === 'in_progress' || task.status === 'done') && (
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className={clsx(
                        "h-full rounded-full transition-all duration-1000",
                        task.progress === 100 ? "bg-emerald-500" : "bg-[#E30611]"
                      )} 
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-[12px] font-bold text-gray-900 w-8">{task.progress}%</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
