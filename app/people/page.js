import React from "react";

const employees = [
  { name: "Bryan Dela Rosa", position: "Position", image: "/bryan.jpg" },
  { name: "Paul Vincent M. Casilla", position: "Position", image: "/paul.jpg" },
  { name: "Beatriz Zamora", position: "Position", image: "/beatriz.jpg" },
  { name: "Bienvenido Co", position: "Position", image: "/bienvenido.jpg" },
  { name: "Paolo Villanueva", position: "Position", image: "/paolo.jpeg" },
  { name: "Restine Joy Armada", position: "Position", image: "/restine.jpg" },
];

function People() {
  return (
    <main className="p-5 lg:p-10">
      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-5 md:mb-7 lg:mb-10">
        Our People
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {employees.map((person, index) => (
          <div
            key={index}
            className="relative w-full h-80 bg-gray-300 overflow-hidden rounded-lg hover:scale-[102%] duration-200"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-lg font-semibold">{person.name}</h2>
              <p className="text-sm">{person.position}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default People;
