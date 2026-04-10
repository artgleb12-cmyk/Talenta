import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Shield, Search, Plus, Users, Lock, Info } from "lucide-react";
import { cn } from "../../../lib/utils";

const roles = [
  { id: "admin", name: "Администратор КЭДО", type: "Системная", users: 2, desc: "Полный доступ ко всем модулям и настройкам системы КЭДО." },
  { id: "hr", name: "HR-специалист", type: "Системная", users: 12, desc: "Управление шаблонами, запуск маршрутов и контроль подписания." },
  { id: "manager", name: "Руководитель", type: "Кастомная", users: 45, desc: "Просмотр и согласование документов своих подчиненных." },
  { id: "employee", name: "Сотрудник", type: "Системная", users: 1240, desc: "Базовый доступ для просмотра и подписания своих документов." },
];

const permissionGroups = [
  {
    title: "Документы и реестр",
    items: [
      { id: "view_all", label: "Просмотр всех документов", desc: "Доступ ко всему реестру КЭДО компании" },
      { id: "view_own", label: "Просмотр только своих документов", desc: "Сотрудник видит только те документы, где он участник" },
      { id: "create_docs", label: "Создание и отправка документов", desc: "Право инициировать подписание" },
      { id: "sign_ukep", label: "Подписание УКЭП от лица компании", desc: "Право подписывать документы усиленной подписью как работодатель" },
      { id: "delete_docs", label: "Удаление и архивирование", desc: "Право безвозвратно удалять черновики и переносить в архив" },
    ],
  },
  {
    title: "Шаблоны и маршруты",
    items: [
      { id: "view_tpl", label: "Просмотр шаблонов", desc: "Доступ к библиотеке шаблонов" },
      { id: "edit_tpl", label: "Управление шаблонами", desc: "Создание, редактирование и удаление шаблонов документов" },
      { id: "edit_routes", label: "Настройка маршрутов согласования", desc: "Изменение логики прохождения документов" },
    ],
  },
  {
    title: "Настройки системы",
    items: [
      { id: "manage_roles", label: "Управление ролями и правами", desc: "Доступ к этому разделу настроек" },
      { id: "manage_integrations", label: "Настройка интеграций", desc: "Подключение внешних сервисов (1С, Контур и др.)" },
    ],
  },
];

const rolePermissionsMock: Record<string, Record<string, boolean>> = {
  admin: { view_all: true, view_own: true, create_docs: true, sign_ukep: true, delete_docs: true, view_tpl: true, edit_tpl: true, edit_routes: true, manage_roles: true, manage_integrations: true },
  hr: { view_all: true, view_own: true, create_docs: true, sign_ukep: false, delete_docs: true, view_tpl: true, edit_tpl: true, edit_routes: true, manage_roles: false, manage_integrations: false },
  manager: { view_all: false, view_own: true, create_docs: true, sign_ukep: false, delete_docs: false, view_tpl: true, edit_tpl: false, edit_routes: false, manage_roles: false, manage_integrations: false },
  employee: { view_all: false, view_own: true, create_docs: false, sign_ukep: false, delete_docs: false, view_tpl: false, edit_tpl: false, edit_routes: false, manage_roles: false, manage_integrations: false },
};

function Toggle({ checked, onChange, disabled }: { checked: boolean; onChange: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onChange}
      disabled={disabled}
      className={cn(
        "w-10 h-6 rounded-full transition-all duration-300 relative flex items-center px-0.5",
        checked ? "bg-[#E30611]" : "bg-slate-200",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <div className={cn("w-5 h-5 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-in-out", checked ? "translate-x-4" : "translate-x-0")} />
    </button>
  );
}

export function KedoSettings() {
  const [activeRole, setActiveRole] = useState(roles[1]);
  const [permissions, setPermissions] = useState<Record<string, boolean>>(rolePermissionsMock[activeRole.id]);

  useEffect(() => {
    setPermissions(rolePermissionsMock[activeRole.id]);
  }, [activeRole]);

  const togglePermission = (id: string) => {
    if (activeRole.id === "admin") return;
    setPermissions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 max-w-[1200px] mx-auto pb-12">
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 mb-1.5 font-medium">
            <Link to="/" className="hover:text-[#E30611] cursor-pointer transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-slate-900">КЭДО</span>
          </div>
          <h1 className="text-[28px] font-bold tracking-tight text-slate-900 flex items-center gap-3">Кадровый электронный документооборот</h1>
          <p className="text-[14px] text-slate-500 mt-1 font-medium">Управление реестром и подписанием документов</p>
        </div>
      </div>

      <div className="flex items-center gap-8 border-b border-slate-200 mt-2 mb-2">
        <Link to="/kedo" className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-[14px] transition-colors">Реестр документов</Link>
        <Link to="/kedo/templates" className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-[14px] transition-colors">Шаблоны</Link>
        <Link to="/kedo/settings" className="pb-3 border-b-2 border-[#E30611] text-[#E30611] font-semibold text-[14px] transition-colors">Права доступа</Link>
      </div>

      <div className="w-full bg-white rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.03)] border border-slate-100/60 overflow-hidden flex flex-col md:flex-row min-h-[680px]">
        <div className="w-full md:w-[280px] border-r border-slate-100/80 bg-slate-50/50 flex flex-col shrink-0">
          <div className="p-4 border-b border-slate-100/80">
            <button className="w-full h-[38px] rounded-lg border border-slate-200 bg-white text-slate-700 font-semibold text-[13px] hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center gap-2 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <Plus className="w-4 h-4" />
              Создать роль
            </button>
            <div className="relative mt-3">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Поиск роли..." className="h-[34px] pl-8 pr-3 w-full rounded-md border border-slate-200 bg-white text-[12px] focus:outline-none focus:ring-1 focus:ring-[#E30611] focus:border-[#E30611] transition-all placeholder:text-slate-400" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role)}
                className={cn("w-full flex flex-col text-left px-5 py-4 border-b border-slate-100/60 transition-colors relative", activeRole.id === role.id ? "bg-white z-10" : "hover:bg-white/60")}
              >
                {activeRole.id === role.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E30611]" />}
                <div className="flex items-center justify-between mb-1.5">
                  <span className={cn("font-semibold text-[14px]", activeRole.id === role.id ? "text-[#E30611]" : "text-slate-800")}>{role.name}</span>
                  {role.type === "Системная" && <Lock className="w-3 h-3 text-slate-300" title="Системная роль" />}
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-slate-500 font-medium">
                  <Users className="w-3.5 h-3.5" />
                  {role.users} {role.users > 4 ? "пользователей" : "пользователя"}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col p-6 overflow-y-auto">
          <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <h2 className="text-[20px] font-bold text-slate-900 flex items-center gap-2"><Shield className="w-5 h-5 text-[#E30611]" /> {activeRole.name}</h2>
                <span className={cn("px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider", activeRole.type === "Системная" ? "bg-slate-100 text-slate-500" : "bg-blue-50 text-blue-600")}>{activeRole.type}</span>
              </div>
              <p className="text-[13px] text-slate-500 max-w-lg leading-relaxed">{activeRole.desc}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button className="h-[38px] px-4 rounded-lg border border-slate-200 bg-white text-slate-700 font-semibold text-[13px] hover:bg-slate-50 transition-colors shadow-sm">Назначить</button>
              <button className="h-[38px] px-4 rounded-lg bg-[#E30611] text-white font-semibold text-[13px] hover:bg-[#CC050F] shadow-[0_2px_8px_rgba(227,6,17,0.25)] transition-colors">Сохранить</button>
            </div>
          </div>

          {activeRole.id === "admin" && (
            <div className="mb-6 flex items-start gap-3 bg-blue-50/50 border border-blue-100 text-blue-700 p-4 rounded-xl text-[13px] leading-relaxed">
              <Info className="w-5 h-5 shrink-0 text-blue-500 mt-0.5" />
              <p>Роль «Администратор КЭДО» является базовой системной ролью с полными правами. Вы не можете отключить привилегии для этой роли.</p>
            </div>
          )}

          <div className="space-y-8 pb-8">
            {permissionGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-[14px] font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E30611]" />
                  {group.title}
                </h3>

                <div className="space-y-0 border border-slate-100/80 rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                  {group.items.map((item, idx) => (
                    <div key={item.id} className={cn("flex items-center justify-between p-4 bg-white transition-colors hover:bg-slate-50/50", idx !== group.items.length - 1 && "border-b border-slate-100/80")}>
                      <div className="pr-8">
                        <div className="text-[14px] font-semibold text-slate-800 mb-0.5">{item.label}</div>
                        <div className="text-[13px] text-slate-500">{item.desc}</div>
                      </div>
                      <Toggle checked={permissions[item.id] || false} onChange={() => togglePermission(item.id)} disabled={activeRole.id === "admin"} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[14px] font-bold text-slate-900">Пользователи с этой ролью ({activeRole.users})</h3>
              <button className="text-[13px] text-[#E30611] font-semibold hover:underline">Смотреть всех</button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2.5">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" alt="User 1" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" alt="User 2" />
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" alt="User 3" />
                {activeRole.users > 3 && <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-[12px] font-bold text-slate-600 z-10">+{activeRole.users - 3}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
