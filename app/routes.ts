import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx",[
        index("routes/home.tsx")
    ]),
    route('users', 'routes/api/users.tsx', [
        route(":userId", "routes/api/user.tsx"),
    ]),
    route("post/:postId", "routes/post.tsx"),
] satisfies RouteConfig;
