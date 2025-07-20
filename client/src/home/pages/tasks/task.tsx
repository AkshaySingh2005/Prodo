import App from "@/App";

const Task = () => {
  return (
    <App>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Tasks</h1>
        <div className="space-y-4">
          {/* Your task content here */}
          <p className="text-muted-foreground">Manage your tasks and to-dos</p>
        </div>
      </div>
    </App>
  );
};

export default Task;
