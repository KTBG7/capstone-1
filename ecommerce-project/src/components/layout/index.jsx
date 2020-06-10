import React from "react";
import NavBar from "../navbar";
import "./styles.css";

export default function Layout({ children, title }) {
  document.getElementsByTagName("title")[0].innerHTML = title;
  return (
    <>
      <NavBar />
      <div className="wrapper">{children}</div>
    </>
  );
}
