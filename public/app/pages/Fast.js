import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

const Fast = () => {

      return (`
                  ${Header}
                  <section class="main">
                        
                        <div class="feature m-auto mt-4 bg-body p-2 rounded-3" style="width: 300px;">
                                    <a class="text-decoration-none text-body" href="#/fast">
                                          <h3>تحديث مستمر</h3>
                                          <p>يتم تحديث النظام باستمرار لضمان اغلاق الثغرات و وقف الاخطأ الشائعة</p>
                                    </a>
                        </div>

                        <div class="text-center mt-3">
                               <a href="#/" class="btn btn-light">العودة للصفحة الرئيسية</a>
                        </div>
                  </section>

                        ${Footer}
            `)
}
export default Fast