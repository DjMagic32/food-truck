export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Empresa. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
