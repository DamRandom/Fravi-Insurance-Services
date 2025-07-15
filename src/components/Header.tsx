export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow flex justify-between items-center">
      <h1 className="text-lg font-bold">Fravi Insurance</h1>
      <nav className="space-x-4 text-sm">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
