"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));
  const reset = () => setCount(0);

  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-xl font-semibold">Counter Demo</h2>
      <p className="mt-3 text-4xl font-bold text-indigo-600 dark:text-indigo-400">
        {count}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={increment}
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
        >
          Increment
        </button>
        <button
          type="button"
          onClick={decrement}
          className="rounded-md bg-zinc-700 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-600"
        >
          Decrement
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800"
        >
          Reset
        </button>
      </div>
    </section>
  );
}
