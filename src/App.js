//eventlistening,props,statemangement,lifecycle

export const App = ({ name, description }) => {
  return (
    <div className="main-app">
      <h1>Hello world {name}</h1>
      <h2>{description}</h2>
    </div>
  );
};
