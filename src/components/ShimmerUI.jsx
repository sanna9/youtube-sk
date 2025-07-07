const ShimmerUI = () => {
  return (
    <div className="m-2 p-2 rounded-lg shadow animate-pulse bg-white">
      <div className="rounded-lg w-full h-48 bg-slate-200"></div>

      <div className="mt-3 space-y-2">
        <div className="h-4 bg-slate-200 rounded w-3/4"></div>
        <div className="h-3 bg-slate-200 rounded w-1/2"></div>
        <div className="h-3 bg-slate-200 rounded w-1/3"></div>
      </div>
    </div>
  );
};

export default ShimmerUI;
