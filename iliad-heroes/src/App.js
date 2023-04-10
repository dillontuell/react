import "./index.css";
import { useEffect, useState } from "react";
import achilles from "./images/achilles.jpg";
import aeneas from "./images/aeneas.jpg";
import agamemnon from "./images/agamemnon.jpg";
import ajax from "./images/ajax.jpg";
import diomedes from "./images/diomedes.jpg";
import hector from "./images/hector.jpg";
import memnon from "./images/memnon.jpg";
import menelaus from "./images/menelaus.webp";
import odysseus from "./images/odysseus.jpg";
import Paris from "./images/Paris.webp";
import penthesileia from "./images/penthesileia.jpg";
import sarpedon from "./images/sarpedon.png";

function App() {
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const cards = [
    {
      id: "1",
      image: achilles,
    },
    {
      id: "2",
      image: aeneas,
    },
    {
      id: "3",
      image: agamemnon,
    },
    {
      id: "4",
      image: ajax,
    },
    {
      id: "5",
      image: diomedes,
    },
    {
      id: "6",
      image: hector,
    },
    {
      id: "7",
      image: memnon,
    },
    {
      id: "8",
      image: menelaus,
    },
    {
      id: "9",
      image: odysseus,
    },
    {
      id: "10",
      image: Paris,
    },
    {
      id: "11",
      image: penthesileia,
    },
    {
      id: "12",
      image: sarpedon,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      console.log(index);
    }, 3000);
  }, [index]);

  return (
    <div className="App">
      <div className="carousel">
        {cards.map((item, i) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);

          let className = "card";

          if (i === index) {
            className = "card card--active";
          } else if (i === indexRight) {
            className = "card card--right";
          } else if (i === indexLeft) {
            className = "card card--left";
          } else className = "card";

          return (
            <img
              key={item.id}
              className={className}
              src={item.image}
              alt="Heroes"
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default App;
