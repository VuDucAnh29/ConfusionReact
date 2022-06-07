import logo from "./logo.svg";
import "./App.css";
// import Hello from "./Components/Hello";
// import Hello2 from "./Components/Hello2";
import { Navbar, Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// const user = { firstName: "Harper", lastName: "Perez" };

// const element = <h1>Hello {formatName(user)}</h1>;

// const userData = { id: "1", name: "Duc Anh" };

function App() {
  // const name = "Josh Perez";
  // const element = <h1>Hello {name}</h1>;

  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
