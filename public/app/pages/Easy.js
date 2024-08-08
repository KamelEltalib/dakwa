import Footer from "../components/Footer.js";
import Header from "../components/Header.js";


const Easy = () => {

      return (` 
                  ${Header}
                  <section class="main">
                        <div class="feature m-auto mt-5 bg-body p-2 rounded-3" style="width: 300px;">
                                    <a class="text-decoration-none text-body" href="#/easy">
                                          <h3>سهولة الاستخدام</h3>
                                          <p>واجهة مستخدم بسيطة وسهلة تجعل من السهل البدء.</p>
                                    </a>
                        </div>
                        <div class="text-center mt-3">
                               <a href="#/" class="btn btn-light">العودة للصفحة الرئيسية</a>
                        </div>
                  </section>
                  
                        ${Footer}
            `)
}

export default Easy