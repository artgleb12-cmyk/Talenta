import { MoreHorizontal, FileText, CheckCircle2, AlertCircle, Clock, Download, Eye, PenTool } from "lucide-react"
import { Document } from "../../data/kedo"
import { StatusBadge, DocumentStatus } from "./StatusBadge"
import { cn } from "../../../lib/utils"

interface DocumentTableProps {
  documents: Document[]
}

export function DocumentTable({ documents }: DocumentTableProps) {
  // Simple format date logic
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString("ru-RU", { day: "2-digit", month: "long" }) + ", " + d.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
  }

  const isOverdue = (dateStr: string) => {
    return new Date(dateStr) < new Date("2026-04-09T00:00:00") // Based on current date
  }

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.03)] border border-slate-100/60 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="py-4 px-6 text-[13px] font-semibold text-slate-500 whitespace-nowrap w-[250px]">Название / Тип</th>
              <th className="py-4 px-6 text-[13px] font-semibold text-slate-500 whitespace-nowrap hidden lg:table-cell">Компания</th>
              <th className="py-4 px-6 text-[13px] font-semibold text-slate-500 whitespace-nowrap">Инициатор</th>
              <th className="py-4 px-6 text-[13px] font-semibold text-slate-500 whitespace-nowrap">Участники</th>
              <th className="py-4 px-6 text-[13px] font-semibold text-slate-500 whitespace-nowrap">Статус</th>
              <th className="py-4 px-6 text-[13px] font-semibold text-slate-500 whitespace-nowrap">Срок</th>
              <th className="py-4 px-6 text-[13px] font-semibold text-slate-500 whitespace-nowrap text-right">Действия</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {documents.map((doc) => (
              <tr key={doc.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                <td className="py-4 px-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                        <FileText className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 leading-tight mb-1 line-clamp-2">{doc.title}</div>
                      <div className="text-[13px] text-slate-500 flex items-center gap-2">
                        <span>{doc.type}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="text-slate-400 font-mono text-xs">{doc.id}</span>
                      </div>
                    </div>
                  </div>
                </td>
                
                <td className="py-4 px-6 hidden lg:table-cell align-top pt-5">
                  <div className="text-[13px] text-slate-600 font-medium">{doc.company}</div>
                </td>
                
                <td className="py-4 px-6 align-top pt-5">
                  <div className="flex items-center gap-2">
                    <img src={doc.initiator.avatar} alt={doc.initiator.name} className="w-6 h-6 rounded-full object-cover shadow-sm" />
                    <span className="text-[13px] text-slate-700 font-medium">{doc.initiator.name}</span>
                  </div>
                </td>
                
                <td className="py-4 px-6 align-top pt-5">
                  <div className="flex -space-x-2 overflow-hidden">
                    {doc.participants.map((user, idx) => (
                      <img 
                        key={idx} 
                        src={user.avatar} 
                        alt={user.name} 
                        title={user.name}
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover shadow-sm z-10 hover:z-20 hover:scale-110 transition-transform" 
                      />
                    ))}
                    {doc.participants.length > 3 && (
                      <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 ring-2 ring-white text-[10px] font-medium text-slate-600 z-10">
                        +{doc.participants.length - 3}
                      </div>
                    )}
                  </div>
                </td>
                
                <td className="py-4 px-6 align-top pt-5">
                  <div className="flex flex-col items-start gap-1">
                     <StatusBadge status={doc.status as DocumentStatus} />
                     <span className="text-[11px] text-slate-400 mt-1 line-clamp-1">{doc.lastAction}</span>
                  </div>
                </td>
                
                <td className="py-4 px-6 align-top pt-5">
                  <div className={cn(
                    "flex items-center gap-1.5 text-[13px] font-medium whitespace-nowrap",
                    isOverdue(doc.deadline) && doc.status !== "Подписан" ? "text-red-600" : "text-slate-600"
                  )}>
                    {isOverdue(doc.deadline) && doc.status !== "Подписан" ? (
                      <AlertCircle className="w-3.5 h-3.5" />
                    ) : doc.status === "Подписан" ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                    )}
                    {formatDate(doc.deadline)}
                  </div>
                </td>
                
                <td className="py-4 px-6 align-top pt-5 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors tooltip" title="Просмотр">
                      <Eye className="w-4 h-4" />
                    </button>
                    {doc.status === "На подписи" && (
                      <button className="p-1.5 text-slate-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors" title="Подписать">
                        <PenTool className="w-4 h-4" />
                      </button>
                    )}
                    <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" title="Скачать PDF">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Mock */}
      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between">
        <div className="text-[13px] text-slate-500">
          Показано 1–6 из 124 документов
        </div>
        <div className="flex gap-1">
           <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-[13px] font-medium text-slate-400 bg-white cursor-not-allowed">Назад</button>
           <button className="px-3 py-1.5 rounded-lg border border-[#E30611] bg-[#E30611] text-[13px] font-medium text-white shadow-[0_2px_8px_rgba(227,6,17,0.3)]">1</button>
           <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-[13px] font-medium text-slate-600 hover:bg-slate-50 bg-white">2</button>
           <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-[13px] font-medium text-slate-600 hover:bg-slate-50 bg-white">3</button>
           <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-[13px] font-medium text-slate-600 hover:bg-slate-50 bg-white">Вперед</button>
        </div>
      </div>
    </div>
  )
}


