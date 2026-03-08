import { revalidatePath } from "next/cache";

export default function ContactPage() {
  async function submitContact(formData: FormData) {
    "use server";

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    console.log("Contact form submission:", { name, email, message });
    revalidatePath("/contact");
  }

  return (
    <section className="mx-auto max-w-xl space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        This form uses a Server Action with FormData handling.
      </p>

      <form action={submitContact} className="space-y-3">
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className="w-full rounded-md border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-md border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          rows={5}
          className="w-full rounded-md border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
        />
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
