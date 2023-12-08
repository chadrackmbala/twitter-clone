import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import LeftSidebar from "./components/left-sidebar.jsx";
import RightSidebar from "./components/right-sidebar.jsx";
import DashboardNav from "./components/dashboard-nav.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <DashboardNav />
      {/* <LeftSidebar /> */}
      <Home />
      <RightSidebar />
    </Layout>
  );
}