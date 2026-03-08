import Hello from "./components/Hello";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="space-y-8">
      <Hello />

      <section className="grid gap-4 md:grid-cols-2">
        <UserCard
          name="Jake Pacificador"
          role="Frontend Developer"
          bio="I love frontend and i hate backend"
        />
        <UserCard name="Jordan Pacificador" role="Backend Engineer" />
      </section>

      <Counter />
    </div>
  );
}
