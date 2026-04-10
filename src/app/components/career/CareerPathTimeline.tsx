import { CheckCircle2, Lock, Star } from "lucide-react";
import { clsx } from "clsx";

export default function CareerPathTimeline() {
  const steps = [
    { role: "Junior Frontend", grade: "Grade 7", status: "completed", duration: "1 год" },
    { role: "Middle Frontend", grade: "Grade 8", status: "current", duration: "Текущая", progress: 75 },
    { role: "Senior Frontend", grade: "Grade 9", status: "next", duration: "Цель" },
    { role: "Team Lead", grade: "Grade 10+", status: "locked", duration: "Перспектива" },
  ];

  return (
    <div className="bg-white rounded-[24px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
      <div className="mb-10">
        <h3 className="text-[18px] font-bold text-gray-900">Ваш карьерный трек</h3>
        <p className="text-[13px] text-gray-500 mt-1">Прозрачная лестница развития внутри компании</p>
      </div>

      <div className="relative flex justify-between items-start w-full">
        <div className="absolute top-[28px] left-[40px] right-[40px] h-[3px] bg-gray-100 -translate-y-1/2 z-0 rounded-full"></div>
        <div className="absolute top-[28px] left-[40px] h-[3px] bg-[#E30611] -translate-y-1/2 z-0 rounded-full transition-all duration-1000" style={{ width: "45%" }}></div>

        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center w-32 group">
            <div
              className={clsx(
                "w-14 h-14 rounded-[16px] flex items-center justify-center border-4 border-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] mb-4 transition-transform duration-300 group-hover:-translate-y-1",
                step.status === "completed"
                  ? "bg-gray-800 text-white"
                  : step.status === "current"
                    ? "bg-[#E30611] text-white"
                    : step.status === "next"
                      ? "bg-white border-2 border-[#E30611] border-dashed text-[#E30611]"
                      : "bg-gray-50 border-2 border-gray-200 text-gray-400"
              )}
            >
              {step.status === "completed" && <CheckCircle2 className="w-6 h-6" />}
              {step.status === "current" && <Star className="w-6 h-6 fill-current" />}
              {step.status === "next" && <TargetIcon className="w-6 h-6" />}
              {step.status === "locked" && <Lock className="w-5 h-5" />}
            </div>

            <div className="text-center">
              <div className={clsx("text-[14px] font-bold leading-tight mb-1", step.status === "locked" ? "text-gray-400" : "text-gray-900")}>{step.role}</div>
              <div className="text-[12px] font-bold text-gray-400 mb-1">{step.grade}</div>

              <div
                className={clsx(
                  "inline-flex px-2 py-0.5 rounded-[6px] text-[11px] font-bold uppercase tracking-wider mt-1",
                  step.status === "completed"
                    ? "bg-gray-100 text-gray-500"
                    : step.status === "current"
                      ? "bg-red-50 text-[#E30611]"
                      : step.status === "next"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-transparent text-gray-300 border border-gray-200"
                )}
              >
                {step.duration}
              </div>
            </div>

            {step.status === "current" && (
              <div className="absolute -top-10 bg-gray-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-[8px] whitespace-nowrap shadow-lg">
                Прогресс {step.progress}%
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
