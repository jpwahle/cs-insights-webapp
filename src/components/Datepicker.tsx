import Flatpickr from "react-flatpickr";

function Datepicker({ align }: { align: string }) {
  const options = {
    mode: "range",
    static: true,
    monthSelectorType: "static",
    dateFormat: "M j, Y",
    defaultDate: [
      new Date().setDate(new Date().getDate() - 10 * 365),
      new Date(),
    ],
    prevArrow:
      '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow:
      '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    onReady: (selectedDates, dateStr, instance) => {
      // eslint-disable-next-line no-param-reassign
      instance.element.value = dateStr.replace("to", "-");
      const customClass = align || "";
      instance.calendarContainer.classList.add(`flatpickr-${customClass}`);
    },
    onChange: (selectedDates, dateStr, instance) => {
      // eslint-disable-next-line no-param-reassign
      instance.element.value = dateStr.replace("to", "-");
    },
  };

  return (
    <div className="relative">
      <Flatpickr
        className="form-input w-60 pl-9 font-medium text-slate-500 hover:text-slate-600 focus:border-slate-300"
        options={options}
      />
      <div className="pointer-events-none absolute inset-0 right-auto flex items-center">
        <svg
          className="ml-3 h-4 w-4 fill-current text-slate-500"
          viewBox="0 0 16 16"
        >
          <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
        </svg>
      </div>
    </div>
  );
}

export default Datepicker;
