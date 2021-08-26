import Card from "elements/Card";
import Circle from "elements/Circle";
import Fade from "react-reveal/Fade";

const { default: Attribution } = require("elements/Attribution")

const Home = () => {
    return (
      <section className="main">
        <Circle />
        <Fade bottom>
          <Card />
        </Fade>
        <Attribution />
      </section>
    );
}

export default Home;
