import "./App.css";

//? COMPONENTS

import InterviewQuestions from "./InterviewQuestions";

import CounterProps from "../components/CounterProps";
import CounterContext from "../components/CounterContext";
import CounterContextReducer from "../components/CounterContextReducer";

import UpdateValue from "../components/UpdateValue";
import UpdateObject from "../components/UpdateObject";
import MultipleContext from "../components/MultipleContext";

import CrudApp from "../context/CrudApp";

function App() {
  return (
    <div className="App">
      <h4>
        Understanding Managing State in React application with Props and
        Context.
      </h4>

         <InterviewQuestions />
         <div className="counters">
          <CounterProps />
          <CounterContext />
          <CounterContextReducer />
         </div>

         <div className="context">
           <UpdateValue />
           <UpdateObject />
           <MultipleContext />
        </div>
        

      <CrudApp />
    </div>
  );
}

export default App;
