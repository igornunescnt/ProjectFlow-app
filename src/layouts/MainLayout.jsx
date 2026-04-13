import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* SIDEBAR */}
      <aside className="hidden md:flex w-64 bg-gray-900 text-white p-4 flex-col">
        <h2 className="text-xl font-bold mb-6">ProjectFlow</h2>

        <nav className="flex flex-col gap-3">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 bg-gray-100 p-4 md:p-6 overflow-hidden">
        {children}
      </main>
    </div>
  );
}