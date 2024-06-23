// pages/index.js (o page.tsx si estás utilizando TypeScript)
'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-loginfoto flex min-h-screen flex-col items-center justify-between p-24">
      {/* Contenido de tu página principal */}
      <h1 className="text-3xl font-bold mb-8 text-white shadow-lg">Bienvenido a Game of Truenos</h1>

      {/* Enlace a la página del juego principal */}
      <Link href="/auth/signin" passHref>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ingresar
        </button>
      </Link>

    </main>
  );
}
