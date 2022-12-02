import "./styles/App.scss";
import "./styles/styles.js";
// import { Dashboard } from "./components/Dashboard";
import { LoginScreen } from "./components/LoginScreen";

function App() {
  return (
    <div className="app">
      <LoginScreen />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
