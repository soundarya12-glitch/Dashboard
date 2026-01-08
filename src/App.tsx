import Sidebar from "./components/ui/sidebar";
import { Topbar } from "./components/ui/Topbar";
import Footer from "./components/ui/Footer";
import DashboardPage from "./components/ui/DashboardPage";
import Calendar from "./components/ui/Calendar";
import { Routes, Route,useLocation } from "react-router-dom";
import Project from "./components/ui/Project";
import ProposalOutlineTable from "./components/ui/Users";
import Editpage from "./components/ui/Editpage";
import Addsection from "./components/ui/Addsection";
import AddNewSectionPage from "./components/ui/AddNewSectionPage";
import Addedit from "./components/ui/Addeditsectionpage";
import Newcontact from "./components/ui/Newcontact";
import Newblogger from "./components/ui/Newblogger";
import Newcommunication from "./components/ui/Newcommunication";
import NewTodoModal from "./components/ui/Newtodo";
import Userpermission from "./components/ui/Userpermission";
import UserContact from "./components/ui/Usercontact";
import Blooger from "./components/ui/blogger";
import Newuserpermission from "./components/Newuserpermission";
import Communication from "./components/Communications";
import Newscommunication from "./components/Newscommunication";
import Todo from "./components/todo";
import AccessContact from "./components/Accesslog";
import Activitylog from "./components/Activitylog";
import Energylog from "./components/Energylog";
import Routehistory from "./components/Routehistory";
import Tokencache from "./components/Tokencache";
import Documentfollow from "./components/Documentfollow";
import EditContact from "./components/Editcontact";
import Editblogger from "./components/Editblogger";
import Editcommunications from "./components/Editcommunications";
import EditTodo from "./components/Edittodo";
import Editpermission from "./components/Editpermission";
import ProfilePanel from "./components/Profilepage";
import ProfileComments from "./components/ui/Comments";
import Activitylogs from "./components/Activitylog";
import EditWithProfile from "./components/EditWithProfiles";
import ProfileAvatar from "./components/Avatar";
import { Import } from "lucide-react";
import Users from "./components/ui/Users";
function App() {
  
  const location = useLocation();
  ;
  const hideSidebar =
    location.pathname.startsWith("/editpage") ||
    location.pathname.startsWith("/addsection");

// later test ku
// localStorage.setItem("currentUser", "Sandra");

  const showTopbar = location.pathname === "/";
     

  return (
    <div className="flex h-screen bg-black overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
      
      {/* Sidebar */}
   {!hideSidebar && <Sidebar />}
  
   

      {/* Main content */}
      <div className="flex-1 flex flex-col">
              {showTopbar && <Topbar />}

        {/* Page content */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/calendar" element={<Calendar />} />
             <Route path="/project" element={<Project />} />
              <Route path="/users" element={<ProposalOutlineTable />} />
              <Route path="/editcontact/:id" element={<EditContact />} />
 <Route path="/editblogger/:id" element={<Editblogger />} />
               <Route path="/editcontact/:id" element={<EditContact />} />
  <Route path="/Edittodo/:id" element={<EditTodo />} />
  <Route path="/editcommunications/:id" element={<Editcommunications />} />
    <Route path="/editpermission/:id" element={<Editpermission />} />
                  <Route path="/editpage/:id/" element={<Addedit />} />
    <Route path="/addsection/:id" element={<AddNewSectionPage />} />
            <Route path="/Newcontact" element={<Newcontact />} />
              <Route path="/Newblogger" element={<Newblogger />} />
                   <Route path="/Newcommunication" element={<Newcommunication />} />
                       <Route path="/Newtodo" element={<NewTodoModal />} />
                         <Route path="/Userpermission" element={<Userpermission />} />
                           <Route path="/Usercontact" element={<UserContact />} />
                            <Route path="/blogger" element={<Blooger />} />
                            <Route path="/Newuserpermission" element={<Newuserpermission />} />
                               <Route path="/Communications" element={<Communication />} />
                                  <Route path="/Newscommunication" element={<Newscommunication />} />
                                     <Route path="/todo" element={<Todo onClose={undefined} onSave={undefined} taskName={undefined}/>} />
                                         <Route path="/Accesslog" element={<AccessContact/>} />
                                          <Route path="/Activitylog" element={<Activitylog/>} />
                                              <Route path="/Energylog" element={<Energylog/>} />
                                                <Route path="/Routehistory" element={<Routehistory/>}/>
                                                   <Route path="/Tokencache" element={<Tokencache/>}/>
                                                   <Route path="/Documentfollow" element={<Documentfollow/>}/>
                                
  <Route path="/activitylog" element={<Activitylogs />} />
<Route path="/editpage/:id" element={<EditWithProfile />} />
<Route path="/profile/:profileId" element={<ProfilePanel />} />
<Route
  path="/editpage/:id/profile/:profileId"
  element={<EditWithProfile />}
/>


                           
                           
          </Routes>
    
        </div>

        <Footer />
      </div>
    
    </div>
  );
}

export default App;
