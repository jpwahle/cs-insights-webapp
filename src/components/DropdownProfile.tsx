/* global document */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Transition from "../utils/Transition";

import { signOut, useSession } from "next-auth/react";
import Image from "next/future/image";
import { useRouter } from "next/router";
import DefaultUserAvatar from "../images/user-avatar-32.png";

type DropdownProfileProps = {
  align: string;
};

function DropdownProfile({ align }: DropdownProfileProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const trigger = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();

  // close on click outside
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(event.target as Node) ||
        trigger.current?.contains(event.target as Node)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (!dropdownOpen || event.key !== "Escape") return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="group inline-flex items-center justify-center"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <Image
          className="h-8 w-8 rounded-full"
          src={session?.user?.image || DefaultUserAvatar}
          width="32"
          height="32"
          alt="User"
        />
        <div className="flex items-center truncate">
          <span className="ml-2 truncate text-sm font-medium group-hover:text-slate-800">
            {session?.user?.email}
          </span>
          <svg
            className="ml-1 h-3 w-3 shrink-0 fill-current text-slate-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className={`absolute top-full z-10 mt-1 min-w-44 origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg ${
          align === "right" ? "right-0" : "left-0"
        }`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="mb-1 border-b border-slate-200 px-3 pt-0.5 pb-2">
            <div className="font-medium text-slate-800">
              {session?.user?.email}
            </div>
          </div>
          <ul>
            <li className="flex items-center py-1 px-3 text-sm font-medium text-indigo-500 hover:text-indigo-600">
              <Link href="/settings/account">
                <a onClick={() => setDropdownOpen(!dropdownOpen)}> Settings</a>
              </Link>
            </li>
            <li className="flex items-center py-1 px-3 text-sm font-medium text-indigo-500 hover:text-indigo-600">
              <Link href="/">
                <a
                  onClick={() => {
                    setDropdownOpen(!dropdownOpen);
                    signOut({ callbackUrl: "/" });
                  }}
                >
                  Sign Out
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownProfile;
