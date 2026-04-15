import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-900 border-b border-gray-800">
        <h1 className="text-xl font-bold text-white">
          ProjectFlow
        </h1>

        <Link
          to="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Acessar
        </Link>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 p-5">
          Organize seus projetos com clareza e controle
        </h2>

        <p className="text-gray-400 max-w-xl mb-6">
          Gerencie tarefas com um sistema Kanban moderno, arraste atividades com facilidade
          e acompanhe seu progresso em tempo real.
        </p>

        <Link
          to="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg shadow-lg transition"
        >
          Começar agora 🚀
        </Link>
      </section>

      {/* FEATURES */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition">
            <h3 className="font-semibold text-lg mb-2 text-white">
              Kanban intuitivo
            </h3>
            <p className="text-gray-400 text-sm">
              Organize tarefas em colunas e visualize seu fluxo de trabalho.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition">
            <h3 className="font-semibold text-lg mb-2 text-white">
              Drag & Drop
            </h3>
            <p className="text-gray-400 text-sm">
              Arraste tarefas facilmente entre etapas do projeto.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition">
            <h3 className="font-semibold text-lg mb-2 text-white">
              Alta produtividade
            </h3>
            <p className="text-gray-400 text-sm">
              Foque no que importa e entregue mais resultados.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-4 text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} ProjectFlow — Desenvolvido por Ygor
      </footer>
    </div>
  );
}