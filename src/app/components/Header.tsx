import { Bell, ChevronRight, SquareArrowOutUpRight } from "lucide-react";
import { Link, useLocation } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type HeaderMeta = {
  module: string;
  title: string;
  subtitle: string;
  cta?: string;
};

const routeMeta: Array<{ match: (pathname: string) => boolean; meta: HeaderMeta }> = [
  { match: (p) => p === "/", meta: { module: "Главная", title: "Главная", subtitle: "Корпоративный портал Talenta" } },
  { match: (p) => p === "/dashboard", meta: { module: "Найм", title: "Дашборд найма", subtitle: "Обзор процесса подбора и адаптации", cta: "Создать вакансию" } },
  { match: (p) => p.startsWith("/vacancies"), meta: { module: "Найм", title: "Вакансии", subtitle: "Управление открытыми позициями", cta: "Создать вакансию" } },
  { match: (p) => p.startsWith("/candidates"), meta: { module: "Найм", title: "Кандидаты", subtitle: "База кандидатов и статусы этапов", cta: "Добавить кандидата" } },
  { match: (p) => p === "/interviews", meta: { module: "Найм", title: "Интервью", subtitle: "Планирование и контроль собеседований", cta: "Назначить интервью" } },
  { match: (p) => p === "/reports", meta: { module: "Найм", title: "Отчеты", subtitle: "Аналитика по найму и адаптации" } },
  { match: (p) => p === "/kedo", meta: { module: "КЭДО", title: "Реестр документов", subtitle: "Кадровый электронный документооборот", cta: "Создать документ" } },
  { match: (p) => p === "/kedo/kanban", meta: { module: "КЭДО", title: "Канбан КЭДО", subtitle: "Управление маршрутами подписания", cta: "Создать документ" } },
  { match: (p) => p === "/kedo/create", meta: { module: "КЭДО", title: "Запуск на подпись", subtitle: "Пошаговый мастер создания документа" } },
  { match: (p) => p === "/kedo/templates", meta: { module: "КЭДО", title: "Шаблон", subtitle: "Библиотека шаблонов КЭДО", cta: "Создать шаблон" } },
  { match: (p) => p === "/kedo/settings", meta: { module: "КЭДО", title: "Права доступа", subtitle: "Роли и разрешения модуля КЭДО" } },
  { match: (p) => p === "/development/onboarding", meta: { module: "Онбординг", title: "Мой онбординг", subtitle: "Индивидуальный план адаптации", cta: "Перейти к обучению" } },
  { match: (p) => p === "/development/career-map", meta: { module: "Карьерная карта", title: "Карьерная карта", subtitle: "Ваш карьерный трек" } },
  { match: (p) => p === "/development/tracking", meta: { module: "Отслеживание развития", title: "Карточка развития", subtitle: "KPI, ИПР и компетенции" } },
];

const defaultMeta: HeaderMeta = {
  module: "Talenta",
  title: "Модуль HR",
  subtitle: "Единая среда для найма, развития и кадрового документооборота",
};

export default function Header() {
  const location = useLocation();
  const currentMeta = routeMeta.find((item) => item.match(location.pathname))?.meta ?? defaultMeta;
  const isHome = location.pathname === "/";

  return (
    <header className="bg-white border-b border-gray-100 flex-shrink-0 flex flex-col px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex flex-1" />
        <div className="flex items-center gap-8 justify-center flex-1">
          <button className={isHome ? "text-[15px] font-medium text-slate-900 border-b-2 border-red-600 pb-1" : "text-[15px] font-medium text-slate-700 hover:text-red-600 transition-colors"}>Мои коммуникации</button>
          <button className="text-[15px] font-medium text-slate-700 hover:text-red-600 transition-colors">Полезные ссылки</button>
        </div>
        <div className="flex flex-1 justify-end items-center gap-6">
          <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 rounded-full">
            <Bell className="w-5 h-5" strokeWidth={1.5} />
            <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white">4</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-100 shadow-sm cursor-pointer relative">
            <ImageWithFallback src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" alt="User Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {!isHome && (
      <div className="py-6 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[13px] font-medium text-emerald-600/70">
            <Link to="/" className="hover:text-emerald-600 text-emerald-500">Главная</Link>
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" strokeWidth={2} />
              <span className="text-slate-400">{currentMeta.module}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" strokeWidth={2} />
              <span className="text-slate-400">{currentMeta.title}</span>
            </>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{currentMeta.title}</h1>
          <p className="text-[15px] text-slate-500">{currentMeta.subtitle}</p>
        </div>

        {currentMeta.cta && (
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-2xl text-[15px] font-semibold transition-all shadow-[0_4px_14px_rgba(220,38,38,0.2)] flex items-center gap-2.5">
            {currentMeta.cta}
            <SquareArrowOutUpRight className="w-4 h-4" strokeWidth={2.5} />
          </button>
        )}
      </div>
      )}
    </header>
  );
}

