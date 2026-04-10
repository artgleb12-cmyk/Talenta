export type BirthdayPerson = {
  name: string;
  birthDate: string;
  avatar: string;
};

const EMPLOYEE_PHOTOS_BASE = `${import.meta.env.BASE_URL}employee-photos/`;

export const ONLINE_EMPLOYEES = "257";

export const HOMEPAGE_NEWS = {
  title: "Extyl снова в топе по разработке!",
  description: "Extyl вошел в топ-10 российских компаний по заказной разработке по версии CNews",
  date: "04.04",
  image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
};

export const BIRTHDAYS: BirthdayPerson[] = [
  {
    name: "Сергей Воробьев",
    birthDate: "19.05",
    avatar: `${EMPLOYEE_PHOTOS_BASE}sergey-vorobiev.jpg`,
  },
  {
    name: "Олег Громов",
    birthDate: "29.10",
    avatar: `${EMPLOYEE_PHOTOS_BASE}oleg-gromov.jpg`,
  },
  {
    name: "Александра Подлеснова",
    birthDate: "16.02",
    avatar: `${EMPLOYEE_PHOTOS_BASE}aleksandra-podlesnova.jpg`,
  },
];

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function parseBirthDate(birthDate: string): { day: number; month: number } {
  const match = /^(\d{2})\.(\d{2})$/.exec(birthDate);

  if (!match) {
    throw new Error(`Invalid birthDate format: ${birthDate}`);
  }

  const day = Number(match[1]);
  const month = Number(match[2]);

  if (month < 1 || month > 12 || day < 1 || day > 31) {
    throw new Error(`Invalid birthDate value: ${birthDate}`);
  }

  const probeDate = new Date(Date.UTC(2000, month - 1, day));
  if (probeDate.getUTCMonth() !== month - 1 || probeDate.getUTCDate() !== day) {
    throw new Error(`Invalid calendar date: ${birthDate}`);
  }

  return { day, month };
}

function toUtcDate(date: Date): number {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
}

export function daysUntilBirthday(birthDate: string, fromDate: Date = new Date()): number {
  const { day, month } = parseBirthDate(birthDate);
  const todayUtc = toUtcDate(fromDate);
  const currentYear = fromDate.getFullYear();

  let birthdayUtc = Date.UTC(currentYear, month - 1, day);

  if (birthdayUtc < todayUtc) {
    birthdayUtc = Date.UTC(currentYear + 1, month - 1, day);
  }

  return Math.round((birthdayUtc - todayUtc) / MS_PER_DAY);
}

export function formatLastLogin(date: Date = new Date()): string {
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return `${values.day}.${values.month}.${values.year} ${values.hour}:${values.minute}`;
}
