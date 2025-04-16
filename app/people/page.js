"use client";

import React, { useState } from "react";

const employees = [
  {
    name: "Bryan Lloyd L. Dela Rosa",
    position: "Managing Partner",
    image: "/Bryan5.jpg",
  },
  {
    name: "Paul Vincent M. Casilla",
    position: "Partner",
    image: "/Paul4.jpg",
  },
  {
    name: "Beatriz Zamora",
    position: "Associate",
    image: "/BMZ.jpg",
    bio: "With more than a year’s worth of experience in the legal field, Beatriz’s (Bei) practice areas include litigation, corporate law, taxation, labor & employment, and mergers & acquisitions. After graduating from the UP College of Law in 2023 and subsequently passing the Bar Examinations in the same year, Bei started her legal career as a junior associate in Sarmiento Loriega Law Office, a medium-sized law firm in Ortigas specializing in corporate and taxation law. In her first year as a lawyer, Bei was exposed to the various aspects of corporate, taxation, and litigation practice with the guidance of lawyers consistently recognized by the Asian Legal Business Awards and the Top 100 Lawyers in the Philippines (ABLJ). She joined DC Law in January 2025 and currently rotates in the firm’s various practice areas. Bei believes in the constant pursuit of learning, considering she spends most of her spare time reading and less of it writing. True to her roots, she is always in search of the next book to add to her growing collection.",
  },
  {
    name: "Bienvenido Co",
    position: "Associate",
    image: "/BMC.jpg",
    bio: "Bienvenido’s (Ben) practice areas include litigation, corporate law, mergers & acquisitions, real estate, and labor & employment. Ben started his legal career at Gatmaytan Yap Patacsil Gutierrez & Protacio (C&G Law) where he was an underbar associate from January 2023 to May 2023 and then associate from May 2023 to July 2024. He joined DC Law on September 2024 and is heavily involved in the firm’s litigation practice area.",
  },
  {
    name: "Restine Joy Armada",
    position: "Associate",
    image: "/restine.jpg",
    bio: "Restine is specializing in litigation, corporate law, administrative cases, real estate, estate settlement, election law, intellectual property and labor and employment law. With a vigorous track record of representing clients in various legal matters, Atty. Armada has built a reputation for delivering strategic and effective legal solutions. Her extensive experience spans both corporate and individual sectors, offering expert counselling in navigating complex legal landscapes, resolving disputes, and ensuring compliance with regulatory frameworks. Committed to providing diligent and personalized service, Atty. Armada continues to uphold the highest standards of legal excellence in her practice. Restine began her legal career at Acube Legal Support, Inc. and Jose Antonio Aliling & Associates (ACUBE Law), where she worked as an underbar associate from February 2023 to May 2023, followed by an associate role from May 2023 to August 2023. She joined DC Law in September 2023 and plays an active role in the firm’s litigation practice.",
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
      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8">
        Our People
      </h1>

      <div className="flex justify-center mb-10 text-xl font-semibold space-x-24">
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

      <div
        key={selectedTab}
        className="animate-fade-in transition-all duration-500 ease-in-out"
      >
        {selectedTab === "Partners" && (
          <div className="flex flex-wrap justify-center gap-12">
            {filteredEmployees.map((person, index) => (
              <div
                key={index}
                className="relative w-72 h-96 bg-gray-300 overflow-hidden rounded-lg hover:scale-[102%] duration-200"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-semibold">{person.name}</h2>
                  <p className="text-sm">{person.position}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === "Associates" && (
          <div className="space-y-8 px-5 sm:px-14 md:px-20 lg:px-44">
            {filteredEmployees.map((person, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start gap-6"
              >
                <div className="w-full md:w-1/3 h-96 bg-gray-300 overflow-hidden rounded-lg">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{person.name}</h2>
                  <p className="text-sm text-gray-600 mb-2">
                    {person.position}
                  </p>
                  <p className="text-gray-700">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default People;
