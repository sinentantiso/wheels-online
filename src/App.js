import React from "react";
import "./style.css";
import { Container, Nav , Navbar} from "react-bootstrap";

export default function App() {
  const fname = "Sinethemba";
  const lname = "Ntantiso"
  return (
    <div>
      <h1>Hello {fname}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
