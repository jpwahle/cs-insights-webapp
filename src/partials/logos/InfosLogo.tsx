type InfosLogoProps = {
  active: boolean;
};

const InfosLogo = ({ active }: InfosLogoProps) => {
  return (
    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24">
      <circle
        className={`fill-current text-slate-400 ${active && "text-indigo-300"}`}
        cx="18.5"
        cy="5.5"
        r="4.5"
      />
      <circle
        className={`fill-current text-slate-600 ${active && "text-indigo-500"}`}
        cx="5.5"
        cy="5.5"
        r="4.5"
      />
      <circle
        className={`fill-current text-slate-600 ${active && "text-indigo-500"}`}
        cx="18.5"
        cy="18.5"
        r="4.5"
      />
      <circle
        className={`fill-current text-slate-400 ${active && "text-indigo-300"}`}
        cx="5.5"
        cy="18.5"
        r="4.5"
      />
    </svg>
  );
};

export default InfosLogo;
