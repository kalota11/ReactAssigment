export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-black text-white">
      <h1 className="text-xl font-bold">MyApp</h1>
      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-cyan-400">Home</li>
        <li className="cursor-pointer hover:text-cyan-400">About</li>
        <li className="cursor-pointer hover:text-cyan-400">Contact</li>
      </ul>
    </nav>
  );
}
