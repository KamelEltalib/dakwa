import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

const High = () => {

      return (`
                  ${Header}
                  <section class="main">
                        <div class="feature m-auto mt-4 bg-body p-2 rounded-3" style="width: 300px;">
                              <a class="text-decoration-none text-body" href="#/high">
                                    <h3>أداء عالي</h3>
                                    <p>تطبيقات سريعة وفعالة تعمل بسلاسة و بسهولة مع ضمان الاستغرار.</p>
                              </a>
                       </div>

                        
                       <div class="text-center mt-3">
                              <a href="#/" class="btn btn-light">العودة للصفحة الرئيسية</a>
                       </div>
                  </section>
                       ${Footer}
                  
            `)
}

export default High