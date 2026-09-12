export default function SearchLoading() {
  return (
    <div>
      <div className="skeleton mb-4 h-8 w-64" />
      <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
        <div className="skeleton hidden h-96 w-full lg:block" />
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card flex gap-4 p-3">
              <div className="skeleton h-28 w-36 shrink-0" />
              <div className="flex-1 space-y-2 py-1">
                <div className="skeleton h-5 w-3/4" />
                <div className="skeleton h-4 w-1/3" />
                <div className="skeleton h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
