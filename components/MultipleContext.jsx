import React, { createContext, useContext, useState } from "react";

//? two indepented contexts
//? 'ThemeContext' provides the current theme
//? 'CurrentUserContext' hold the object representing the current user

// contexts
const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

// main component
export default function MultipleContext() {
  // states
  const [theme, setTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <WelcomePanel />
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          Use Dark Mode
        </label>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

// other components

// panel component that receives from context state of user
// and according to it displays either 'Greeting' or 'LoginForm' component
function WelcomePanel({ children }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
}

function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);
  return <p>You logged in as {currentUser.name}.</p>;
}

function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName !== "" && lastName !== "";

  return (
    <>
      <label>First Name{': '}
      <input required value={firstName} onChange={e => setFirstName(e.target.value)} /></label>
      <br />
      <label>Last Name{': '}
      <input required value={lastName} onChange={e => setLastName(e.target.value)} /></label>
      <br />
      <Button disabled={!canLogin} onClick={() => {setCurrentUser({name: firstName + ' ' + lastName})}} >Log in</Button>
      {!canLogin && <i>fill in both fields.</i>}
    </>
  );
}

// section component with title
function Panel({ children, title }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;

  return (
    <section className={className}>
      {" "}
      <h1>{title}</h1>
      {children}
    </section>
  );
}

// button component
function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
