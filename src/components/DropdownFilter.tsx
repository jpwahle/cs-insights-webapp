/* global document */
import { useEffect, useRef, useState } from "react";
import Select, { components } from "react-select";

import Transition from "@/utils/Transition";

export const authorOptions = [
  { value: "Terry Ruas", label: "Ruas" },
  { value: "Jan Philip Wahle", label: "Wahle" },
  { value: "Bela Gipp", label: "Gipp" },
  { value: "Saif M. Mohammad", label: "Mohammad" },
  { value: "Corinna Breitinger", label: "Breitinger" },
  { value: "Norman Meuschke", label: "Meuschke" },
];

export const venueOptions = [
  { value: "EMNLP", label: "EMNLP" },
  { value: "ACL", label: "ACL" },
  { value: "COLING", label: "COLING" },
  { value: "NAACL", label: "NAACL" },
  { value: "AACL", label: "AACL" },
  { value: "EACL", label: "EACL" },
];

function DropdownFilter({ align }: { align: string }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isFiltersOr, setIsFiltersOr] = useState(false);
  const [isAccessTypeOpen, setIsAccessTypeOpen] = useState(false);

  const [isUseTitleKeywordSearch, setIsUseTitleKeywordSearch] = useState(false);
  const [isUseAbstractKeywordSearch, setIsUseAbstractKeywordSearch] =
    useState(false);
  const [isUseFulltextKeywordSearch, setIsUseFulltextKeywordSearch] =
    useState(false);

  const [minCitations, setMinCitations] = useState(0);
  const [maxCitations, setMaxCitations] = useState(1000);

  const [selectedAuthor, setSelectedAuthor] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState([]);

  const [filters, setFilters] = useState({});

  const onChangeAuthor = (selectedOptions) =>
    setSelectedAuthor(selectedOptions);
  const onChangeVenue = (selectedOptions) => setSelectedVenue(selectedOptions);

  const trigger = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);

  // update filters or reset all filters
  const updateFilters = (reset: boolean) => {
    if (reset) {
      setIsFiltersOr(false);
      setIsAccessTypeOpen(false);
      setIsUseTitleKeywordSearch(false);
      setIsUseAbstractKeywordSearch(false);
      setIsUseFulltextKeywordSearch(false);
      setMinCitations(0);
      setMaxCitations(1000);
      setSelectedAuthor([]);
      setSelectedVenue([]);
      setFilters({
        isFiltersOr: false,
        isAccessTypeOpen: false,
        isUseTitleKeywordSearch: false,
        isUseAbstractKeywordSearch: false,
        isUseFulltextKeywordSearch: false,
        minCitations: 0,
        maxCitations: 1000,
        selectedAuthor: [],
        selectedVenue: [],
      });
    }
    setFilters({
      isFiltersOr,
      isAccessTypeOpen,
      isUseTitleKeywordSearch,
      isUseAbstractKeywordSearch,
      isUseFulltextKeywordSearch,
      minCitations,
      maxCitations,
      selectedAuthor,
      selectedVenue,
    });
  };

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
      updateFilters(false);
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
        className="btn border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-600"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Filter</span>
        <wbr />
        <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
          <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
        </svg>
      </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className={`absolute top-full z-10 mt-1 min-w-56 origin-top-right overflow-hidden rounded border border-slate-200 bg-white pt-1.5 shadow-lg ${
          align === "right" ? "right-0" : "left-0"
        }`}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={dropdown}>
          <div className="px-4 pt-1.5 pb-2 text-xs font-semibold uppercase text-slate-400">
            Filters
          </div>
          <ul className="mb-4">
            <li className="py-1 px-4" style={{ minWidth: "400px" }}>
              <span className="text-sm font-medium">Authors</span>
              <Select
                classNamePrefix="react-select"
                useDragHandle
                axis="xy"
                distance={4}
                getHelperDimensions={({ node }: { node: HTMLElement }) =>
                  node.getBoundingClientRect()
                }
                isMulti
                options={authorOptions}
                value={selectedAuthor}
                onChange={onChangeAuthor}
                components={{
                  MultiValueLabel: components.MultiValueLabel,
                }}
                closeMenuOnSelect={false}
              />
            </li>
            <li className="py-1 px-4" style={{ minWidth: "400px" }}>
              <span className="text-sm font-medium">Venues</span>
              <Select
                classNamePrefix="react-select"
                useDragHandle
                axis="xy"
                distance={4}
                getHelperDimensions={({ node }: { node: HTMLElement }) =>
                  node.getBoundingClientRect()
                }
                isMulti
                options={venueOptions}
                value={selectedVenue}
                onChange={onChangeVenue}
                components={{
                  MultiValueLabel: components.MultiValueLabel,
                }}
                closeMenuOnSelect={false}
              />
            </li>
            <li className="py-1 px-4" style={{ minWidth: "400px" }}>
              <span className="text-sm font-medium">Keywords</span>
              <Select
                classNamePrefix="react-select"
                useDragHandle
                axis="xy"
                distance={4}
                getHelperDimensions={({ node }: { node: HTMLElement }) =>
                  node.getBoundingClientRect()
                }
                isMulti
                options={venueOptions}
                value={selectedVenue}
                onChange={onChangeVenue}
                components={{
                  MultiValueLabel: components.MultiValueLabel,
                }}
                closeMenuOnSelect={false}
              />
            </li>
            <li className="py-1 px-5" style={{ minWidth: "400px" }}>
              <div className="flex flex-row">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    id="checkbox-title-search"
                    checked={isUseTitleKeywordSearch}
                    onChange={() => {
                      setIsUseTitleKeywordSearch(!isUseTitleKeywordSearch);
                    }}
                  />
                  <span className="ml-2 text-sm">Title</span>
                </label>
                <label className="ml-5 flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    id="checkbox-abstract-search"
                    checked={isUseAbstractKeywordSearch}
                    onChange={() => {
                      setIsUseAbstractKeywordSearch(
                        !isUseAbstractKeywordSearch
                      );
                    }}
                  />
                  <span className="ml-2 text-sm">Abstract</span>
                </label>
                <label className="ml-5 flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    id="checkbox-fulltext-search"
                    checked={isUseFulltextKeywordSearch}
                    onChange={() => {
                      setIsUseFulltextKeywordSearch(
                        !isUseFulltextKeywordSearch
                      );
                    }}
                  />{" "}
                  <span className="ml-2 text-sm">Full-text</span>
                </label>
              </div>
            </li>
            <li className="py-1 px-4" style={{ minWidth: "400px" }}>
              <span className="text-sm font-medium">Citations</span>
              <div className="mt-1 flex justify-between">
                <div className="mr-2">
                  <input
                    id="min-citations"
                    className="form-input w-full"
                    type="number"
                    placeholder="Min Citations"
                    value={minCitations}
                    onChange={(event) =>
                      setMinCitations(parseInt(event.target.value, 10))
                    }
                  />
                </div>
                <div className="ml-2">
                  <input
                    id="max-citations"
                    className="form-input w-full"
                    type="number"
                    placeholder="Max Citations"
                    value={maxCitations}
                    onChange={(event) =>
                      setMaxCitations(parseInt(event.target.value, 10))
                    }
                  />
                </div>
              </div>
            </li>

            <li className="mt-2 py-2 px-4">
              <div className="flex items-center">
                <div className="form-switch">
                  <input
                    type="checkbox"
                    id="switch-toggle-and-or"
                    className="sr-only"
                    checked={isFiltersOr}
                    onChange={() => {
                      setIsFiltersOr(!isFiltersOr);
                    }}
                  />
                  <label
                    className="bg-slate-400"
                    htmlFor="switch-toggle-and-or"
                  >
                    <span
                      className="bg-white shadow-sm"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Switch Fitler Combination</span>
                  </label>
                </div>
                <div className="ml-2 text-sm italic">
                  Combine filters with{" "}
                  <strong> {isFiltersOr ? "And" : "Or"}</strong> condition
                </div>
              </div>
            </li>
            <li className="py-2 px-4">
              <div className="flex items-center">
                <div className="form-switch">
                  <input
                    type="checkbox"
                    id="switch-toggle-access-type"
                    className="sr-only"
                    checked={isAccessTypeOpen}
                    onChange={() => {
                      setIsAccessTypeOpen(!isAccessTypeOpen);
                    }}
                  />
                  <label
                    className="bg-slate-400"
                    htmlFor="switch-toggle-access-type"
                  >
                    <span
                      className="bg-white shadow-sm"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Switch Access Type</span>
                  </label>
                </div>
                <div className="ml-2 text-sm italic">
                  <strong>
                    {" "}
                    {isAccessTypeOpen ? "Open and Restricted" : "Open"}
                  </strong>{" "}
                  Access
                </div>
              </div>
            </li>
          </ul>
          <div className="border-t border-slate-200 bg-slate-50 py-2 px-3">
            <ul className="flex items-center justify-between">
              <li>
                <button
                  className="btn-xs border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-600"
                  onClick={() => {
                    setDropdownOpen(false);
                    updateFilters(true);
                  }}
                >
                  Clear
                </button>
              </li>
              <li>
                <button
                  className="btn-xs bg-indigo-500 text-white hover:bg-indigo-600"
                  onClick={() => {
                    setDropdownOpen(false);
                    updateFilters(false);
                  }}
                  onBlur={() => setDropdownOpen(false)}
                >
                  Apply
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownFilter;
