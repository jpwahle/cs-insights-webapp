import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type SidebarLinkGroupProps = {
  sidebarExpanded: boolean;
  setSidebarExpanded: (sidebarExpanded: boolean) => void;
  handleClick: () => void;
  href: string;
  checkPath: string;
  allViews: string[];
  name: string;
  children: React.ReactNode;
};

const SidebarElement = ({
  sidebarExpanded,
  setSidebarExpanded,
  handleClick,
  href,
  checkPath,
  allViews,
  name,
  children,
}: SidebarLinkGroupProps) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <React.Fragment>
      <Link href={href}>
        <a
          className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
            !allViews.some((el) => pathname.includes(el)) &&
            pathname.includes(checkPath) &&
            "hover:text-slate-200"
          }`}
          onClick={() => {
            if (sidebarExpanded) {
              handleClick();
            } else {
              setSidebarExpanded(true);
            }
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {children}
              <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100">
                {name}
              </span>
            </div>
          </div>
        </a>
      </Link>
    </React.Fragment>
  );
};

export default SidebarElement;
