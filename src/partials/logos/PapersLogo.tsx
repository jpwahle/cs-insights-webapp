type PapersLogoProps = {
  active: boolean;
};

const PapersLogo = ({ active }: PapersLogoProps) => {
  return (
    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24">
      <path
        className={`fill-current text-slate-600 ${active && "text-indigo-500"}`}
        d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
      />
      <path
        className={`fill-current text-slate-600 ${active && "text-indigo-500"}`}
        d="M1 1h22v23H1z"
      />
      <path
        className={`fill-current text-slate-400 ${active && "text-indigo-300"}`}
        d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
      />
    </svg>
  );
};

export default PapersLogo;
