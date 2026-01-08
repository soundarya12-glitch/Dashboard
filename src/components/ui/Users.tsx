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
import { Button } from "./button"
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
  Check,Columns2Icon,Star,MessageCircle,
  Heart
} from "lucide-react"

import TablePagination from "./Pageniation"
import SelectInput from "./selectinput"
import TextInput from "./Textinput"
import TabsBar from "./tabss"





/* ---------------- DATA ---------------- */

const sections = [

  
];
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
 useEffect(() => {
  const syncComments = () => {
    setTableData((prev: any[]) =>
      prev.map((row: { id: any }) => {
        const key = `comments-user-${row.id}`;
        const saved = JSON.parse(localStorage.getItem(key)) || [];
        return {
          ...row,
          commentsByUser: saved,
        };
      })
    );
  };

  syncComments();
  window.addEventListener("storage", syncComments);

  return () => {
    window.removeEventListener("storage", syncComments);
  };
}, []);


  const getLikesCount = (item: { commentsByUser: any }) => {
  return (item.commentsByUser || []).filter((c: { liked: any }) => c.liked).length;
};
  const [isEditing, setIsEditing] = useState(false)
const [editingRow, setEditingRow] = useState(null)

  const [editId, setEditId] = useState(null)
const [editValue, setEditValue] = useState("")
const [page, setPage] = useState(1)
const [rowsPerPage, setRowsPerPage] = useState(10)

const [assignedReviewer, setAssignedReviewer] = useState("Assign Reviewer");
const handleAssignReviewer = (id: any, name: string) => {
  setTableData((prev: any[]) =>
    prev.map((row: { id: any }) =>
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
    allSelected ? [] : tableData.map((i: { id: any }) => i.id)
  )
}
  const toggleRow = (id: any) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    )
  }

  const toggleColumn = (key: string) => {
    setVisibleColumns((prev) =>
      prev.includes(key)
        ? prev.filter((c) => c !== key)
        : [...prev, key]
    )
  }
  const toggleFavourite = (id: any) => {
  setTableData((prev: any[]) =>
    prev.map((row: { id: any; favourite: any }) =>
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
    id: null,        // ðŸ‘ˆ IMPORTANT (null illa)
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
  if (!editingRow.header) {
    alert(" Name is required");
    return;
  }
if (!editingRow.type) {
  alert("Email is required");
  return;
}

// Use the same value you checked above
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(editingRow.type)) {
  alert("Please enter a valid email contains @");
  return;
}

   if (!editingRow.target) {
    alert(" Target is required");
    return;
  }
   if (!editingRow.limit) {
    alert(" limit is required");
    return;
  }

  setTableData((prev: any[]) => {
    if (editingRow.id == null) {
      const newData = [...prev, { ...editingRow, id: Date.now() }];
      setPage(Math.ceil(newData.length / rowsPerPage));
      return newData;
    }

    return prev.map((r: { id: any }) =>
      r.id === editingRow.id ? editingRow : r
    );
  });

  // âœ… CLOSE MODAL after save
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
             <Button
  variant="default"  // or "secondary" if you want
  size="default"     // or "sm", "lg" depending on your design system
  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-white bg-zinc-900 border border-zinc-700 hover:bg-zinc-800"
>
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
        <Button onClick={openAddModal} className="gap-2" variant={undefined} size={undefined}>
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
                <Checkbox checked={allSelected} onCheckedChange={toggleSelectAll} className={undefined} />
             
       
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
pl-19
vertical-align: middle;">Comments</TableHead>}
 {visibleColumns.includes("reviewer") && <TableHead className="text-white font-family: font/family/sans;
font-weight: font/weight/medium;
font-style: Medium;
font-size: spacing/3-5;
leading-trim: NONE;
line-height: 100%;
letter-spacing: -0.35px;
pl-19
vertical-align: middle;">Likes</TableHead>}
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




          <TableBody className={undefined}>
         {currentPageData.map((item: { id: React.Key; header: unknown; type: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode>>; status: string; target: unknown; limit: unknown; commentsByUser: any; reviewer: unknown; favourite: any }) => (
             <TableRow className=" rounded-xl  border-w-300 border-gray-700 " key={item.id}>
                <TableCell className={undefined}><GripVertical className="text-white   " size={16} /></TableCell>

                <TableCell className={undefined}>
                  <Checkbox className="border border-gray-600 bg-stone-800"
                    checked={selectedRows.includes(item.id)}
                    onCheckedChange={() => toggleRow(item.id)}
                  />
                </TableCell>

             {visibleColumns.includes("header") && (
                  <TableCell
    className="text-zinc-200 font-semibold cursor-pointer hover:underline"
    onClick={() =>
      navigate(
        `/editpage/${item.id}/profile/${item.id}`,
        {
          state: { header: item.header } // 🔥 THIS IS THE KEY
        }
      )
    }
  >
    {item.header}
  </TableCell>
)}

                {visibleColumns.includes("type") && (
                  <TableCell className={undefined}>
  <span
    className="inline-flex items-center rounded-full border border-zinc-800
               px-3 py-0.5 text-xs font-medium text-stone-400 "
  >
    {item.type}
  </span>
    
</TableCell>
                )}

                {visibleColumns.includes("status") && (
                  <TableCell className={undefined}>
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
               {visibleColumns.includes("limit") && <TableCell className="text-sm font-semibold pl-20  text-zinc-200 ">
              <span className="relative inline-flex items-center  text-white text-xs px-2 py-1 rounded-full">
  <MessageCircle className="w-5 h-5  mr-5 text-stone-600  " />
  {(item.commentsByUser || []).length}
</span>
</TableCell>}
  <TableCell className="text-sm font-semibold ml-6 pl-20 text-zinc-200">
 <span className="relative inline-flex items-center  text-white text-xs px-2 py-1 rounded-full">
  <Heart className="w-5 h-5 mr-5 fill-red-600 text-black " />
      {getLikesCount(item)}
      </span>
   
  </TableCell>
              
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
  
  
                   <TableCell className={undefined}>
  {item.reviewer ? (
    item.reviewer
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
                             size="sm"
                             className="text-stone-400 border  border-gray-600" variant={undefined}        >
    
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
 
  
  
                <TableCell className={undefined}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                  <Button
                     className=" ml-24 flex items-center justify-center text-white font-medium"
                     size="icon" variant={undefined}>
  <MoreVertical size={16} />
      </Button>
      
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=" bg-zinc-800 border-gray-700" align="end">
                    
<DropdownMenuItem className="text-sm font-semibold text-white
  hover:bg-stone-700
  focus:bg-stone-700
  data-[highlighted]:text-white"

onClick={() =>
  navigate(`/editpage/${item.id}/profile/${item.id}`)}


>
  Edit
</DropdownMenuItem>
            
                      <DropdownMenuItem className="text-sm font-semibold text-white
  hover:bg-stone-700
  focus:bg-stone-700
  data-[highlighted]:text-white"
                        onClick={() => {
                          setTableData((prev: any) => {
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
                          setTableData((prev: any[]) =>
                            prev.filter((r: { id: any }) => r.id !== item.id)
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
    
    <div className="bg-black border border-gray-200 rounded-xl p-6 w-[400px] space-y-3">

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
 x
  </button>
</div>

      <h3 className="text-white  border-t pt-9  border-white ">Enter Your Name</h3>
      <TextInput className="-mt-1 pl-2 w-90 text-white
      hover:border-gray-900
    focus:border-pink-400
    focus:ring-0
    focus:outline-none   bg-stone-600"
        value={editingRow.header}
        onChange={(v: any) =>
          setEditingRow({ ...editingRow, header: v })
            
        }
      />

      <h3 className="text-white">Enter Your Email</h3>
      <TextInput type="email"  className="-mt-1 pl-2 w-90 text-white hover:border-gray-900
    focus:border-pink-400
    focus:ring-0
    focus:outline-none  bg-stone-600" 
        value={editingRow.type}
        onChange={(v: any) =>
          setEditingRow({ ...editingRow, type: v })
        }
      />

      <h3 className="text-white">Enter your Target</h3>
      <TextInput  type="number" className="-mt-1 pl-2 w-90 text-white
      hover:border-gray-900
    focus:border-pink-400
    focus:ring-0
    focus:outline-none  bg-stone-600" 
        value={editingRow.target}
        onChange={(v: any) =>
          setEditingRow({ ...editingRow, target: v })
        }
      />
        <h3 className="text-white">Enter your Limit</h3>
      <TextInput type="number"  className="-mt-1 pl-2 w-90 text-white hover:border-gray-900
    focus:border-pink-400
    focus:ring-0
    focus:outline-none  text-left bg-stone-600" 
        value={editingRow.limit}
        onChange={(v: any) =>
          setEditingRow({ ...editingRow, limit: v })
        }
      />


      <div className="flex justify-end gap-2 mt-9">
        <Button onClick={() => {
                setIsEditing(false)
                setEditingRow(null)
              } } className={undefined} variant={undefined} size={undefined}>
          Cancel
        </Button>

        <Button onClick={handleSave} className={undefined} variant={undefined} size={undefined}>Save</Button>
                <Button onClick={() => navigate(`/addsection/${editingRow.id}`)} className={undefined} variant={undefined} size={undefined}>
  Edit Full form
</Button>
      </div>
    </div>
  </div>
)}



      



   
    
    </div>
  );
} 

   
 
