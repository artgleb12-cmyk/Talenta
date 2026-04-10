import { CheckCircle2 } from "lucide-react";

export default function AdaptationTimeline() {
  const steps = [
    { label: "Выход", subtitle: "0 дней", status: "completed" },
    { label: "Первая неделя", subtitle: "7 дней", status: "completed" },
    { label: "Адаптация", subtitle: "14 дней", status: "completed" },
    { label: "Месяц", subtitle: "30 дней", status: "current" },
    { label: "Углубление", subtitle: "60 дней", status: "pending" },
    { label: "Завершение", subtitle: "90 дней", status: "pending" },
  ];

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100">
      <div className="mb-8">
        <h3 className="text-[18px] font-bold text-gray-900">Дорожная карта онбординга</h3>
        <p className="text-[13px] text-gray-500 mt-1">Текущий этап: 3-я неделя работы</p>
      </div>

      <div className="relative flex justify-between items-start w-full px-6 mb-4">
        <div className="absolute top-[18px] left-8 right-8 h-[2px] bg-gray-100 -translate-y-1/2 z-0"></div>
        <div className="absolute top-[18px] left-8 h-[2px] bg-[#E30611] -translate-y-1/2 z-0 transition-all duration-1000" style={{ width: "50%" }}></div>

        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center gap-4 w-16">
            {step.status === "completed" && (
              <div className="w-9 h-9 rounded-full bg-[#E30611] flex items-center justify-center ring-[6px] ring-white shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
            )}
            {step.status === "current" && (
              <div className="w-9 h-9 rounded-full bg-white border-[3px] border-[#E30611] flex items-center justify-center ring-[6px] ring-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] relative">
                <div className="absolute inset-0 rounded-full border-2 border-[#E30611] animate-ping opacity-30"></div>
                <div className="w-3.5 h-3.5 bg-[#E30611] rounded-full"></div>
              </div>
            )}
            {step.status === "pending" && (
              <div className="w-9 h-9 rounded-full bg-white border-[3px] border-gray-200 flex items-center justify-center ring-[6px] ring-white">
                <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
              </div>
            )}
            <div className="text-center w-24 absolute top-12">
              <div className={`text-[12px] font-bold ${step.status === "pending" ? "text-gray-400" : "text-gray-900"}`}>{step.label}</div>
              <div className="text-[11px] text-gray-500 mt-1">{step.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-12"></div>
    </div>
  );
}
