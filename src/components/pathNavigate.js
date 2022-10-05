 export const generateLanguage = (locale, location) => {
    const ROUTE = "/:locale/:path*";
    const definePath = compile(ROUTE);
    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);

    let subPaths = null;
    if (routeComponents && routeComponents[2]) {
        subPaths = routeComponents[2].split("/");
    }

    return definePath({
        locale,
        path: subPaths
    });
};