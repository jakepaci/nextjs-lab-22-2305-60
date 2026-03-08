export default function LoadingPosts() {
  return (
    <div className="space-y-4">
      <div className="h-8 w-40 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="h-5 w-3/4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
      ))}
    </div>
  );
}
