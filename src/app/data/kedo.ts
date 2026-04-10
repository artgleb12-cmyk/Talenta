export interface User {
  id: string
  name: string
  avatar: string
  role: string
}

export interface Document {
  id: string
  title: string
  type: string
  company: string
  initiator: User
  participants: User[]
  status: "Черновик" | "На согласовании" | "На подписи" | "Подписан" | "Требует внимания" | "Архив" | "Отклонён"
  deadline: string
  lastAction: string
}

export const users: User[] = [
  { id: "1", name: "Дмитрий Кузнецов", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150", role: "HR-директор" },
  { id: "2", name: "Анна Смирнова", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150", role: "Руководитель отдела" },
  { id: "3", name: "Иван Петров", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150", role: "Сотрудник" },
  { id: "4", name: "Елена Соколова", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150", role: "Бухгалтер" },
  { id: "5", name: "Михаил Волков", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150", role: "Сотрудник" },
]

export const documents: Document[] = [
  {
    id: "DOC-2026-001",
    title: "Заявление на отпуск",
    type: "Заявление",
    company: "ООО «Талента Групп»",
    initiator: users[2],
    participants: [users[1], users[0]],
    status: "На подписи",
    deadline: "2026-04-12T10:00:00",
    lastAction: "Согласовано рук-лем"
  },
  {
    id: "DOC-2026-002",
    title: "Приказ о приеме на работу (Волков М.)",
    type: "Приказ",
    company: "ООО «Талента Групп»",
    initiator: users[0],
    participants: [users[4], users[0]],
    status: "Требует внимания",
    deadline: "2026-04-10T18:00:00",
    lastAction: "Ошибка отправки в 1С"
  },
  {
    id: "DOC-2026-003",
    title: "Согласие на обработку ПДн",
    type: "Согласие",
    company: "АО «Талента ИТ»",
    initiator: users[0],
    participants: [users[4]],
    status: "Подписан",
    deadline: "2026-04-05T12:00:00",
    lastAction: "Подписано сотрудником"
  },
  {
    id: "DOC-2026-004",
    title: "Служебная записка на командировку",
    type: "Служебная записка",
    company: "ООО «Талента Групп»",
    initiator: users[1],
    participants: [users[0], users[3]],
    status: "На согласовании",
    deadline: "2026-04-15T10:00:00",
    lastAction: "Отправлено на согласование"
  },
  {
    id: "DOC-2026-005",
    title: "Расчетный листок за Март 2026",
    type: "Уведомление",
    company: "ООО «Талента Групп»",
    initiator: users[3],
    participants: [users[2]],
    status: "Черновик",
    deadline: "2026-04-10T23:59:59",
    lastAction: "Создан"
  },
  {
    id: "DOC-2026-006",
    title: "Трудовой договор (Смирнова А.)",
    type: "Договор",
    company: "АО «Талента ИТ»",
    initiator: users[0],
    participants: [users[1]],
    status: "На подписи",
    deadline: "2026-04-11T15:00:00",
    lastAction: "Согласовано юристом"
  }
]
