import { observer } from "mobx-react-lite";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import TodoStore from "./stores/TodoStore";
interface AppProps {
  todoStore: TodoStore;
}
const App: React.FC<AppProps> = ({ todoStore }) => {
  console.log(todoStore);

  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default observer(App);
