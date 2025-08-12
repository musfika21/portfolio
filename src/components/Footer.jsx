import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
      <p>
        &copy; {new Date().getFullYear()} Musfika Iqfat. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
