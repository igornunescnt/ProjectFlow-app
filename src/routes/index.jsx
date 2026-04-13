import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ProjectDetails from "../pages/ProjectDetails";
import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/project/:id" element={<MainLayout><ProjectDetails /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}