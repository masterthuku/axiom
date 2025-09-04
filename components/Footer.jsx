import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Axiom Global Strategies. All rights reserved.</p>
    </footer>
  );
}
