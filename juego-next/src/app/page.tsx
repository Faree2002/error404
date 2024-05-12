// pages/index.js (o page.tsx si estás utilizando TypeScript)

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Contenido de tu página principal */}
      <h1 className="text-3xl font-bold mb-8">¡Bienvenido a mi aplicación!</h1>
      
      {/* Enlace a la página del juego principal */}
      <Link href="/game">
        ¡Jugar al juego!
      </Link>
    </main>
  );
}
