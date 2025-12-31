import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function TablePagination({
  totalRows,
  selectedCount,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}) {
  const totalPages = Math.ceil(totalRows / rowsPerPage)

  return (
    <div className="flex items-center justify-between px-4 py-3  border-gray-700 bg-black">

      {/* LEFT */}
      <div className="text-sm text-zinc-400">
        {selectedCount} of {totalRows} row(s) selected.
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">

        {/* Rows per page */}
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
          <span>Rows per page</span>

          <Select
            value={String(rowsPerPage)}
            onValueChange={(value) => {
              setRowsPerPage(Number(value))
              setPage(1)
            }}
          >
            <SelectTrigger className="w-20 bg-zinc-800 border border-gray-700 text-sm font-semibold text-zinc-200">
              <SelectValue />
            </SelectTrigger>

            <SelectContent className="bg-zinc-800 border border-gray-700">
              {["5", "10", "15",].map((v) => (
                <SelectItem
                  key={v}
                  value={v}
                  className="text-sm font-semibold text-white
                  hover:bg-zinc-700
                  focus:bg-zinc-700
                  data-[highlighted]:text-white"
                >
                  {v}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Page info */}
        <div className="text-sm font-semibold text-zinc-200">
          Page {page} of {totalPages}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <Button size="icon" variant="outline" disabled={page === 1} onClick={() => setPage(1)}>
            <ChevronsLeft size={16} />
          </Button>

          <Button size="icon" variant="outline" disabled={page === 1} onClick={() => setPage(page - 1)}>
            <ChevronLeft size={16} />
          </Button>

          <Button size="icon" variant="outline" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
            <ChevronRight size={16} />
          </Button>

          <Button size="icon" variant="outline" disabled={page === totalPages} onClick={() => setPage(totalPages)}>
            <ChevronsRight size={16} />
          </Button>
        </div>

      </div>
    </div>
  )
}
