import { CheckCircle2, Clock, BookOpen, Target, BrainCircuit } from "lucide-react";
import { clsx } from "clsx";

export default function TransitionRequirements() {
  const requirements = [
    {
      category: "KPI",
      icon: <Target className="w-4 h-4 text-[#E30611]" />,
      bgIcon: "bg-red-50",
      items: [
        { title: "Выполнение SLA > 95% за 3 месяца", status: "done", progress: 100 },
        { title: "Отсутствие критических багов (P0) в релизах", status: "in_progress", progress: 80 },
      ],
    },
    {
      category: "Обязательное обучение",
      icon: <BookOpen className="w-4 h-4 text-blue-600" />,
      bgIcon: "bg-blue-50",
      items: [
        { title: "Продвинутый React и паттерны проектирования", status: "done", progress: 100 },
        { title: "Курс по System Design (Frontend)", status: "pending", progress: 0 },
        { title: "Тренинг «Наставничество: базовый уровень»", status: "pending", progress: 0 },
      ],
    },
    {
      category: "Компетенции (Навыки)",
      icon: <BrainCircuit className="w-4 h-4 text-emerald-600" />,
      bgIcon: "bg-emerald-50",
      items: [
        { title: "Провести 5 код-ревью уровня Senior", status: "in_progress", progress: 60, meta: "3 / 5 ревью" },
        { title: "Подтвердить владение CI/CD пайплайнами", status: "done", progress: 100 },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex-1">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-[18px] font-bold text-gray-900">Критерии перехода на Senior</h3>
          <p className="text-[13px] text-gray-500 mt-1">Обязательные требования для аттестации</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-32 bg-gray-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-[#E30611] h-full rounded-full transition-all duration-700" style={{ width: "75%" }}></div>
          </div>
          <span className="text-[13px] font-bold text-gray-900">75%</span>
        </div>
      </div>

      <div className="space-y-6">
        {requirements.map((req, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-3 mb-3">
              <div className={clsx("w-8 h-8 rounded-[10px] flex items-center justify-center border border-white shadow-sm", req.bgIcon)}>{req.icon}</div>
              <h4 className="text-[14px] font-bold text-gray-900 uppercase tracking-wider">{req.category}</h4>
            </div>

            <div className="flex flex-col gap-2 pl-11">
              {req.items.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-gray-50/50 p-3.5 rounded-[16px] border border-transparent hover:border-gray-100 transition-colors group">
                  <div className="shrink-0">
                    {item.status === "done" && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                    {item.status === "in_progress" && <Clock className="w-5 h-5 text-amber-500" />}
                    {item.status === "pending" && <div className="w-4 h-4 m-0.5 rounded-full border-2 border-gray-300"></div>}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className={clsx("text-[14px] font-bold truncate transition-colors", item.status === "done" ? "text-gray-500 line-through" : "text-gray-900 group-hover:text-[#E30611]")}>
                      {item.title}
                    </div>
                  </div>

                  {item.meta && <div className="text-[12px] font-medium text-gray-500 bg-white px-2 py-0.5 rounded-md shadow-sm border border-gray-100">{item.meta}</div>}

                  {item.status === "in_progress" && (
                    <div className="w-16 flex items-center justify-end">
                      <span className="text-[12px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-[6px]">{item.progress}%</span>
                    </div>
                  )}
                  {item.status === "pending" && (
                    <div className="w-16 flex items-center justify-end">
                      <button className="text-[12px] font-bold text-[#E30611] hover:underline opacity-0 group-hover:opacity-100 transition-opacity">Начать</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
