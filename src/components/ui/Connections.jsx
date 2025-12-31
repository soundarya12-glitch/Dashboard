import { useNavigate } from "react-router-dom";

export default function Connections() {
  const navigate = useNavigate();

  return (
    <div className="p-2 rounded-xl border">



      <div className="grid grid-cols-3 gap-10">

        {/* PROFILE */}
        <Block
          title="Profile"
          items={[
            { label: "Contact", plus: true, route: "/Usercontact", add: "/Newcontact" },
            { label: "Blogger", plus: true, route: "/blogger", add: "/Newblogger" },
          ]}
          navigate={navigate}
        />

        {/* LOGS */}
        <Block
          title="Logs"
          items={[
            { label: "Access Log", route: "/Accesslog" },
            { label: "Activity Log", route: "/Activitylog" },
            { label: "Energy Point Log", route: "/Energylog" },
            { label: "Route History", route: "/Routehistory" },
          ]}
          navigate={navigate}
        />

        {/* SETTINGS */}
        <Block
          title="Settings"
          items={[
            { label: "User Permission", plus: true, route: "/Userpermission", add: "/Newuserpermission" },
            { label: "Document Follow", route: "/Documentfollow" },
          ]}
          navigate={navigate}
        />

        {/* ACTIVITY */}
        <Block
          title="Activity"
          items={[
            { label: "Communication", plus: true, route: "/Communications", add: "/Newcommunication" },
            { label: "ToDo", plus: true, route: "/todo", add: "/Newtodo" },
          ]}
          navigate={navigate}
        />

        {/* INTEGRATIONS */}
        <Block
          title="Integrations"
          items={[
            { label: "Token Cache", route: "/Tokencache" },
          ]}
          navigate={navigate}
        />

      </div>
    </div>
  );
}

/* ================= BLOCK COMPONENT ================= */

function Block({ title, items, navigate }) {
  return (
    <div>
      <h3 className="font-medium mb-5 text-white">{title}</h3>

      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2"
          >
            {/* ITEM */}
            <button
              onClick={() => navigate(item.route)}
              className="bg-stone-600 px-3 py-1 rounded-full text-sm text-white border border-stone-400"
            >
              {item.label}
            </button>

            {/* + BUTTON */}
            {item.plus && (
              <button
                onClick={() => navigate(item.add)}
                className="w-7 h-7  bg-stone-600 border text-white border-stone-400 flex items-center rounded-xl justify-center text-lg"
              >
                +
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
