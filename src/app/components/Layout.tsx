import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="flex h-screen bg-[#F9FAFB] text-slate-800 font-sans overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <main ref={mainRef} className="flex-1 overflow-y-auto modern-scrollbar p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
