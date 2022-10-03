type TopicsLogoProps = {
  active: boolean;
};

const TopicsLogo = ({ active }: TopicsLogoProps) => {
  return (
    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24">
      <circle
        className={`fill-current text-slate-600 ${active && "text-indigo-500"}`}
        cx="16"
        cy="8"
        r="8"
      />
      <circle
        className={`fill-current text-slate-400 ${active && "text-indigo-300"}`}
        cx="8"
        cy="16"
        r="8"
      />
    </svg>
  );
};

export default TopicsLogo;
