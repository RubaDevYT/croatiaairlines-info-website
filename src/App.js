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
          <div class="history-container">
            <h2>History</h2>
            <p>
              The airline was established in <span>June1991</span> with no
              planes and already with poor economic prospects. Later in 1991,
              Croatia Airlines <span>signed an agreement</span> with Adria
              Airways which allowed it to lease a McDonnell Douglas MD-82 to
              commence domestic jet services between Zagreb and Split.{" "}
              <span>
                Croatia Airlines acquired three Boeing 737s from Lufthansa and
                became a member of the International Air Transport Association
                (IATA)
              </span>
              . As the flag carrier of newly independent Croatia, the airline
              launched its first international service on 5 April 1992, from
              Zagreb to Frankfurt.In 1993, two new ATR 42s and two more 737s
              joined the fleet and representative offices were opened in several
              European cities and the company bought the travel agency Obzor to
              organize travel packages for groups and individuals. By 1994,
              <span>Croatia Airlines had welcomed its millionth passenger</span>
              . Later that year, Pope John Paul II flew the airline on a trip to
              Croatia.In 1995, another ATR 42 was welcomed, as was the two
              millionth passenger. In 1996, Croatia Airlines became the first
              airline to fly to Sarajevo after the Bosnian War. In 1997,{" "}
              <span>the airline's first Airbus A320</span> arrived and was named
              Rijeka. In 1998, another first plane of a new type arrived when
              the airline's first Airbus A319 joined the fleet. This airplane
              was named Zadar. In the same year, Croatia Airlines became a
              member of the Association of European Airlines (AEA). By 1999,{" "}
              <span>two more Airbus jets had arrived and Croatia Airlines</span>{" "}
              started selling the Boeing part of their fleet. The airline flew
              its five millionth passenger.
            </p>
          </div>
          <div class="corporate-container">
            <h2>Corporate affairs</h2>
            <p>
              Croatia Airlines is a joint-stock company. Its share capital is
              divided into 92.388 million ordinary shares (as of 2023):
            </p>
            <ul>
              <li>
                <p>
                  <strong>Republic of Croatia</strong> owns{" "}
                  <span>91,610,821</span> shares which is equal to{" "}
                  <span>99.16%</span>.
                </p>
              </li>
              <li>
                <p>
                  <strong>Zagreb Airport Ltd.</strong> owns <span>477,121</span>{" "}
                  shares which is equal to <span>0.52%</span>.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Hrvatska poštanska banka for the Republic of Croatia
                  </strong>{" "}
                  owns <span>173,768</span> shares which is equal to{" "}
                  <span>0.19%</span>.
                </p>
              </li>
              <li>
                <p>
                  <strong>JANAF</strong> owns <span>22,000</span> shares which
                  is equal to <span>0.02%</span>.
                </p>
              </li>
              <li>
                <p>
                  <strong>Others</strong> own <span>104,243</span> shares which
                  is equal to <span>0.11%</span>.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
