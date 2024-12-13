export const ContactForm = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contáctanos</h2>
        <form className="grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Tu Nombre"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <input
            type="email"
            placeholder="Tu Email"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <textarea
            placeholder="Tu Mensaje"
            rows="5"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
