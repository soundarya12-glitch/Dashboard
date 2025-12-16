import Sidebar from "./components/ui/sidebar.jsx"
import { Topbar } from "./components/ui/Topbar.jsx"
import { DashboardCards } from "./components/ui/Dashboardcards.jsx"
import { OverviewBoard } from "./components/ui/OverviewBoard.jsx"
import Footer  from "./components/ui/Footer.jsx"


function App() {
  return (
    <div className="flex h-screen bg-black overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 ">

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* TOP NAVBAR */}
        <Topbar />

        {/* DASHBOARD CARDS */}
        <div className="p-6">
          <DashboardCards />
        </div>

        {/* OVERVIEW BOARD */}
        <OverviewBoard />

        {/* FOOTER */}
        
        <Footer />
      </div>
     
    </div>
  )
}

export default App
