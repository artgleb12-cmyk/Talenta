import { useParams } from "react-router";
import { Mail, Phone, Calendar, FileText, CheckCircle2 } from "lucide-react";

export default function CandidateProfile() {
  const { id } = useParams();

  return (
    <div className="max-w-[1200px] mx-auto pb-10 flex flex-col gap-6">
      <div className="bg-white rounded-3xl border border-slate-100 p-6">
        <div className="flex items-center gap-4">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150" alt="Аватар" className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Профиль кандидата #{id}</h2>
            <p className="text-slate-500">Frontend разработчик • этап: Тех интервью</p>
          </div>
          <div className="ml-auto px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">Скоринг 86</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Резюме и заметки</h3>
          <p className="text-slate-600 leading-relaxed">
            Кандидат имеет опыт коммерческой разработки React/TypeScript, уверенно работает с REST API,
            знаком с архитектурой компонентного UI и тестированием.
          </p>
          <div className="mt-5 space-y-2 text-sm text-slate-600">
            <div className="flex items-center gap-2"><FileText className="w-4 h-4" /> Резюме загружено</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> HR этап пройден</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Следующее интервью: 12.04.2026, 14:30</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Контакты</h3>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> ivan.petrov@example.com</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +7 (999) 123-45-67</div>
          </div>
        </div>
      </div>
    </div>
  );
}
