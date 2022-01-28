import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Button } from "./components/props/Button";
import { Counter } from "./components/class/Counter";
import { Container } from "./components/props/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
import Greet from "./components/props/Greet";
import { Heading } from "./components/props/Heading";
import { CustomButton } from "./components/html/Button";
import { Input } from "./components/props/Input";
import { Oscar } from "./components/props/Oscar";
import { Person } from "./components/props/Person";
import { PersonList } from "./components/props/PersonList";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Status } from "./components/props/Status";
import { Toast } from "./components/templateliterals/Toast";

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
      <RandomNumber value={10} isPositive />
      <Toast position="right-bottom" />
      <CustomButton variant="primary">Primary Button</CustomButton>
    </div>
  );
}

export default App;
