import { Avatar } from "flowbite-react";

export default function InfoProfile() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-4 bg-white shadow-md rounded-md w-full md:w-1/2 m-4 mt-10">
        <h2 className="text-xl font-bold mb-4">Mi Perfil</h2>
        
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-2">
            <div className="mb-4">
              <label className="block text-gray-700">Número de cuenta:</label>
              <input type="text" className="w-full p-2 border rounded-md" value="20161005588" readOnly />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Primer Nombre:</label>
              <input type="text" className="w-full p-2 border rounded-md" value="Juan" readOnly />
            </div>
          </div>

          <div className="flex-1 p-2">
            <div className="mb-4">
              <label className="block text-gray-700">Correo electrónico:</label>
              <input type="email" className="w-full p-2 border rounded-md" value="juan.perez@example.com" readOnly />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Apellido:</label>
              <input type="text" className="w-full p-2 border rounded-md" value="Perez" readOnly />
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4 mt-10">Contacto</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Número de teléfono:</label>
          <input type="tel" className="w-full p-2 border rounded-md" value="89909192" readOnly />
        </div>
      </div>

      <div className="p-4 bg-white shadow-md rounded-md w-full md:w-1/2 m-4 mt-10 flex items-center justify-center relative">
        <div className="absolute inset-x-0 -top-16 flex flex-col items-center">
          <Avatar
            rounded
            size="xl"
            className="w-45 h-40 transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="mt-5 text-center">
            <p className="text-lg font-semibold">Juan Pérez</p>
            <p className="text-gray-600">Ingeniería en Sistemas</p>
            <p className="text-gray-600">Universidad Nacional Autónoma de Honduras</p>
          </div>
        </div>
      </div>
    </div>
  );
}
