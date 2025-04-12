import { redirect } from "react-router";
import type { Route } from "./+types/page";

export async function loader({ params }: Route.LoaderArgs) {
    return redirect("/project/picker");
}

export default function Home() {
  return null
}