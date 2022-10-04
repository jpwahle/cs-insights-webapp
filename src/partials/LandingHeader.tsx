/* global document */
/* global window */
import UserMenu from "@/components/DropdownProfile";
import Transition from "@/utils/Transition";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
  const { data: session } = useSession();

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  const defaultProvider = "auth0";

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(event.target as Node) ||
        trigger.current.contains(event.target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (!mobileNavOpen || event.key !== "Escape") return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      if (window.pageYOffset > 10) {
        setTop(false);
      } else {
        setTop(true);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90 ${
        !top && "bg-white shadow-lg backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Site branding */}
          <div className="mr-4 flex flex-row">
            {/* Logo */}
            <Link href="/" aria-label="CS-Insights">
              <a className="flex items-center">
                <div className="mr-3 block">
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
                </div>
                <div>
                  <h1
                    className="text-xl font-extrabold leading-tighter tracking-tighter md:text-xl"
                    data-aos="zoom-y-out"
                  >
                    <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                      CS-Insights
                    </span>
                  </h1>
                </div>
              </a>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-end">
              <li className="flex items-center px-3 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5">
                <Link href="/about">About us</Link>
              </li>
              <li className="flex items-center px-3 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5">
                <Link href="/documentation">Documentation</Link>
              </li>
              <li className="flex items-center px-3 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5">
                <Link href="/support">Support</Link>
              </li>
            </ul>

            {/* Desktop sign in links */}
            {!session?.user?.email && (
              <ul className="flex grow flex-wrap items-center justify-end">
                <li>
                  <div className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                    {!isLoadingSignIn && (
                      <Link href="/">
                        <a
                          onClick={() => {
                            setIsLoadingSignIn(true);
                            signIn(defaultProvider);
                          }}
                        >
                          Sign in
                        </a>
                      </Link>
                    )}
                    {isLoadingSignIn && !session?.user && (
                      <svg
                        className="h-4 w-4 shrink-0 animate-spin fill-current"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                      </svg>
                    )}
                  </div>
                </li>
                <li>
                  <Link href="/">
                    <a
                      onClick={() => signIn(defaultProvider)}
                      className="btn ml-3 bg-gray-900 text-gray-200 hover:bg-gray-800"
                    >
                      <span>Sign up</span>
                      <svg
                        className="ml-2 -mr-1 h-3 w-3 shrink-0 fill-current text-gray-400"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>
              </ul>
            )}
            {session?.user && (
              <ul className="flex grow flex-wrap items-center justify-end">
                <li className="mt-1 mr-3">
                  <UserMenu align="right" />
                </li>
              </ul>
            )}
          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden">
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6 fill-current text-gray-900"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag="nav"
                id="mobile-nav"
                className="absolute top-full left-0 z-20 h-screen w-full overflow-scroll bg-white pb-16"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
              >
                <ul className="px-5 py-2">
                  <li className="flex py-2 text-gray-600 hover:text-gray-900">
                    <Link href="/about">About us</Link>
                  </li>
                  <li className="flex py-2 text-gray-600 hover:text-gray-900">
                    <Link href="/documentation">Documentation</Link>
                  </li>
                  <li className="flex py-2 text-gray-600 hover:text-gray-900">
                    <Link href="/support">Support</Link>
                  </li>
                  <li className="flex w-full justify-center py-2 font-medium text-gray-600 hover:text-gray-900">
                    <Link href="/">
                      <a onClick={() => signIn(defaultProvider)}>Sign in</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a
                        onClick={() => signIn(defaultProvider)}
                        className="btn my-2 w-full bg-gray-900 text-gray-200 hover:bg-gray-800"
                      >
                        <span>Sign up</span>
                        <svg
                          className="ml-2 -mr-1 h-3 w-3 shrink-0 fill-current text-gray-400"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                            fill="#999"
                            fillRule="nonzero"
                          />
                        </svg>
                      </a>
                    </Link>
                  </li>
                </ul>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
