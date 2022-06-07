import logo from "./logo.svg";
import "./App.css";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = { firstName: "Harper", lastName: "Perez" };

const element = <h1>Hello {formatName(user)}</h1>;

function App() {
  const name = "Josh Perez";
  // const element = <h1>Hello {name}</h1>;

  return (
    <div className="App">
      <h1>Hello World</h1>
      {element}
    </div>
  );
}

export default App;
