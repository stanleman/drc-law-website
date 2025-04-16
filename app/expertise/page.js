import React from "react";

const employees = [
  {
    name: "Arbitration",
    image: "/arbi.jpg",
  },
  { name: "Corporate Law", image: "/corp-law.jpg" },
  { name: "Criminal Defense and Prosecution", image: "/crim-def.jpg" },
  { name: "Election Law", image: "/elec.jpg" },
  { name: "Estate Settlement", image: "/est.jpg" },
  { name: "Immigration", image: "/immi.jpeg" },
  { name: "Labor and Employment Law", image: "/labor.jpg" },
  { name: "Litigation", image: "/liti.jpg" },
  { name: "Special Projects", image: "/special.jpg" },
  { name: "Taxation", image: "/tax.jpg" },
  { name: "BOI and PEZA Registration", image: "/invest.jpg" },
  { name: "Maritime Law", image: "/maritime.png" },
];

function Expertise() {
  return (
    <main className="p-5 lg:p-10">
      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-5 md:mb-7 lg:mb-10">
        Our Expertise
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {employees.map((expertise, index) => (
          <div
            key={index}
            className="relative w-full h-50 bg-gray-300 overflow-hidden rounded-lg hover:scale-[102%] duration-200"
          >
            <img
              src={expertise.image}
              alt={expertise.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h2 className="text-lg font-semibold">{expertise.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Expertise;
