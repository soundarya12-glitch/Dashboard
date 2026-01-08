import Sidebar from "./components/ui/sidebar.jsx";
import { Topbar } from "./components/ui/Topbar.jsx";
import Footer from "./components/ui/Footer.jsx";
import DashboardPage from "./components/ui/DashboardPage.jsx";
import Calendar from "./components/ui/Calendar.jsx";
import { Routes, Route,useLocation } from "react-router-dom";
import Project from "./components/ui/Project.jsx";
import Users from "./components/ui/Users.jsx";
import Editpage from "./components/ui/Editpage.jsx";
import Addsection from "./components/ui/Addsection.jsx";
import AddNewSectionPage from "./components/ui/AddNewSectionPage.jsx";
import Addedit from "./components/ui/Addeditsectionpage.jsx";
import Newcontact from "./components/ui/Newcontact.jsx";
import Newblogger from "./components/ui/Newblogger.jsx";
import Newcommunication from "./components/ui/Newcommunication.jsx";
import NewTodoModal from "./components/ui/Newtodo.jsx";
import Userpermission from "./components/ui/Userpermission.jsx";
import UserContact from "./components/ui/Usercontact.jsx";
import Blooger from "./components/ui/blogger.jsx";
import Newuserpermission from "./components/Newuserpermission.jsx";
import Communication from "./components/Communications.jsx";
import Newscommunication from "./components/Newscommunication.jsx";
import Todo from "./components/todo.jsx";
import AccessContact from "./components/Accesslog.jsx";
import Activitylog from "./components/Activitylog.jsx";
import Energylog from "./components/Energylog.jsx";
import Routehistory from "./components/Routehistory.jsx";
import Tokencache from "./components/Tokencache.jsx";
import Documentfollow from "./components/Documentfollow.jsx";
import EditContact from "./components/Editcontact.jsx";
import Editblogger from "./components/Editblogger.jsx";
import Editcommunications from "./components/Editcommunications.jsx";
import EditTodo from "./components/Edittodo.js";
import Editpermission from "./components/Editpermission.jsx";
import ProfilePanel from "./components/Profilepage.jsx";
import ProfileComments from "./components/ui/Comments.jsx";
import Activitylogs from "./components/Activitylog.jsx";
import EditWithProfile from "./components/EditWithProfiles.jsx";
import ProfileAvatar from "./components/Avatar.jsx";
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
              <Route path="/users" element={<Users />} />
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
