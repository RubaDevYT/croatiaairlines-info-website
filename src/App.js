import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div class="app">
      <div class="header-container">
        <Header />
      </div>
      <div class="site-app">
        <div class="inside-site">
          <div class="img-container">
            <img
              src="/images/croairplane.jpeg"
              width="500px"
              alt="croatia airlines plane"
            ></img>
          </div>
          <h2>Croatia Airlines</h2>
          <p>
            Croatia Airlines Ltd. is the flag carrier of <span>Croatia</span>.
            Its headquarters are in Buzin near Zagreb, the capital, and operates
            domestic and international services mainly to European destinations.
            Its main hub is <span>Zagreb International Airport </span> with
            focus cities being Dubrovnik, Split, and Zadar.{" "}
            <span>
              Since November 2004, the airline has been a member of Star
              Alliance
            </span>
            .
          </p>
          <h2>Fleet</h2>
          <p>Croatia Airlines currently has 11 planes in its fleet.</p>
          <ul>
            <li>
              <strong>Airbus A220</strong>: 2
            </li>
            <li>
              <strong>Airbus A319</strong>: 3
            </li>
            <li>
              <strong>Airbus A320</strong>: 2
            </li>
            <li>
              <strong>De Havilland Canada DHC-8 Dash 8</strong>: 4
            </li>
          </ul>

          <h2>History</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
