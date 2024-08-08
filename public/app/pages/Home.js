import Hero from "../components/Hero.js";
import Features from '../components/Features.js';
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

const Home = () => {

      return (`
            <section class="main">
                  ${Header}
                  ${Hero}
                  ${Features}
            </section>
                  ${Footer}
            `)

}

export default Home