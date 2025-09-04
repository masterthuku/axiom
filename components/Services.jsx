import React from "react";

const services = [
  {
    title: "Global Risk Analysis",
    desc: "Identifying and assessing potential risks to help organizations make informed decisions."
  },
  {
    title: "Market Entry Strategy",
    desc: "Tailored strategies to ensure successful entry into new and competitive global markets."
  },
  {
    title: "Diplomatic Advisory",
    desc: "Guidance for navigating complex international relations and policy environments."
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
