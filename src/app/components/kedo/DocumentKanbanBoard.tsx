import { useEffect, useMemo, useState, type DragEvent } from "react"
import { Clock, MoreHorizontal, MessageSquare, AlertCircle, FileText } from "lucide-react"
import { Document } from "../../data/kedo"
import { cn } from "../../../lib/utils"

interface DocumentKanbanBoardProps {
  documents: Document[]
}

const columns = [
  { id: "Черновик", title: "Черновики", color: "bg-slate-100", textColor: "text-slate-700", dotColor: "bg-slate-400" },
  { id: "На согласовании", title: "На согласовании", color: "bg-blue-50/50", textColor: "text-blue-700", dotColor: "bg-blue-500" },
  { id: "На подписи", title: "На подписи", color: "bg-orange-50/50", textColor: "text-orange-700", dotColor: "bg-orange-500" },
  { id: "Требует внимания", title: "Требуют внимания", color: "bg-red-50/50", textColor: "text-red-700", dotColor: "bg-red-500" },
  { id: "Подписан", title: "Подписаны", color: "bg-emerald-50/50", textColor: "text-emerald-700", dotColor: "bg-emerald-500" },
]

export function DocumentKanbanBoard({ documents }: DocumentKanbanBoardProps) {
  const [boardDocs, setBoardDocs] = useState<Document[]>(documents)
  const [draggedDocId, setDraggedDocId] = useState<string | null>(null)
  const [dragOverColumnId, setDragOverColumnId] = useState<string | null>(null)
  const [dragOverCardId, setDragOverCardId] = useState<string | null>(null)

  useEffect(() => {
    setBoardDocs(documents)
  }, [documents])

  const docsByStatus = useMemo(() => {
    return columns.reduce((acc, col) => {
      acc[col.id] = boardDocs.filter((doc) => doc.status === col.id)
      return acc
    }, {} as Record<string, Document[]>)
  }, [boardDocs])

  const resetDragState = () => {
    setDraggedDocId(null)
    setDragOverColumnId(null)
    setDragOverCardId(null)
  }

  const moveDocument = (targetColumnId: string, beforeDocId?: string) => {
    if (!draggedDocId) return

    setBoardDocs((prev) => {
      const draggedDoc = prev.find((doc) => doc.id === draggedDocId)
      if (!draggedDoc) return prev

      const docsWithoutDragged = prev.filter((doc) => doc.id !== draggedDocId)
      const movedDoc: Document = {
        ...draggedDoc,
        status: targetColumnId as Document["status"],
      }

      if (beforeDocId) {
        const insertIndex = docsWithoutDragged.findIndex((doc) => doc.id === beforeDocId)
        if (insertIndex < 0) {
          return [...docsWithoutDragged, movedDoc]
        }

        const nextDocs = [...docsWithoutDragged]
        nextDocs.splice(insertIndex, 0, movedDoc)
        return nextDocs
      }

      const lastIndexInColumn = docsWithoutDragged.reduce((last, doc, index) => {
        return doc.status === targetColumnId ? index : last
      }, -1)

      const nextDocs = [...docsWithoutDragged]
      if (lastIndexInColumn >= 0) {
        nextDocs.splice(lastIndexInColumn + 1, 0, movedDoc)
      } else {
        nextDocs.push(movedDoc)
      }

      return nextDocs
    })

    resetDragState()
  }

  return (
    <div className="flex h-full gap-5 items-start">
      {columns.map((column) => {
        const colDocs = docsByStatus[column.id] || []

        return (
          <div
            key={column.id}
            className="flex flex-col w-[320px] shrink-0 h-full rounded-2xl bg-slate-50/50 border border-slate-200/60 overflow-hidden"
          >
            <div className={cn("px-4 py-3 border-b border-slate-200/60 flex items-center justify-between shrink-0", column.color)}>
              <div className="flex items-center gap-2">
                <div className={cn("w-2 h-2 rounded-full", column.dotColor)} />
                <h3 className={cn("text-[14px] font-bold", column.textColor)}>{column.title}</h3>
              </div>
              <div
                className={cn(
                  "px-2 py-0.5 rounded-full text-[12px] font-bold",
                  column.id === "Требует внимания" && colDocs.length > 0 ? "bg-red-100 text-red-600" : "bg-white/60 text-slate-500",
                )}
              >
                {colDocs.length}
              </div>
            </div>

            <div
              className={cn(
                "flex-1 overflow-y-auto p-3 space-y-3 hide-scrollbar rounded-b-2xl transition-colors",
                dragOverColumnId === column.id && "bg-[#E30611]/[0.04]",
              )}
              onDragOver={(event) => {
                event.preventDefault()
                setDragOverColumnId(column.id)
                setDragOverCardId(null)
              }}
              onDragLeave={() => {
                if (dragOverColumnId === column.id) {
                  setDragOverColumnId(null)
                }
              }}
              onDrop={(event) => {
                event.preventDefault()
                moveDocument(column.id)
              }}
            >
              {colDocs.length > 0 ? (
                colDocs.map((doc) => (
                  <KanbanCard
                    key={doc.id}
                    doc={doc}
                    isDragging={draggedDocId === doc.id}
                    isDragTarget={dragOverCardId === doc.id}
                    onDragStart={() => {
                      setDraggedDocId(doc.id)
                      setDragOverColumnId(column.id)
                    }}
                    onDragEnd={resetDragState}
                    onDragOver={(event) => {
                      event.preventDefault()
                      setDragOverColumnId(column.id)
                      setDragOverCardId(doc.id)
                    }}
                    onDrop={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                      moveDocument(column.id, doc.id)
                    }}
                  />
                ))
              ) : (
                <div className="h-24 flex items-center justify-center border-2 border-dashed border-slate-200 rounded-xl text-[13px] text-slate-400 font-medium">
                  Нет документов
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

interface KanbanCardProps {
  doc: Document
  isDragging: boolean
  isDragTarget: boolean
  onDragStart: () => void
  onDragEnd: () => void
  onDragOver: (event: DragEvent<HTMLDivElement>) => void
  onDrop: (event: DragEvent<HTMLDivElement>) => void
}

function KanbanCard({
  doc,
  isDragging,
  isDragTarget,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
}: KanbanCardProps) {
  const isUrgent = doc.status === "Требует внимания"

  const deadlineDate = new Date(doc.deadline)
  const isToday = new Date().toDateString() === deadlineDate.toDateString()
  const formattedDate = deadlineDate.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
  })

  return (
    <div
      className={cn(
        "group bg-white p-4 rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border transition-all cursor-grab active:cursor-grabbing hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)]",
        isUrgent ? "border-red-200" : "border-slate-200/80 hover:border-slate-300",
        isDragging && "opacity-50",
        isDragTarget && "ring-2 ring-[#E30611]/30",
      )}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="flex items-start justify-between mb-2.5">
        <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-slate-400">
          <FileText className="w-3.5 h-3.5" />
          <span className="truncate max-w-[150px]">{doc.type}</span>
        </div>
        <button className="text-slate-400 hover:text-slate-700 transition-colors p-1 -mr-1 -mt-1 rounded-md hover:bg-slate-100">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <h4 className="text-[14px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#E30611] transition-colors">
        {doc.title}
      </h4>

      <div className="space-y-2.5 mb-4">
        <div className="text-[12px] text-slate-500 font-medium line-clamp-1">{doc.company}</div>
        <div className="flex items-center justify-between text-[12px]">
          <span className="text-slate-400">Срок:</span>
          <span className={cn("font-semibold flex items-center gap-1", isUrgent || isToday ? "text-red-500" : "text-slate-700")}>
            {isUrgent || isToday ? <AlertCircle className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5 text-slate-400" />}
            {isToday ? "Сегодня" : formattedDate}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <div className="flex -space-x-2">
          {doc.participants.slice(0, 3).map((user, i) => (
            <img
              key={i}
              src={user.avatar}
              alt={user.name}
              title={user.name}
              className="w-7 h-7 rounded-full border-2 border-white object-cover bg-slate-100"
            />
          ))}
          {doc.participants.length > 3 && (
            <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600 z-10">
              +{doc.participants.length - 3}
            </div>
          )}
        </div>

        {doc.lastAction && (
          <div
            className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-50 text-slate-400 hover:text-[#E30611] hover:bg-red-50 transition-colors"
            title={doc.lastAction}
          >
            <MessageSquare className="w-3.5 h-3.5" />
          </div>
        )}
      </div>
    </div>
  )
}
