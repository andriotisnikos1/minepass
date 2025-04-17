import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/page.tsx"),
    route("project/picker", "routes/project/picker.tsx"),
    route("project/:projectID", "routes/project/layout.tsx", [
        index("routes/project/users.tsx"),
        route("settings", "routes/project/settings.tsx")
    ]),
    route("profile", "routes/profile/profile.tsx"),
] satisfies RouteConfig;
