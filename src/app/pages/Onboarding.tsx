import { UserPlus, Clock, CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function Onboarding() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Онбординг</h1>
      </div>
      
      <div className="bg-white rounded-[24px] border border-slate-100 p-8 shadow-sm">
        <div className="flex flex-col gap-4">
          <p className="text-slate-500">
            Здесь будет находиться интерфейс модуля онбординга новых сотрудников.
          </p>
        </div>
      </div>
    </div>
  );
}