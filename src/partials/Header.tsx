import Link from "next/link";
import { useRouter } from "next/router";

import UserMenu from "../components/DropdownProfile";

function Header({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}) {
  // Gives us ability to load the current route details
  const router = useRouter();

  function generateBreadcrumbs() {
    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = router.asPath.split("?")[0];

    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = asPathWithoutQuery
      ?.split("/")
      .filter((v) => v.length > 0);

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    const crumblist = asPathNestedRoutes?.map((subpath, idx) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      // The title will just be the route string for now
      const title = subpath.charAt(0).toUpperCase() + subpath.slice(1);
      return { href, text: title };
    });

    if (crumblist) {
      return [{ href: "/", text: "Home" }, ...crumblist];
    }
    // Add in a default "Home" crumb for the top-level
    return [{ href: "/", text: "Home" }];
  }

  const breadcrumbs = generateBreadcrumbs();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="-mb-px flex h-16 items-center justify-between">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            <ul className="ml-5 inline-flex flex-wrap text-sm font-medium sm:flex md:flex lg:flex xl:flex">
              {breadcrumbs.map(({ text, href }, index: number) => (
                <li key={text} className="flex items-center">
                  <Link href={href}>
                    <a className="text-slate-500 hover:text-indigo-500">
                      {text}
                    </a>
                  </Link>
                  {index !== breadcrumbs.length - 1 && (
                    <svg
                      className="mx-3 h-4 w-4 fill-current text-slate-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                    </svg>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            {/*  Divider */}
            <UserMenu align="right" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
