import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/globals.css";
import { ThemeProvider } from "./context/theme-provider.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Task from "./home/pages/tasks/task.tsx";
import Dashboard from "./home/pages/dashboard/dashbaord.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
