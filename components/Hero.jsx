import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-blue-700 text-white text-center py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Navigating Global Challenges with Precision
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Axiom Global Strategies provides innovative solutions for businesses to thrive in an interconnected world.
        </p>
        <a href="#services"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">
          Explore Our Services
        </a>
      </div>
    </section>
  );
}
