import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// bootstrap css link

import AppHeader from "./components/header";
// import from components  header.js fill
import AppCard from "./components/card";
// import from components  card.js fill

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
        {/* put the function name to show in locallhost navbar */}
      </header>

      <main>
        <div className="cards-Containir">
          <AppCard />
          <AppCard />
          <AppCard />
          {/* put the function name to show in locallhost card +3 */}
        </div>
      </main>
    </div>
  );
}

export default App;
