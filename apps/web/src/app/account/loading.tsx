export default function AccountLoading() {
  return (
    <div className="grid gap-6 lg:grid-cols-[230px_1fr]">
      <div className="skeleton h-80 w-full" />
      <div className="space-y-4">
        <div className="skeleton h-8 w-48" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => <div key={i} className="skeleton h-20 w-full" />)}
        </div>
        <div className="skeleton h-64 w-full" />
      </div>
    </div>
  );
}
