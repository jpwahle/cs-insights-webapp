import Link from "next/link";

function PaginationClassic() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <nav
        className="mb-4 sm:order-1 sm:mb-0"
        role="navigation"
        aria-label="Navigation"
      >
        <ul className="flex justify-center">
          <li className="ml-3 first:ml-0">
            <Link
              className="btn cursor-not-allowed border-slate-200 bg-white text-slate-300"
              href="/"
            >
              &lt;- Previous
            </Link>
          </li>
          <li className="ml-3 first:ml-0">
            <Link
              className="btn border-slate-200 bg-white text-indigo-500 hover:border-slate-300"
              href="/"
            >
              Next -&gt;
            </Link>
          </li>
        </ul>
      </nav>
      <div className="text-center text-sm text-slate-500 sm:text-left">
        Showing <span className="font-medium text-slate-600">1</span> to{" "}
        <span className="font-medium text-slate-600">5</span> of{" "}
        <span className="font-medium text-slate-600">5928392</span> results
      </div>
    </div>
  );
}

export default PaginationClassic;
