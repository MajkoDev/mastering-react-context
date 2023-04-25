import { createContext, useContext, useState } from "react";

// create context
const CurrentUserContext = createContext(null);

// combine {current User, setCurrentUser} into single object
// pass it inside value={} throught context
export default function UpdateObject() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Form />
    </CurrentUserContext.Provider>
  );
}

// component that holds 'Panel' and 'Login Button' and passes props 'title'
function Form() {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  );
}

// component that displays title and is used as area of display
function Panel({ title, children }) {
  return (
    <section className="panel">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

// login button in which we call up - state and function
// condition: if state is null...
// button with event handler and 'name' prop
function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}.</p>;
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "Advika" });
      }}
    >
      Log in as Advika
    </Button>
  );
}

// button component that receives inside text and event handler function
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
