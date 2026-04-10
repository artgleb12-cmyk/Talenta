import { createHashRouter, Navigate, useRouteError } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Vacancies from "./pages/Vacancies";
import VacancyKanban from "./pages/VacancyKanban";
import Candidates from "./pages/Candidates";
import CandidateProfile from "./pages/CandidateProfile";
import CalendarView from "./pages/CalendarView";
import Reports from "./pages/Reports";
import Onboarding from "./pages/Onboarding";
import Probation from "./pages/Probation";
import Templates from "./pages/Templates";
import Settings from "./pages/Settings";
import DevelopmentOnboarding from "./pages/DevelopmentOnboarding";
import CareerMap from "./pages/CareerMap";
import TeamDevelopment from "./pages/TeamDevelopment";
import { KedoDashboard } from "./pages/kedo/KedoDashboard";
import { KedoKanban } from "./pages/kedo/KedoKanban";
import { KedoCreateDocument } from "./pages/kedo/KedoCreateDocument";
import { KedoTemplates } from "./pages/kedo/KedoTemplates";
import { KedoSettings } from "./pages/kedo/KedoSettings";

function RootErrorBoundary() {
  const error = useRouteError() as any;
  console.error("Router Error:", error);
  // Always redirect to root on any routing error like 404
  return <Navigate to="/" replace />;
}

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <RootErrorBoundary />,
    children: [
      { index: true, Component: Home },
      { path: "home", Component: Home },
      { path: "dashboard", Component: Dashboard },
      { path: "vacancies", Component: Vacancies },
      { path: "vacancies/:id", Component: VacancyKanban },
      { path: "candidates", Component: Candidates },
      { path: "candidates/:id", Component: CandidateProfile },
      { path: "interviews", Component: CalendarView },
      { path: "reports", Component: Reports },
      { path: "onboarding", Component: Onboarding },
      { path: "probation", Component: Probation },
      { path: "templates", Component: Templates },
      { path: "settings", Component: Settings },
      { path: "development/onboarding", Component: DevelopmentOnboarding },
      { path: "development/career-map", Component: CareerMap },
      { path: "development/tracking", Component: TeamDevelopment },
      { path: "kedo", Component: KedoDashboard },
      { path: "kedo/kanban", Component: KedoKanban },
      { path: "kedo/create", Component: KedoCreateDocument },
      { path: "kedo/templates", Component: KedoTemplates },
      { path: "kedo/settings", Component: KedoSettings },
      { path: "*", Component: () => <Navigate to="/" replace /> }
    ],
  },
  {
    path: "*",
    Component: () => <Navigate to="/" replace />,
    errorElement: <RootErrorBoundary />
  }
]);
