import { Award, Target } from "lucide-react";

export default function AchievementsCard() {
  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100">
      <h3 className="text-[18px] font-bold text-gray-900 mb-5">Достижения</h3>

      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4 bg-[#FFFDF5] p-4 rounded-[16px] border border-[#FFEAB3]">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-amber-100">
            <Target className="w-5 h-5 text-[#E30611]" />
          </div>
          <div className="mt-0.5">
            <div className="text-[14px] font-bold text-gray-900">Первый план</div>
            <div className="text-[12px] text-gray-600 font-medium mt-1 leading-snug">ИПР создан и утвержден руководителем</div>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-[16px] border border-gray-100 bg-white opacity-60">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-200">
            <Award className="w-5 h-5 text-gray-400" />
          </div>
          <div className="mt-0.5">
            <div className="text-[14px] font-bold text-gray-500">Знаток продукта</div>
            <div className="text-[12px] text-gray-400 font-medium mt-1 leading-snug">Пройдите итоговую аттестацию на 100%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
