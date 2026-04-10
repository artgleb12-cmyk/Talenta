import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = Number(process.env.PORT || 3001);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

const onboardingStats = [
  { key: "days", value: "30", label: "Дней в компании" },
  { key: "courses", value: "12", label: "Пройдено курсов" },
  { key: "meetings", value: "4", label: "Осталось встреч" },
  { key: "progress", value: "65%", label: "Общий прогресс" },
];

const careerMapStats = [
  { key: "gradeCurrent", value: "Middle", label: "Текущий грейд" },
  { key: "gradeTarget", value: "Senior", label: "Целевой грейд" },
  { key: "readiness", value: "75%", label: "Готовность к переходу" },
  { key: "status", value: "В резерве", label: "Статус" },
];

const trackingStats = [
  { key: "kpi", value: "95%", label: "Выполнение KPI" },
  { key: "ipr", value: "60%", label: "Прогресс ИПР" },
  { key: "courses", value: "8/10", label: "Пройдено курсов" },
  { key: "review", value: "15 авг", label: "Ближайшая оценка" },
];

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/development/onboarding", (_req, res) => {
  res.json({ stats: onboardingStats });
});

app.get("/api/development/career-map", (_req, res) => {
  res.json({ stats: careerMapStats });
});

app.get("/api/development/tracking", (_req, res) => {
  res.json({ stats: trackingStats });
});

const distPath = path.resolve(__dirname, "../dist");
app.use(express.static(distPath));
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) {
    next();
    return;
  }

  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Talenta API running on http://localhost:${port}`);
});
