import { Info, Briefcase, Zap, ShieldCheck } from "lucide-react";

export default function TargetRoleInfo() {
  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex-1">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
          <Info className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-[18px] font-bold text-gray-900 leading-tight">О должности</h3>
          <div className="text-[13px] font-bold text-blue-600 uppercase tracking-wider mt-0.5">Senior Frontend</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-[16px] border border-gray-100">
          <Briefcase className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
          <div>
            <div className="text-[14px] font-bold text-gray-900 mb-1">Зона ответственности</div>
            <p className="text-[12px] text-gray-600 leading-relaxed font-medium">Проектирование архитектуры клиентских приложений, код-ревью, наставничество младших разработчиков, принятие технологических решений.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-[#FFFDF5] rounded-[16px] border border-[#FFEAB3]">
          <Zap className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
          <div>
            <div className="text-[14px] font-bold text-gray-900 mb-1">Новые задачи</div>
            <ul className="text-[12px] text-gray-600 leading-relaxed font-medium list-disc pl-4 space-y-1">
              <li>Управление техническим долгом</li>
              <li>Оптимизация производительности (Web Vitals)</li>
              <li>Проведение технических собеседований</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-emerald-50/50 rounded-[16px] border border-emerald-100/50">
          <ShieldCheck className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
          <div>
            <div className="text-[14px] font-bold text-gray-900 mb-1">Компенсация</div>
            <p className="text-[12px] text-gray-600 leading-relaxed font-medium">Пересмотр вилки оклада + расширенный пакет ДМС, доступ к профильным конференциям от компании.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
