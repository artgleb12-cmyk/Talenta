import { Clock } from "lucide-react";

export default function UpcomingEventsCard() {
  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100">
      <h3 className="text-[18px] font-bold text-gray-900 mb-5">Ближайшие события</h3>

      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-[14px] bg-red-50 text-[#E30611] flex flex-col items-center justify-center shrink-0 border border-red-100 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider leading-none mb-0.5">Июн</span>
            <span className="text-[18px] font-bold leading-none">28</span>
          </div>
          <div className="pt-0.5">
            <div className="text-[14px] font-bold text-gray-900 leading-tight">Подведение итогов месяца 1</div>
            <div className="flex items-center gap-1.5 text-[12px] text-gray-500 font-medium mt-2">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              14:00 - 15:00
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-gray-100 w-full ml-16"></div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-[14px] bg-gray-50 text-gray-500 flex flex-col items-center justify-center shrink-0 border border-gray-100">
            <span className="text-[10px] font-bold uppercase tracking-wider leading-none mb-0.5">Июл</span>
            <span className="text-[18px] font-bold leading-none">05</span>
          </div>
          <div className="pt-0.5">
            <div className="text-[14px] font-bold text-gray-900 leading-tight">Обучение: Эффективные коммуникации</div>
            <div className="flex items-center gap-1.5 text-[12px] text-gray-500 font-medium mt-2">
              <Clock className="w-3.5 h-3.5" />
              10:00 - 12:00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
