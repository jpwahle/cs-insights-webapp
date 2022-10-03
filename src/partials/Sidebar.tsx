/* global document */
/* global localStorage */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import AuthorsLogo from "./logos/AuthorsLogo";
import CitationsLogo from "./logos/CitationsLogo";
import DashboardLogo from "./logos/DashboardLogo";
import PapersLogo from "./logos/PapersLogo";
import TopicsLogo from "./logos/TopicsLogo";
import VenuesLogo from "./logos/VenuesLogo";
import SidebarElement from "./SidebarElement";

import SidebarLinkGroup from "./SidebarLinkGroup";

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}) {
  const router = useRouter();
  const pathname = router.pathname;
  const allViews = ["papers", "authors", "venues", "citations", "topics"];

  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  useEffect(() => {
    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
    setSidebarExpanded(storedSidebarExpanded === "true");
  }, []);

  // close on click outside
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarExpanded ||
        sidebar.current.contains(event.target as Node) ||
        trigger.current.contains(event.target as Node)
      )
        return;
      setSidebarOpen(false);
      setSidebarExpanded(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (sidebarOpen || event.key !== "Escape") return;
      setSidebarOpen(false);
      setSidebarExpanded(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900 bg-opacity-30 transition-opacity duration-200 lg:z-auto lg:hidden ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      ></div>
      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`no-scrollbar absolute left-0 top-0 z-40 flex h-screen w-64 shrink-0 flex-col overflow-y-scroll bg-slate-800 p-4 transition-all duration-200 ease-in-out lg:static lg:left-auto lg:top-auto lg:w-20 lg:translate-x-0 lg:overflow-y-auto lg:sidebar-expanded:!w-64 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="mb-10 flex justify-between pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="text-slate-500 hover:text-slate-400 lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {(sidebarOpen || sidebarExpanded) && (
            <Link href="/dashboard">
              <h1
                className="text-xl font-extrabold leading-tighter tracking-tighter md:text-xl"
                data-aos="zoom-y-out"
              >
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  CS-Insights
                </span>
              </h1>
            </Link>
          )}
          {/* Logo */}
          <Link href="/dashboard">
            <a className="block">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <defs>
                  <linearGradient
                    x1="28.538%"
                    y1="20.229%"
                    x2="100%"
                    y2="108.156%"
                    id="logo-a"
                  >
                    <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                    <stop stopColor="#A5B4FC" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="88.638%"
                    y1="29.267%"
                    x2="22.42%"
                    y2="100%"
                    id="logo-b"
                  >
                    <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                    <stop stopColor="#38BDF8" offset="100%" />
                  </linearGradient>
                </defs>
                <rect fill="#6366F1" width="32" height="32" rx="16" />
                <path
                  d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                  fill="#4F46E5"
                />
                <path
                  d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                  fill="url(#logo-a)"
                />
                <path
                  d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                  fill="url(#logo-b)"
                />
              </svg>
            </a>
          </Link>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="pl-3 text-xs font-semibold uppercase text-slate-500">
              <button
                className="hidden w-6 text-center lg:block lg:sidebar-expanded:hidden"
                aria-hidden="true"
                onClick={() => setSidebarExpanded(!sidebarExpanded)}
              >
                •••
              </button>
              <span className="lg:hidden lg:sidebar-expanded:block ">
                Analysis
              </span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup
                activecondition={
                  pathname.includes("dashboard") &&
                  !allViews.some((el) => pathname.includes(el))
                }
              >
                {(handleClick) => (
                  <SidebarElement
                    sidebarExpanded={sidebarExpanded}
                    setSidebarExpanded={setSidebarExpanded}
                    href="/dashboard"
                    checkPath="dashboard"
                    handleClick={handleClick}
                    allViews={allViews}
                    name="Dashboard"
                  >
                    <DashboardLogo
                      active={
                        pathname.includes("dashboard") &&
                        !allViews.some((el) => pathname.includes(el))
                      }
                    />
                  </SidebarElement>
                )}
              </SidebarLinkGroup>
              {allViews.map((view) => {
                return (
                  <SidebarLinkGroup
                    key={view}
                    activecondition={pathname.includes(view)}
                  >
                    {(handleClick) => (
                      <SidebarElement
                        sidebarExpanded={sidebarExpanded}
                        setSidebarExpanded={setSidebarExpanded}
                        href={`/dashboard/${view}`}
                        checkPath={view}
                        handleClick={handleClick}
                        allViews={allViews}
                        name={view.charAt(0).toUpperCase() + view.slice(1)}
                      >
                        {view === "papers" && (
                          <PapersLogo active={pathname.includes("papers")} />
                        )}
                        {view === "authors" && (
                          <AuthorsLogo active={pathname.includes("authors")} />
                        )}
                        {view === "venues" && (
                          <VenuesLogo active={pathname.includes("venues")} />
                        )}
                        {view === "citations" && (
                          <CitationsLogo
                            active={pathname.includes("citations")}
                          />
                        )}
                        {view === "topics" && (
                          <TopicsLogo active={pathname.includes("topics")} />
                        )}
                      </SidebarElement>
                    )}
                  </SidebarLinkGroup>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Expand / collapse button */}
        <div className="mt-auto hidden justify-end pt-3 lg:inline-flex">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="h-6 w-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
