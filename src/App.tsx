import { Stats } from "fs";
import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Greet name="Akshay" messageCount={10} isLoggedIn={false} />
      <Greet name="Akshay" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>PLaceholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Button
        handleClick={(e, id) => {
          console.log("button clicked", e, id);
        }}
      />
      <Input value="" handleChange={(e) => console.log(e.target.value)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
