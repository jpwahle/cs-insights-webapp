import { useState } from "react";

import DashboardActions from "../../partials/dashboard/DashboardActions";
import DashboardCard01 from "../../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../../partials/dashboard/DashboardCard09";
import DashboardCard10 from "../../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../../partials/dashboard/DashboardCard11";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

function Authors() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
            <WelcomeBanner />
            <DashboardActions />
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              <DashboardCard01 />
              <DashboardCard02 />
              <DashboardCard03 />
              <DashboardCard04 />
              <DashboardCard05 />
              <DashboardCard06 />
              <DashboardCard07 />
              <DashboardCard08 />
              <DashboardCard09 />
              <DashboardCard10 />
              <DashboardCard11 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Authors;
