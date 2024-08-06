import NotFound from './../pages/NotFound.js'

export default class Bulld {

      constructor(router, root) {
            this.routers = router;
            this.root = root;
            this.popstate = this.popstate.bind(this);
            this.module = null;
            window.addEventListener('popstate', this.popstate);
      }

      async popstate() {
            let routeFound = false;
            for (let i = 0; i < this.routers.length; i++) {
                  if (this.routers[i].path == this.uri()) {
                        await this.loadModules(this.routers[i].page);
                        document.title = this.routers[i]?.prams?.title || 'page';
                        this.root.innerHTML = this.module.default();
                        routeFound = true;
                        break;
                  }
            }
            if (!routeFound) {
                  this.root.innerHTML = NotFound();
            }
      }

      async run() {
            let routeFound = false;
            for (let i = 0; i < this.routers.length; i++) {
                  if (this.routers[i].path == this.uri()) {
                        await this.loadModules(this.routers[i].page);
                        document.title = this.routers[i]?.prams?.title || 'page';
                        this.root.innerHTML = this.module.default();
                        routeFound = true;
                        break;
                  }
            }
            if (!routeFound) {
                  this.root.innerHTML = NotFound();
            }
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