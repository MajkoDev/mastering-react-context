import { createContext, useContext, useState } from "react";

// create a context
const ThemeContext = createContext(null);

// button component
const ButtonSign = () => {
  return <button>Sign up</button>;
};

// panel component:
    // passing 'title' as props
    // passing 'theme' via context
    // create dynamic class with theme value
const Panel = ({ title }) => {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h2>{title}</h2>
      <ButtonSign />
    </section>
  );
};

// set initial theme state
// providing context
// event handler of theme state with checkbox input
const UpdateValue = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="container">
        <Panel title="Update a Value" />
      </div>

      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        USE DARK MODE
      </label>
    </ThemeContext.Provider>
  );
};

export default UpdateValue;
