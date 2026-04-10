import { ChevronDown, Users, GraduationCap, Route, Activity, FileSignature, House } from "lucide-react";
import { useState, type ComponentType } from "react";
import { NavLink } from "react-router";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const hiringSubItems = [
  { label: "Дашборд", to: "/dashboard" },
  { label: "Вакансии", to: "/vacancies" },
  { label: "Кандидаты", to: "/candidates" },
  { label: "Интервью", to: "/interviews" },
  { label: "Отчеты", to: "/reports" },
];

const kedoSubItems = [
  { label: "Реестр документов", to: "/kedo" },
  { label: "Канбан", to: "/kedo/kanban" },
  { label: "Шаблон", to: "/kedo/templates" },
  { label: "Права доступа", to: "/kedo/settings" },
];

type ModuleKey = "hiring" | "kedo" | "onboarding" | "career" | "tracking";

export default function Sidebar() {
  const [openModules, setOpenModules] = useState<Record<ModuleKey, boolean>>({
    hiring: true,
    kedo: true,
    onboarding: true,
    career: true,
    tracking: true,
  });

  const toggleModule = (key: ModuleKey) => {
    setOpenModules((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="w-72 bg-white h-full border-r border-gray-100 flex flex-col pt-6 flex-shrink-0 relative overflow-y-auto modern-scrollbar">
      <div className="px-8 pb-6 flex items-center">
        <img src={`${import.meta.env.BASE_URL}eatyl-logo.svg`} alt="Estyl logo" className="w-7 h-7 object-contain" />
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <div className="px-2 space-y-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-2xl text-[15px] font-medium transition-colors",
                isActive ? "bg-red-50 text-red-600" : "text-slate-600 hover:bg-gray-50 hover:text-slate-900"
              )
            }
          >
            <House className="w-5 h-5" strokeWidth={1.5} />
            Главная
          </NavLink>

          <ModuleBlock icon={Users} title="Найм" items={hiringSubItems} isOpen={openModules.hiring} onToggle={() => toggleModule("hiring")} />
          <ModuleBlock icon={FileSignature} title="КЭДО" items={kedoSubItems} isOpen={openModules.kedo} onToggle={() => toggleModule("kedo")} />
          <ModuleBlock
            icon={GraduationCap}
            title="Онбординг"
            items={[{ label: "Мой онбординг", to: "/development/onboarding" }]}
            isOpen={openModules.onboarding}
            onToggle={() => toggleModule("onboarding")}
          />
          <ModuleBlock
            icon={Route}
            title="Карьерная карта"
            items={[{ label: "Трек развития", to: "/development/career-map" }]}
            isOpen={openModules.career}
            onToggle={() => toggleModule("career")}
          />
          <ModuleBlock
            icon={Activity}
            title="Отслеживание развития"
            items={[{ label: "Карточка сотрудника", to: "/development/tracking" }]}
            isOpen={openModules.tracking}
            onToggle={() => toggleModule("tracking")}
          />
        </div>
      </nav>
    </aside>
  );
}

function ModuleBlock({
  icon: Icon,
  title,
  items,
  isOpen,
  onToggle,
}: {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  items: Array<{ label: string; to: string }>;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl p-2">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-2 py-2 text-[15px] font-medium text-slate-900 mb-1"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-red-600" strokeWidth={1.5} />
          <span className="text-red-600 text-left">{title}</span>
        </div>
        <ChevronDown
          className={cn("w-4 h-4 text-red-600 transition-transform duration-200", isOpen ? "rotate-0" : "-rotate-90")}
          strokeWidth={1.5}
        />
      </button>

      {isOpen && (
        <div className="space-y-1 pl-4">
          {items.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.to}
              end={item.to === "/dashboard" || item.to === "/kedo"}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-2xl text-[14px] font-medium transition-colors",
                  isActive ? "bg-red-50 text-red-600" : "text-slate-500 hover:bg-gray-50 hover:text-slate-900"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
