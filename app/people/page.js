"use client";

import React, { useState } from "react";

const employees = [
  {
    name: "Bryan Lloyd L. Dela Rosa",
    position: "Managing Partner",
    image: "/bryan.jpg",
  },
  {
    name: "Paul Vincent M. Casilla",
    position: "Partner",
    image: "/paul.jpg",
  },
  {
    name: "Beatriz Zamora",
    position: "Associate",
    image: "/beatriz.jpg",
  },
  {
    name: "Bienvenido Co",
    position: "Associate",
    image: "/bienvenido.jpg",
  },
  {
    name: "Paolo Villanueva",
    position: "Associate",
    image: "/paolo.jpeg",
  },
  {
    name: "Restine Joy Armada",
    position: "Associate",
    image: "/restine.jpg",
  },
];

function People() {
  const [selectedTab, setSelectedTab] = useState("Partners");

  const filteredEmployees =
    selectedTab === "Partners"
      ? employees.filter((e) => e.position.toLowerCase().includes("partner"))
      : employees.filter((e) => e.position.toLowerCase().includes("associate"));

  return (
    <main className="p-5 lg:p-10">
      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-5 md:mb-7 lg:mb-10">
        Our People
      </h1>

      {/* Tabs */}
      <div className="flex space-x-6 mb-8 text-lg font-semibold">
        <button
          onClick={() => setSelectedTab("Partners")}
          className={`border-b-2 ${
            selectedTab === "Partners"
              ? "border-yellow-600 text-yellow-600"
              : "border-transparent text-gray-600 hover:text-black"
          } pb-1 transition`}
        >
          Partners
        </button>
        <button
          onClick={() => setSelectedTab("Associates")}
          className={`border-b-2 ${
            selectedTab === "Associates"
              ? "border-yellow-600 text-yellow-600"
              : "border-transparent text-gray-600 hover:text-black"
          } pb-1 transition`}
        >
          Associates
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((person, index) => (
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
