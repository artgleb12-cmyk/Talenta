import { ReactNode } from "react"
import { cn } from "../../../lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  icon: ReactNode
  subtitle?: string
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  iconBgColor?: string
  iconColor?: string
}

export function StatCard({ 
  title, 
  value, 
  icon, 
  subtitle, 
  trend, 
  trendValue,
  iconBgColor = "bg-slate-100",
  iconColor = "text-slate-600"
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_2px_12px_rgba(0,0,0,0.03)] border border-slate-100/60 flex flex-col h-full hover:shadow-[0px_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className={cn("p-3 rounded-2xl flex items-center justify-center w-12 h-12", iconBgColor, iconColor)}>
          {icon}
        </div>
        {trend && (
          <div className={cn(
            "text-xs font-semibold px-2 py-1 rounded-full",
            trend === "up" ? "bg-emerald-50 text-emerald-600" :
            trend === "down" ? "bg-red-50 text-red-600" :
            "bg-slate-50 text-slate-600"
          )}>
            {trend === "up" ? "+" : trend === "down" ? "-" : ""}{trendValue}
          </div>
        )}
      </div>
      
      <div className="mt-auto">
        <div className="text-3xl font-bold text-slate-900 tracking-tight">
          {value}
        </div>
        <div className="text-[13px] font-medium text-slate-500 mt-1">
          {title}
        </div>
        {subtitle && (
          <div className="text-xs text-slate-400 mt-1 font-medium">
            {subtitle}
          </div>
        )}
      </div>
    </div>
  )
}

