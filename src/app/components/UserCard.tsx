interface UserCardProps {
  name: string;
  role: string;
  bio?: string;
}

export default function UserCard({ name, role, bio }: UserCardProps) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/40">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {name}
      </h2>
      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
        {role}
      </p>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {bio ?? "No Bio yet"}
      </p>
    </article>
  );
}
