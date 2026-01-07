// Shared activity logger
export function addActivity(action) {
  const logs = JSON.parse(localStorage.getItem("activityLogs")) || [];
  const newLog = {
    action,
    time: new Date().toLocaleString(),
  };
  logs.unshift(newLog); // newest at top
  localStorage.setItem("activityLogs", JSON.stringify(logs));

  // trigger update for ActivityLog page
  window.dispatchEvent(new Event("storage"));
}
