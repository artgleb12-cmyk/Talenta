import { UserCheck, MessageSquare, AlertCircle } from "lucide-react";

export default function ManagerActions() {
  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex-1">
      <h3 className="text-[18px] font-bold text-gray-900 mb-5">Действия руководителя</h3>
      
      <div className="flex flex-col gap-3">
        <button className="w-full py-3.5 px-4 flex items-center justify-between text-left bg-[#E30611] hover:bg-[#c9050f] text-white rounded-[16px] transition-colors shadow-[0_4px_14px_rgba(227,6,17,0.2)] group">
          <div>
            <div className="text-[14px] font-bold">Утвердить ИПР</div>
            <div className="text-[12px] text-red-100 mt-0.5">Ожидает вашего согласования</div>
          </div>
          <AlertCircle className="w-5 h-5 text-white/80 group-hover:scale-110 transition-transform" />
        </button>

        <button className="w-full py-3.5 px-4 flex items-center justify-between text-left bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-900 rounded-[16px] transition-colors group">
          <div>
            <div className="text-[14px] font-bold">Оставить обратную связь</div>
            <div className="text-[12px] text-gray-500 mt-0.5">По итогам спринта</div>
          </div>
          <MessageSquare className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </button>

        <button className="w-full py-3.5 px-4 flex items-center justify-between text-left bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-900 rounded-[16px] transition-colors group">
          <div>
            <div className="text-[14px] font-bold">Рекомендовать в резерв</div>
            <div className="text-[12px] text-gray-500 mt-0.5">Кандидат готов на 75%</div>
          </div>
          <UserCheck className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </button>
      </div>

      <div className="mt-6 pt-5 border-t border-gray-100">
        <div className="text-[13px] font-bold text-gray-900 mb-2">Заметка руководителя</div>
        <p className="text-[12px] text-gray-500 italic leading-relaxed bg-[#FFFDF5] p-3 rounded-[12px] border border-[#FFEAB3]">
          "Анна показывает отличные результаты по скорости разработки. Нужно подтянуть навыки наставничества для перехода на Senior."
        </p>
      </div>
    </div>
  )
}
