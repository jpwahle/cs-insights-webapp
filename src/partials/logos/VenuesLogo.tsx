type VenuesLogoProps = {
  active: boolean;
};

const VenuesLogo = ({ active }: VenuesLogoProps) => {
  return (
    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24">
      <path
        className={`fill-current text-slate-600 ${active && "text-indigo-500"}`}
        d="M8.07 16H10V8H8.07a8 8 0 110 8z"
      />
      <path
        className={`fill-current text-slate-400 ${active && "text-indigo-300"}`}
        d="M15 12L8 6v5H0v2h8v5z"
      />
    </svg>
  );
};

export default VenuesLogo;
