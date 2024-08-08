import NotFound from '../pages/NotFound.js';
import Loading from '../pages/Loading.js';


const reRender = new CustomEvent('render', {
      detail: { test: true }
})

export default class Bulld {
      constructor(router, root) {
            this.routers = router;
            this.root = root;
            this.popstate = this.popstate.bind(this);
            this.module = null;
            this.pages = {};
            window.addEventListener('popstate', this.popstate);
            document.addEventListener('render', this.popstate);

      }

      async popstate() {
            this.run();
      }

      async run() {
            let routeFound = false;
            for (let i = 0; i < this.routers.length; i++) {
                  try {
                        if (this.routers[i]?.path === this.uri()) {
                              if (!(this.routers[i].page in this.pages))
                                    this.root.innerHTML = Loading().trim();

                              this.pages[this.routers[i].page] = this.routers[i]?.path;
                              await this.loadModules(this.routers[i].page);
                              document.title = this.routers[i]?.prams?.title || 'undefined page';
                              this.root.innerHTML = this.module.default().trim();
                              routeFound = true;
                              break;
                        }

                  } catch (error) {

                  }
            }

            if (!routeFound)
                  this.root.innerHTML = NotFound();

            }

            uri() {
                  let uri = window.location.href;
                  let index = uri.indexOf('#');
                  uri = uri.slice((index + 1));
                  uri = uri.split('?');
                  if (uri[0] === window.location.href || uri[0] === '')
                        uri[0] = '/';
                  return uri[0];
            }

      async loadModules(name) {
                  this.module = await import(`./../pages/${name}.js`);
            }
      }

export { reRender }