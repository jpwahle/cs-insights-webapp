/* global document */
import { useEffect, useRef, useState } from "react";
import Transition from "../utils/Transition";

function DatasetDropdown() {
  const options = [
    {
      id: 0,
      dataset: "DBLP",
    },
    {
      id: 1,
      dataset: "ACL Anthology",
    },
    {
      id: 2,
      dataset: "arXiv",
    },
    {
      id: 3,
      dataset: "PubMed",
    },
    {
      id: 4,
      dataset: "PubMedCentral",
    },
    {
      id: 5,
      dataset: "All",
    },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const trigger = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);

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
        className="btn min-w-44 justify-between border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-600"
        aria-label="Select date range"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="flex items-center">
          <span>{options[selected]?.dataset}</span>
        </span>
        <svg
          className="ml-1 shrink-0 fill-current text-slate-400"
          width="11"
          height="7"
          viewBox="0 0 11 7"
        >
          <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
        </svg>
      </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className="absolute top-full left-0 z-10 mt-1 w-full overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg"
        enter="transition ease-out duration-100 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          className="text-sm font-medium text-slate-600"
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          {options.map((option) => (
            <button
              key={option.id}
              tabIndex={0}
              className={`flex w-full cursor-pointer items-center py-1 px-3 hover:bg-slate-50 ${
                option.id === selected && "text-indigo-500"
              }`}
              onClick={() => {
                setSelected(option.id);
                setDropdownOpen(false);
              }}
            >
              <svg
                className={`mr-2 shrink-0 fill-current text-indigo-500 ${
                  option.id !== selected && "invisible"
                }`}
                width="12"
                height="9"
                viewBox="0 0 12 9"
              >
                <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
              </svg>
              <span>{option.dataset}</span>
            </button>
          ))}
        </div>
      </Transition>
    </div>
  );
}

export default DatasetDropdown;
