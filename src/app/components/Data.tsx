"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const { items, totalPrice } = useCart();
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <nav className="border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-lg font-bold">
              Pacificador Lab
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/" className="hover:text-indigo-500">
                Home
              </Link>
              <Link href="/posts" className="hover:text-indigo-500">
                Posts
              </Link>
              <Link href="/contact" className="hover:text-indigo-500">
                Contact
              </Link>
              <Link href="/shop" className="hover:text-indigo-500">
                Shop
              </Link>
            </div>
          </div>
          <p className="text-sm font-medium">
            Cart: {items.length} item{items.length === 1 ? "" : "s"} (₱
            {totalPrice.toFixed(2)})
          </p>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-6xl px-6 py-8">{children}</main>

      <footer className="border-t border-zinc-200 px-6 py-6 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        Copyright &copy; {year} Pacificador Lab. All rights reserved.
      </footer>
    </div>
  );
}
