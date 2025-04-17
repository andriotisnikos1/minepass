import { PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import type { Route } from "./+types/picker";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "MinePass Dashboard" },
    // { name: "description", content: "Welcome to React Router!" },
  ];
}

/**
 * The project picker route, for selecting a project to work on.
 * @returns {JSX.Element}
 */
export default function ProjectPicker() {
  return (
    <div className="flex p-5 flex-col space-y-10 h-full w-full items-center justify-center">
      <img src="/logo.png" alt="minepass_logo" className="w-16" />
      <Title />
      <div className="flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/3 space-y-4">
        <div className="flex items-center justify-between border-2 rounded-md border-gray-800 bg-gray-900 text-gray-400 p-2">
          <span className="text-sm">Project Name</span>
          <span className="text-sm">Users</span>
        </div>
        <ProjectList />
        <NewProjectButton />
      </div>
    </div>
  )
}

function Title() {
  return (
    <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-center text-4xl">Welcome to MinePass!</h1>
        <span className="text-center">Select a project to get started.</span>
      </div>
  )
}

function NewProjectButton() {
  return <div className="flex items-center space-x-2 justify-center hover:bg-gray-800 hover:text-gray-200 text-sm p-2 rounded-md bg-gray-900 text-gray-400 hover:cursor-pointer">
  <PlusIcon className="w-4 h-4" />
  <span>Create New Project</span>
</div>
}

function ProjectList() {
  return (
    <div className="flex flex-col space-y-2 max-h-[200px] overflow-auto">
            {/*Links to project. indicates name and amount of users */}
            <Link to={"/project/projectID"} className="flex items-center justify-between text-gray-600 text-sm p-2 rounded-md hover:bg-gray-900 hover:text-gray-400 hover:cursor-pointer">
              <span>Project 1</span>
              <div className="flex items-center space-x-2">
                <PersonIcon className="w-4 h-4" />
                <span>10</span>
              </div>
            </Link>
        </div>
  )
}