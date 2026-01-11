import Link from "next/link";

export function Header() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyWebsite</h1>

      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-blue-400">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
