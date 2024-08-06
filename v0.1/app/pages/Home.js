import Header from "../components/Header.js"
import Features from '../components/Features.js'

const Home = () => {

      return (`
            <section class="main">
                  ${Header}
                  ${Features}
            </section>
            <footer>
                  <p>&copy; 2024 Dakwa - Kamel Eltalib . جميع الحقوق محفوظة.</p>
            </footer>`)

}

export default Home