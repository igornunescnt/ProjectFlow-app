import { Link } from "react-router-dom";
import { useState } from "react";

export default function MainLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      
      {/* BOTÃO MOBILE */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-lg shadow-lg"
      >
        ☰
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-900 text-white p-4 z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* BOTÃO FECHAR MOBILE */}
        <button
          onClick={() => setOpen(false)}
          className="md:hidden mb-4 text-right w-full"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-6">ProjectFlow</h2>

        <nav className="flex flex-col gap-3">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 pt-16 px-4 md:p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}