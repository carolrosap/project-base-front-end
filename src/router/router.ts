type RouteHandler = () => void;
type RouteMap = Record<string, RouteHandler>;

export class Router {
  public handleHomeRoute (): void {
   
    //const gridComponents = new GridProducts();
    //void gridComponents.render('home');
  }

  public configureRoutes (): void {
    const routes: RouteMap = {
      '/': this.handleHomeRoute
    };

    const currentUrl = window.location.pathname;
    const routeHandler = routes[currentUrl];
    if (routeHandler !== null) {
      routeHandler();
    }
  }
}


