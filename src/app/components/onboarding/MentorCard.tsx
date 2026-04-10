import { MessageCircle } from "lucide-react";

export default function MentorCard() {
  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100">
      <h3 className="text-[18px] font-bold text-gray-900 mb-5">Наставники и HR</h3>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 bg-gray-50/50 p-4 rounded-[16px] border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?w=128&q=80" alt="Mentor" className="w-10 h-10 rounded-full object-cover shadow-sm" />
              <div>
                <div className="text-[14px] font-bold text-gray-900">Евгения Романова</div>
                <div className="text-[12px] text-gray-500 font-medium">Руководитель отдела</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <div className="text-[#E30611] text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[6px] border border-red-100 bg-white shadow-sm">Наставник</div>
            <div className="text-[11px] text-gray-400 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> В сети
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-gray-50/50 p-4 rounded-[16px] border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?w=128&q=80" alt="HR" className="w-10 h-10 rounded-full object-cover shadow-sm" />
              <div>
                <div className="text-[14px] font-bold text-gray-900">Михаил Петров</div>
                <div className="text-[12px] text-gray-500 font-medium">HR-партнер</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <div className="text-blue-600 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[6px] border border-blue-100 bg-white shadow-sm">HR-куратор</div>
            <div className="text-[11px] text-gray-400 font-medium">Был в 14:00</div>
          </div>
        </div>

        <button className="w-full mt-2 py-3 flex items-center justify-center gap-2 text-[14px] font-bold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-[12px] transition-colors shadow-sm">
          <MessageCircle className="w-4 h-4" />
          Связаться в чате
        </button>
      </div>
    </div>
  );
}
