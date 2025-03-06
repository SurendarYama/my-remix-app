import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route('users', 'routes/api/users.tsx', [
    route(":userId", "routes/api/user.tsx"),
])] satisfies RouteConfig;
