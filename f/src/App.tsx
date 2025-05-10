import { useArcTasks } from "./hooks/useArcTasks";
import TaskCard from "./components/TaskCard";
import Layout from "./components/Layout";

export default function App() {
  const { tasks, isLoading, error } = useArcTasks();

  if (isLoading) return <p className="p-8">Loading ARC tasks…</p>;
  if (error) return <p className="p-8 text-red-600">Error: {error}</p>;

  return (
    <Layout infoText="Interactive visualization tool for exploring the Abstract Reasoning Corpus (ARC).">
      <main className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </main>
    </Layout>
  );
}