import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route('user', 'routes/api/user.tsx')] satisfies RouteConfig;
