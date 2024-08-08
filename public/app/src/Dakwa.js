import { reRender } from './Bulld.js'

function useDom(callback) {
      setTimeout(() => {
            callback()
      }, 1)
}

function useState(value) {
      let container = { value: value };
      function setValue(newValue) {
            container.value = newValue;
            document.dispatchEvent(reRender)
      }

      return [container, setValue]
}

function useStyle(cssStyle) {
      let style;
      useDom(() => {
            if (document.querySelector("style")) {
                  style = document.querySelector("style");
            } else {
                  style = document.createElement("style");
            }

            style.innerHTML += cssStyle.replace(/\s+/g,'');
            document.head.appendChild(style);
      })

}


export { useDom, useState, useStyle }