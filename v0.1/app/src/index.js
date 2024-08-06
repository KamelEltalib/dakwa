import Bulld from './Bulld.js';

const elementRoot = document.querySelector('#app')

new Bulld([
      {
            path: '/',
            page: 'Home',
            prams: { title: 'home page' }
      },
      {
            path: '/easy',
            page: 'Easy',
            prams: { title: 'Feature Easy' }
      },
      {
            path: '/high',
            page: 'High',
            prams: { title: 'Feature High' }
      },
      {
            path: '/fast',
            page: 'Fast',
            prams: { title: 'Feature Fast' }
      },
      {
            path: '/test',
            page: 'Test',
            prams: { title: 'Feature Fast' }
      },
], elementRoot).run()
