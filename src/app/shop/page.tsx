"use client";

import { useCart } from "@/lib/cart-context";

const products = [
  { id: "p-1", name: "Playstation 5", price: 25000.0 },
  { id: "p-2", name: "Playstation 4", price: 15000.0 },
  { id: "p-3", name: "Playstation 3", price: 8300.0 },
];

export default function ShopPage() {
  const { items, totalPrice, addItem, removeItem } = useCart();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Shop</h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Add items to the global cart context.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              ₱{product.price.toFixed(2)}
            </p>
            <button
              type="button"
              onClick={() => addItem(product)}
              className="mt-4 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-500"
            >
              Add to Cart
            </button>
          </article>
        ))}
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Cart Details</h2>
        <p className="mt-1 text-sm">Items: {items.length}</p>
        <p className="text-sm">Total: ₱{totalPrice.toFixed(2)}</p>
        <ul className="mt-3 space-y-2">
          {items.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className="flex items-center justify-between rounded border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-700"
            >
              <span>
                {item.name} - ₱{item.price.toFixed(2)}
              </span>
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="rounded border border-zinc-300 px-2 py-1 text-xs hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
