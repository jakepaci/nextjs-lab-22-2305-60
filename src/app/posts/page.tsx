import Link from "next/link";
import { Suspense } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function SlowData() {
  await new Promise((resolve) => setTimeout(resolve, 2500));
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900/50 dark:bg-amber-900/20 dark:text-amber-200">
      SlowData streamed in after an artificial delay.
    </div>
  );
}

function SlowDataSkeleton() {
  return (
    <div className="animate-pulse rounded-lg border border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-800">
      <div className="h-4 w-40 rounded bg-zinc-300 dark:bg-zinc-700" />
    </div>
  );
}

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const posts: Post[] = await response.json();
  const firstTenPosts = posts.slice(0, 10);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Posts</h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Async Server Component with ISR and streamed content.
        </p>
      </header>

      <Suspense fallback={<SlowDataSkeleton />}>
        <SlowData />
      </Suspense>

      <ul className="space-y-3">
        {firstTenPosts.map((post) => (
          <li
            key={post.id}
            className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <Link
              href={`/posts/${post.id}`}
              className="text-lg font-semibold hover:text-indigo-500"
            >
              {post.title}
            </Link>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {post.body.slice(0, 90)}
              {post.body.length > 90 ? "..." : ""}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
