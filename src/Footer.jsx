import React from "react";

const year = new Date().getUTCFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright @ {year}</p>
    </footer>
  );
}

export default Footer;
