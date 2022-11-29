import "./styles/App.scss";
import "./styles/styles.js";
import { Header } from "./components/Header";
import { AttendeeCreator } from "./components/AttendeeCreator";
import { AttendeeList } from "./components/AttendeeList";

function App() {
  return (
    <div className="app">
      <Header />
      <AttendeeCreator />
      <AttendeeList />
    </div>
  );
}

export default App;
