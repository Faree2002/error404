import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="flex justify-between items-center bg-gray-950 text-white px-24 py-3">
      <h1 className="flex items-center text-xl font-bold">
        <img className="w-6 h-6 mr-2" src="favicon.ico" alt="Logo" />
        <Link href="/" passHref>
        <button className="bg-transparent">
        Game of Truenos
        </button>
        </Link>
      </h1>

      <ul className="flex gap-x-2">
        {!session?.user ? (
          <>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/auth/signin">Login</Link>
            </li>
            <li>
              <Link href="/auth/signup">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/api/auth/signout">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
