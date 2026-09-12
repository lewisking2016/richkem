export default function ProductLoading() {
  return (
    <div className="space-y-8">
      <div className="skeleton h-4 w-72" />
      <div className="grid gap-6 lg:grid-cols-[420px_1fr_300px]">
        <div className="space-y-2">
          <div className="skeleton aspect-square w-full" />
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 5 }).map((_, i) => <div key={i} className="skeleton aspect-square w-full" />)}
          </div>
        </div>
        <div className="space-y-3">
          <div className="skeleton h-7 w-4/5" />
          <div className="skeleton h-4 w-1/2" />
          <div className="skeleton h-10 w-48" />
          <div className="skeleton h-40 w-full" />
        </div>
        <div className="skeleton h-72 w-full" />
      </div>
    </div>
  );
}
