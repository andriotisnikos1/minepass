import { createCookie } from "react-router";

const activeProject = createCookie("activeProject", {
    maxAge: 60 * 60 * 24 * 30, // 30 days
})

export default {
    activeProject
}