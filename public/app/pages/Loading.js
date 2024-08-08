import { useStyle } from "../src/Dakwa.js"

useStyle(`
      * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
      }

      .load {
            display: flex;
            justify-content: center;
            position: absolute;
            top: 50%;
            left: 50%;
            /* margin: 200px auto; */
            transform: translate(-50%, -50%);
      }

      .load div {
            width: 20px;
            height: 20px;
            background-color: royalblue;
            border-radius: 50%;
            margin: 0 5px;
            animation: loadind 0.9s infinite alternate;
      }

      .two {
            animation-delay: 0.3s !important;
      }

      .three {
            animation-delay: 0.6s !important;
      }

      @keyframes loadind {
            100% {
                  opacity: 0.2;
                  transform: translateY(-20px);
            }
      }
`)

const Loading = () => {
      return (`<div class="load">
                        <div class="one"></div>
                        <div class="two"></div>
                        <div class="three"></div>
               </div>`)

}

export default Loading