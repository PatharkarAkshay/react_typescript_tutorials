import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Button } from "./components/Button";
import { Counter } from "./components/class/Counter";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
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
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Counter message="The counter value is " />
      <Private component={Profile} isLoggedIn={true} />
      <List
        items={[
          { id: 1, name: "Batman" },
          { id: 2, name: "Superman" },
          { id: 3, name: "Wonder Woman" },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
