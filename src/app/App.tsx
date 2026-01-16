import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainPage } from "@/pages";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex items-center justify-center min-h-screen bg-zinc-950">
        <MainPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
