import { useDom } from '../src/Dakwa.js';

useDom(() => {
      document.querySelector('#copy').innerHTML += new Date().getFullYear();
})


const Footer = `
            <footer class="p-3 text-center text-white" style="background-color: #333;">
                  <p class="mb-2">
                        <span class="d-block" id="copy">جميع الحقوق محفوظة &copy; </span>
                        <span class="d-block">Dakwa - KAMEL ELTALIB</span>
                  </p>
                  <ul class="list-unstyled d-flex justify-content-center mb-0">
                        <li class="mx-2"><a class="text-decoration-none text-white" href="#">تواصل معنا</a></li>
                        <li class="mx-2"><a class="text-decoration-none text-white" href="#">معلومات المطور</a></li>
                        <li class="mx-2"><a class="text-decoration-none text-white" href="#">الصفحة الرئيسية</a></li>
                        <li class="mx-2"><a class="text-decoration-none text-white" href="#">تحميل سريع</a></li>
                  </ul>
            </footer>
`

export default Footer