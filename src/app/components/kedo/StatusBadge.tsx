import { cn } from "../../../lib/utils"

export type DocumentStatus = "Черновик" | "На согласовании" | "На подписи" | "Подписан" | "Требует внимания" | "Архив" | "Отклонён"

interface StatusBadgeProps {
  status: DocumentStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStyles = (status: DocumentStatus) => {
    switch (status) {
      case "Черновик":
      case "Архив":
        return "bg-slate-100 text-slate-600 border border-slate-200"
      case "На согласовании":
        return "bg-blue-50 text-blue-700 border border-blue-100"
      case "На подписи":
        return "bg-orange-50 text-orange-700 border border-orange-100"
      case "Подписан":
        return "bg-emerald-50 text-emerald-700 border border-emerald-100"
      case "Требует внимания":
      case "Отклонён":
        return "bg-red-50 text-red-700 border border-red-100"
      default:
        return "bg-slate-50 text-slate-700 border border-slate-200"
    }
  }

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap",
      getStyles(status)
    )}>
      {status === "На подписи" && <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-1.5 animate-pulse" />}
      {status === "Требует внимания" && <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5" />}
      {status}
    </span>
  )
}


