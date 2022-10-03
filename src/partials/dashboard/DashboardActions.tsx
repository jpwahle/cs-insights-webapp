/* global window */
/* global navigator */

import DatasetDropdown from "../../components/DatasetDropdown";
import Datepicker from "../../components/Datepicker";
import DropdownFilter from "../../components/DropdownFilter";
import DashboardAvatars from "./DashboardAvatars";

function DashboardActions() {
  const handleSocialShare = (event) => {
    event.preventDefault();

    const data = {
      title: "Look at this awesome CS-Insights board.",
      text: `Look at this awesome CS-Insights board by Jan Philip Wahle (@jpwahle)`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(data)) {
      navigator
        ?.share(data)
        // eslint-disable-next-line no-console
        .then(() => console.log(`Successful share of ${window.location.href}`))
        // eslint-disable-next-line no-console
        .catch((error) =>
          console.log(`Error sharing ${window.location.href}`, error)
        );
    }
  };

  return (
    <div className="mb-8 sm:flex sm:items-center sm:justify-between">
      {/* Left: Avatars */}
      <DashboardAvatars />

      {/* Right: Actions */}
      <div className="flex flex-wrap justify-start gap-2 sm:auto-cols-max sm:justify-end">
        {/* Datepicker built with flatpickr */}
        <Datepicker align="right" />
        {/* Filter button */}
        <DropdownFilter align="right" />
        {/* Dataset Picker */}
        <DatasetDropdown align="right" />
        {/* Add view button */}
        <button
          className="btn bg-indigo-500 text-white hover:bg-indigo-600"
          onClick={handleSocialShare}
        >
          <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 32 32">
            <g
              strokeWidth="2"
              fill="#fff"
              stroke="#fff"
              className="nc-icon-wrapper"
            >
              <line
                data-cap="butt"
                data-color="color-2"
                x1="16"
                y1="23"
                x2="16"
                y2="2"
                fill="none"
                strokeMiterlimit="10"
              ></line>
              <polyline
                data-color="color-2"
                points="10 8 16 2 22 8"
                fill="none"
                strokeLinecap="square"
                strokeMiterlimit="10"
              ></polyline>
              <polyline
                points="11 15 6 15 2 30 30 30 26 15 21 15"
                fill="none"
                stroke="#fff"
                strokeLinecap="square"
                strokeMiterlimit="10"
              ></polyline>
            </g>{" "}
          </svg>
          <span className="ml-2 hidden xs:block">Share</span>
        </button>
      </div>
    </div>
  );
}

export default DashboardActions;
