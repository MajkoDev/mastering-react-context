import React from "react";

const InterviewQuestions = () => {
  return (
    <>
      <h4>Interview Questions.</h4>
      <ul>
        <li className="question">
          <p>
            <b>
              What is React Context, and how is it used in React applications?
            </b>
          </p>
          <p>
            React Context is a feature in React that allows data to be passed
            down through a component tree without having to pass props manually
            at every level. It enables you to create a centralized location for
            data that can be accessed by multiple components at different levels
            in the hierarchy.
          </p>
        </li>

        <li className="question">
          <p>
            <b>
              What are the benefits of using Context in React applications, and
              when should it be used?
            </b>
          </p>
          <p>
            Context can be used to manage state that needs to be shared between
            components, but is too "global" to be passed down as a prop to each
            child component. Context is especially useful when you have deeply
            nested components, where it would be cumbersome to pass props all
            the way down. Context can also simplify the process of passing
            callbacks or functions down through the component tree.
          </p>
        </li>

        <li className="question">
          <p>
            <b>
              How do you create a new Context object in React, and what are the
              parameters of the createContext method?
            </b>
          </p>
          <p>
            You can create a new Context object using the createContext method
            from the React library. The createContext method takes an optional
            default value as its parameter. The default value is used when a
            component does not have a matching Provider component in its parent
            hierarchy.
          </p>
        </li>

        <li className="question">
          <p>
            <b>
              Can multiple Context objects be used in a single React
              application, and how can they be combined?
            </b>
          </p>
          <p>
            Yes, multiple Context objects can be used in a single React
            application. They can be combined by nesting them within each other,
            so that the data from one Context can be passed down to the child
            components of another Context.
          </p>
        </li>

        <li className="question">
          <p>
            <b>
              How do you provide data to a Context object, and how is it
              accessed by components?
            </b>
          </p>
          <p>
            Data can be provided to a Context object using a Provider component.
            The Provider component accepts a value prop that contains the data
            to be shared. Components can access the data using a Consumer
            component or by using the useContext hook.
          </p>
        </li>
        <li className="question">
          <p>
            <b>
              What is the purpose of the Consumer component in Context, and how
              is it used?
            </b>
          </p>
          <p>
            The Consumer component is used to consume data that has been
            provided by a Provider component. It can be used within a function
            or class component to access the data passed down through the
            Context.
          </p>
        </li>
        <li className="question">
          <p>
            <b>
              How can you update Context data, and what are some strategies for
              avoiding performance issues when updating Context frequently?
            </b>
          </p>
          <p>
            Context data can be updated by creating a new object or value and
            passing it to the Provider component using the value prop. To avoid
            performance issues, it is important to only update the Context when
            necessary, and to use memoization or other techniques to optimize
            the rendering of components that consume the Context data.
          </p>
        </li>
        <li className="question">
          <p>
            <b>
              Can Context be used as a replacement for props, and what are some
              cases where using Context may be more appropriate?
            </b>
          </p>
          <p>
            Context can be used as a replacement for props in some cases,
            particularly when passing data down through many levels of
            components. Context may be more appropriate when the data being
            passed down is global in nature, or when the data is being shared by
            many components that are not directly related.
          </p>
        </li>
        <li className="question">
          <p>
            <b>
              What is the difference between Context and Redux, and when should
              one be used over the other?
            </b>
          </p>
          <p>
            Context and Redux are both tools for managing state in a React
            application, but they have different approaches and use cases.
            Context is built into React and is generally used for simple cases
            where data needs to be passed down through the component tree. Redux
            is a standalone library that provides a centralized store for
            managing state, and is better suited for more complex applications
            with many components and a large amount of state.
          </p>
        </li>
      </ul>
    </>
  );
};

export default InterviewQuestions;
