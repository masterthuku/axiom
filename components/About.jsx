import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://workingcapitalreview.com/wp-content/uploads/2015/06/37b334b-e1435021410825.jpg"
          alt="Global teamwork"
          className="rounded-lg shadow"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            At Axiom Global Strategies, we specialize in creating actionable
            strategies for businesses to navigate global markets, overcome
            challenges, and achieve sustainable growth. Our expertise spans
            international relations, risk analysis, and market entry strategies.
          </p>
        </div>
      </div>
    </section>
  );
}
