     import React, { useState,useEffect, } from "react"
     import { useNavigate } from "react-router-dom"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MoreVertical,
  GripVertical,
  Plus,
  ChevronDown,
  Check,Columns2Icon,Star
} from "lucide-react"

import TablePagination from "./Pageniation"
import SelectInput from "./selectinput"
import TextInput from "./Textinput"
import TabsBar from "./tabss"
import boxstyle from "./boxstyle"




/* ---------------- DATA ---------------- */

const sections = [
  { id: 1, header: "Cover page", type: "Cover page", status: "In Process", target: "15", limit: "8", reviewer: "Eddie Lake",favourite:false },
  { id: 2, header: "Table of contents", type: "Table of contents", status: "Done", target: "10", limit: "8", reviewer: "Eddie Lake" },
  { id: 3, header: "Executive summary", type: "Narrative", status: "Done", target: "20", limit: "8", reviewer: "Eddie Lake" },
  { id: 4, header: "Technical approach", type: "Narrative", status: "Done", target: "25", limit: "18", reviewer: "Jamik Tashpulatov" },
  { id: 5, header: "Design", type: "Narrative", status: "In Process", target: "29", limit: "28", reviewer: "Jamik Tashpulatov" },
  { id: 6, header: "Cover page", type: "Cover page", status: "In Process", target: "15", limit: "8", reviewer: "Eddie Lake",favourite:false },
  { id: 7, header: "Table of contents", type: "Table of contents", status: "Done", target: "10", limit: "8", reviewer: "Eddie Lake" },
  { id: 8, header: "Executive summary", type: "Narrative", status: "Done", target: "20", limit: "8", reviewer: "Eddie Lake" },
  { id: 9, header: "Technical approach", type: "Narrative", status: "Done", target: "25", limit: "18", reviewer: "Jamik Tashpulatov" },
  { id: 10, header: "Design", type: "Narrative", status: "In Process", target: "29", limit: "28", reviewer: "Jamik Tashpulatov" },
 
  
  
  
  
]

const allColumns = [
  { key: "header", label: "Header" },
  { key: "type", label: "Section Type" },
  { key: "status", label: "Status" },
  { key: "target", label: "Target" },
  { key: "limit", label: "Limit" },
  { key: "reviewer", label: "Reviewer" },
    { key: "favourite", label: "Favourite" },
]

/* ---------------- COMPONENT ---------------- */

export default function ProposalOutlineTable() {
  const [selectedRows, setSelectedRows] = useState([])
  const [visibleColumns, setVisibleColumns] = useState(
    allColumns.map((c) => c.key)
    
  )
  const [isEditing, setIsEditing] = useState(false)
const [editingRow, setEditingRow] = useState(null)

  const [editId, setEditId] = useState(null)
const [editValue, setEditValue] = useState("")
const [page, setPage] = useState(1)
const [rowsPerPage, setRowsPerPage] = useState(10)

const [assignedReviewer, setAssignedReviewer] = useState("Assign Reviewer");
const handleAssignReviewer = (id, name) => {
  setTableData(prev =>
    prev.map(row =>
      row.id === id ? { ...row, reviewer: name } : row
    )
  )
}
const navigate = useNavigate();
const [tableData, setTableData] = useState(() => {
  const savedData = localStorage.getItem("proposalTableData");
  return savedData ? JSON.parse(savedData) : sections;
});
useEffect(() => {
  localStorage.setItem(
    "proposalTableData",
    JSON.stringify(tableData)
  );
}, [tableData]);
  const allSelected = selectedRows.length === sections.length
  const startIndex = (page - 1) * rowsPerPage
const endIndex = startIndex + rowsPerPage
const currentPageData = tableData.slice(startIndex, endIndex)
  const [isFocusDocument, setIsFocusDocument] = useState(false);

 const toggleSelectAll = () => {
  setSelectedRows(
    allSelected ? [] : tableData.map(i => i.id)
  )
}
  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    )
  }

  const toggleColumn = (key) => {
    setVisibleColumns((prev) =>
      prev.includes(key)
        ? prev.filter((c) => c !== key)
        : [...prev, key]
    )
  }
  const toggleFavourite = (id) => {
  setTableData((prev) =>
    prev.map((row) =>
      row.id === id
        ? { ...row, favourite: !row.favourite }
        : row
    )
  );
};

  // Inside ProposalOutlineTable component
const [isAdding, setIsAdding] = useState(false); // toggle input box
const [newSectionName, setNewSectionName] = useState(""); // store input value
// Function to edit a row (here we just log, but you can show a modal/input)
const openAddModal = () => {
  setEditingRow({
    id: null,        // 👈 IMPORTANT (null illa)
    header : "",
    type: "",
    status: "In Process",
    target: "",
    limit: "",
      favourite: false,  
      
  });
  setIsEditing(true);
};


  /* ---------- SAVE (ADD / EDIT) ---------- */
const handleSave = () => {
  if (!editingRow.header.trim()) return;

  setTableData((prev) => {
    if (editingRow.id == null) {
      const newData = [...prev, { ...editingRow, id: Date.now() }];
      setPage(Math.ceil(newData.length / rowsPerPage));
      return newData;
    }

    return prev.map((r) =>
      r.id === editingRow.id ? editingRow : r
    );
  });

  // ✅ CLOSE MODAL after save
  setIsEditing(false);
  setEditingRow(null);
};


  return (
    <div className="p-4 space-y-4 bg-black min-h-screen ">
 
    
      {/* -------- TOP BAR -------- */}
      <div className="flex items-center justify-between   ">
        
            <TabsBar/>
              

      

        <div className="flex gap-2">
          {/* Customize Columns */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center gap-2
px-3 py-1.5
rounded-lg
text-sm font-medium
text-white
bg-zinc-900
border border-zinc-700
hover:bg-zinc-800">
                <Columns2Icon size={16} />
             
                Customize Columns
                     <ChevronDown className="h-3 w-3 opacity-70" />
              </Button>
              
            </DropdownMenuTrigger>

         <DropdownMenuContent className="w-48 border bg-zinc-800 border-gray-700">
  {allColumns
    .filter(col => col.key !== "header") // header excluded
    .map((col) => (
      <DropdownMenuItem 
        key={col.key}
        onClick={() => toggleColumn(col.key)}
        className=" text-sm font-semibold text-white
        hover:bg-zinc-700
        focus:bg-stone-700
        data-[highlighted]:text-white"
      >
        {col.label}
        {visibleColumns.includes(col.key) && <Check size={16} />}
      </DropdownMenuItem>
    ))}
</DropdownMenuContent>

          </DropdownMenu>
        <Button onClick={openAddModal} className="gap-2">
          <Plus size={16} /> Add Section
        </Button>
      </div>


        </div>
     

      {/* -------- TABLE -------- */}
  <div className="overflow-x-auto w-250 border  border-gray-700 rounded-xl ">
    
     

      {isFocusDocument ? (
    <div className="h-64 bg-black rounded-xl"></div>
  ) : (
    
  <Table className=" bg-black border border-gray-700">
          <TableHeader className="bg-stone-500 border   border-gray-100  ">
            <TableRow className=" border border-gray-700 rounded-xl  ">
              <TableHead className="w-80  " />
              <TableHead className="w-8 text-pink-70 ">
                <Checkbox checked={allSelected} onCheckedChange={toggleSelectAll} />
              
              </TableHead>

              {visibleColumns.includes("header") && <TableHead className="text-white font-family: font/family/sans;
font-weight: font/weight/medium;
font-style: Medium;
font-size: spacing/3-5;
leading-trim: NONE;
line-height: 100%;
pr-20
letter-spacing: -0.35px;
vertical-align: middle;">Header</TableHead>}
              {visibleColumns.includes("type") && <TableHead className="text-white font-family: font/family/sans;
font-weight: font/weight/medium;
font-style: Medium;
font-size: spacing/3-5;
leading-trim: NONE;
line-height: 100%;
letter-spacing: -0.35px;

vertical-align: middle;">Section Type</TableHead>}
              {visibleColumns.includes("status") && <TableHead className="text-white font-family: font/family/sans;
font-weight: font/weight/medium;
font-style: Medium;
font-size: spacing/3-5;
leading-trim: NONE;
line-height: 100%;
letter-spacing: -0.35px;
pl-20
vertical-align: middle;">Status</TableHead>}
              {visibleColumns.includes("target") && <TableHead className="text-white font-family: font/family/sans;
font-weight: font/weight/medium;
font-style: Medium;
font-size: spacing/3-5;
leading-trim: NONE;
line-height: 100%;
pl-20
letter-spacing: -0.35px,
vertical-align: middle;">Target</TableHead>}
              {visibleColumns.includes("limit") && <TableHead className="text-white font-family: font/family/sans;
font-weight: font/weight/medium;
font-style: Medium;
font-size: spacing/3-5;
leading-trim: NONE;
line-height: 100%;
pl-20
letter-spacing: -0.35px;
vertical-align: middle;">Limit</TableHead>}
              {visibleColumns.includes("reviewer") && <TableHead className="text-white font-family: font/family/sans;
font-weight: font/weight/medium;
font-style: Medium;
font-size: spacing/3-5;
leading-trim: NONE;
line-height: 100%;
letter-spacing: -0.35px;
pl-29
vertical-align: middle;">Reviewer</TableHead>}
      {visibleColumns.includes("reviewer") && <TableHead className="text-white font-family: font/family/sans;
font-weight: font/weight/medium;
font-style: Medium;
font-size: spacing/3-5;
leading-trim: NONE;
line-height: 100%;
letter-spacing: -0.35px;
pl-12
vertical-align: middle;">Favourites</TableHead>}
     
              <TableHead className="w-8 text-pink-70  " />
            </TableRow>
          </TableHeader>




          <TableBody>
         {currentPageData.map((item) => (
             <TableRow className=" rounded-xl  border-w-300 border-gray-700 " key={item.id}>
                <TableCell><GripVertical className="text-white   " size={16} /></TableCell>

                <TableCell>
                  <Checkbox className="border border-gray-600 bg-stone-800"
                    checked={selectedRows.includes(item.id)}
                    onCheckedChange={() => toggleRow(item.id)}
                  />
                </TableCell>

             {visibleColumns.includes("header") && (
                  <TableCell className="text-zinc-200 font-semibold">
                    {item.header}
                  </TableCell>
                )}

                {visibleColumns.includes("type") && (
                  <TableCell>
  <span
    className="inline-flex items-center rounded-full border border-zinc-800
               px-3 py-0.5 text-xs font-medium text-stone-400 "
  >
    {item.type}
  </span>
 
</TableCell>
                )}

                {visibleColumns.includes("status") && (
                  <TableCell>
                    {item.status === "Done" ? (
                      <span className="inline-flex items-center rounded-full border border-zinc-800
               px-5 py-0.5 text-xs ml-12  font-medium  text-stone-400">
                        <img src="/images/green.png" className="h-4 w-4 mr-1" />
                        Done
                      </span>
                    ) : (
                         <span className="inline-flex items-center rounded-full border border-zinc-800
               px-5 py-0.5 text-xs  ml-12  font-medium  text-stone-400">
                        <img src="/images/load.png" className="h-4 w-4 mr-1" />
                        In process
                      </span>
                    )}
                  </TableCell>
                )}

                {visibleColumns.includes("target") && <TableCell className="text-sm font-semibold pl-20 text-zinc-200">{item.target}</TableCell>}
                {visibleColumns.includes("limit") && <TableCell className="text-sm font-semibold pl-20 text-zinc-200 ">{item.limit}</TableCell>}
                
            {visibleColumns.includes("reviewer") &&
                 (
                  <TableCell className=" text-white font-family: font/family/sans;
font-weight: font/weight/medium;
font-style: Medium;
font-size: spacing/3-5;
leading-trim: NONE;
line-height: 100%;
letter-spacing: -0.35px;
pl-27
vertical-align: middle ">
  
  
                   <TableCell>
  {item.reviewer ? (
    item.reviewer
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          className="text-stone-400 border  border-gray-600"
        >
    
           <span>{assignedReviewer}</span>
                <ChevronDown className="h-3 w-3 opacity-70" />
                
        </Button>
        
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-zinc-800 text-white border border-gray-500"
      >
    <DropdownMenuItem
  onClick={() => handleAssignReviewer(item.id,"  Jamik Tashpulatov")}
  className="
    text-sm font-semibold text-white
    data-[highlighted]:bg-zinc-700
    data-[highlighted]:text-white
  "
>
  Jamik Tashpulatov
</DropdownMenuItem>
        <DropdownMenuItem   onClick={() => handleAssignReviewer( item.id,"Eddis lake")} className="  text-sm font-semibold text-white
  hover:bg-stone-700
  focus:bg-stone-700
  data-[highlighted]:text-white">Eddie Lake</DropdownMenuItem>
    <DropdownMenuItem className="  text-sm font-semibold text-white
  hover:bg-stone-700
  focus:bg-stone-700
  data-[highlighted]:text-white">Eddie Lake</DropdownMenuItem>
    <DropdownMenuItem className="  text-sm font-semibold text-white
  hover:bg-stone-700
  focus:bg-stone-700
  data-[highlighted]:text-white">Eddie Lake</DropdownMenuItem>
        
      
      </DropdownMenuContent>
    </DropdownMenu>
  )}
</TableCell>

                  </TableCell>
                )}
   <button
    onClick={() => toggleFavourite(item.id)}
    className="p-1  ml-20 rounded hover:bg-stone-700"
  >
    <Star
      size={18}
      className={
        item.favourite
          ? "fill-yellow-400 text-yellow-400 mt-5"
          : "text-gray-400 mt-5 "
      }
    />
  </button>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                  <Button
  className=" ml-24 flex items-center justify-center text-white font-medium"
  size="icon"
>
  <MoreVertical size={16} />
      </Button>
      
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=" bg-zinc-800 border-gray-700" align="end">
                    
<DropdownMenuItem className="text-sm font-semibold text-white
  hover:bg-stone-700
  focus:bg-stone-700
  data-[highlighted]:text-white"
onClick={() => navigate(`/editpage/${item.id}`)}

>
  Edit
</DropdownMenuItem>
            
                      <DropdownMenuItem className="text-sm font-semibold text-white
  hover:bg-stone-700
  focus:bg-stone-700
  data-[highlighted]:text-white"
                        onClick={() => {
                          setTableData(prev => {
                            const newData = [...prev, { ...item, id: Date.now() }]
                            setPage(Math.ceil(newData.length / rowsPerPage))
                            return newData
                          })
                        }}
                      >
                        Make a copy
                      </DropdownMenuItem>

<DropdownMenuItem
  onClick={() => toggleFavourite(item.id)}
  className="text-sm font-semibold text-white
  hover:bg-stone-700
  focus:bg-stone-700
  data-[highlighted]:text-white "
>

  {item.favourite ? " Un Favourite" : "Make Favourite"}
</DropdownMenuItem>



                         <DropdownMenuItem
                        className=" text-sm font-semibold text-white
  hover:bg-stone-700
  focus:bg-stone-700
  hover:text-white
  focus:text-white border-t -rounded-xl border-white
   text-red-500"
                        onClick={() =>
                          setTableData((prev) =>
                            prev.filter((r) => r.id !== item.id)
                          )
                        }
                      >
                        Delete
                      </DropdownMenuItem>
                    

                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          
        </Table>
  )
}
        
          
      </div>
          
      _
{!isFocusDocument && (
  <TablePagination
    totalRows={tableData.length}
    selectedCount={selectedRows.length}
    page={page}
    setPage={setPage}
    rowsPerPage={rowsPerPage}
    setRowsPerPage={setRowsPerPage}
  />
)}
 {isEditing && editingRow && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    
    <div className="bg-black border border-gray-200 rounded-xl p-6 w-[520px] space-y-3">

      <div className="relative">
  <h2 className="text-white font-semibold text-center text-xl">
    Add new Section
  </h2>
  <button
    onClick={() => {
      setIsEditing(false);
      setEditingRow(null);
    }}
    className="absolute top-0 right-0 mt-2 mr-2 text-white font-bold text-xl "
  >
    ✕
  </button>
</div>

      <h3 className="text-white  border-t pt-9  border-white ">Enter Your Name</h3>
      <TextInput className="-mt-1 pl-2 pr-65  text-white
      hover:border-gray-900
    focus:border-pink-400
    focus:ring-0
    focus:outline-none  bg-stone-600"
        value={editingRow.header}
        onChange={(v) =>
          setEditingRow({ ...editingRow, header: v })
            
        }
      />

      <h3 className="text-white">Enter Your Email</h3>
      <TextInput  className="-mt-1 pl-2 pr-65 text-white hover:border-gray-900
    focus:border-pink-400
    focus:ring-0
    focus:outline-none  bg-stone-600" 
        value={editingRow.type}
        onChange={(v) =>
          setEditingRow({ ...editingRow, type: v })
        }
      />

      <h3 className="text-white">Enter your Target</h3>
      <TextInput  type="number" className="-mt-1 pl-2 pr-65 text-white
      hover:border-gray-900
    focus:border-pink-400
    focus:ring-0
    focus:outline-none  bg-stone-600" 
        value={editingRow.target}
        onChange={(v) =>
          setEditingRow({ ...editingRow, target: v })
        }
      />
        <h3 className="text-white">Enter your Limit</h3>
      <TextInput type="number"  className="-mt-1 pl-2 pr-65 text-white hover:border-gray-900
    focus:border-pink-400
    focus:ring-0
    focus:outline-none  text-left bg-stone-600" 
        value={editingRow.limit}
        onChange={(v) =>
          setEditingRow({ ...editingRow, limit: v })
        }
      />


      <div className="flex justify-end gap-2 mt-9">
        <Button onClick={() => {
          setIsEditing(false);
          setEditingRow(null);
        }}>
          Cancel
        </Button>

        <Button onClick={handleSave}>Save</Button>
                <Button onClick={() => navigate(`/addsection/${editingRow.id}`)}>
  Edit Full form
</Button>
      </div>
    </div>
  </div>
)}



      



   
    
    </div>
  );
} 

   
 
