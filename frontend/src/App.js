import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ChatPageWrapper from "./pages/ChatPageWrapper";

function App() {
  return (
    <div className="App">
      <Route className="HomePage" path="/" component={HomePage} exact />
      <Route
        className="ChatPageWrapper"
        path="/chats"
        component={ChatPageWrapper}
      />
    </div>
  );
}

export default App;
