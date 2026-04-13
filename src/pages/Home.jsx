import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-5 font-bold">Bem-vindo ao ProjectFlow</h1>
        <Link to="/dashboard">
            <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded">
                Acesse o Dashboard
            </button>
        </Link>
    </div>
  );
}