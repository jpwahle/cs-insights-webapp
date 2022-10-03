type CitationsLogoProps = {
  active: boolean;
};

const CitationsLogo = ({ active }: CitationsLogoProps) => {
  return (
    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24">
      <path
        className={`fill-current text-slate-600 ${active && "text-indigo-500"}`}
        d="M19 5h1v14h-2V7.414L5.707 19.707 5 19H4V5h2v11.586L18.293 4.293 19 5Z"
      />
      <path
        className={`fill-current text-slate-400 ${active && "text-indigo-300"}`}
        d="M5 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM5 23a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
      />
    </svg>
  );
};

export default CitationsLogo;
