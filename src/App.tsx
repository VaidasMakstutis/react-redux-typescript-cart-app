import React from "react";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>This is cart app!</h2>
      </div>
    </Provider>
  );
};

export default App;
