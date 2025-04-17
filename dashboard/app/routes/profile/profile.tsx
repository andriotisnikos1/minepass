import { ExitIcon, TrashIcon } from "@radix-ui/react-icons"
import { Link, useLoaderData, useNavigate, type LoaderFunctionArgs } from "react-router"
import cookies from "~/server/cookies.server"
import type { Route } from "./+types/profile"

export async function loader({ request }: Route.LoaderArgs) {
    const activeProject = await cookies.activeProject.parse(request.headers.get("Cookie")) as string | null
    return {
        activeProject
    }
}

/**
 * A modified version of the top navigation bar, for the profile page.
 * @returns 
 */
function TopNav({ activeProject }: { activeProject: string | null }) {
    const nav = useNavigate()
    return (
        <div className="flex items-center justify-between p-2 bg-gray-900 rounded-md border-2 border-gray-800 w-full">
            {/* Left Navigation links */}
            <div className="flex items-center space-x-4">
                <img src="/logo.png" alt="logo" className="w-8 hover:cursor-pointer" onClick={() => nav(`/project/${activeProject ?? "picker"}`)} />
                <Link to={"/project/picker"} className="text-md text-gray-300">MinionAH</Link>
            </div>
            <div className="flex items-center space-x-4">
                {/* Link to docs and avatar */}
                <Link to={`https://docs.minepass.tech`} target="_blank" className="text-gray-300 text-sm hover:cursor-pointer">
                    Docs
                </Link>
                <img src="https://avatars.githubusercontent.com/u/67287051?v=4" alt="user_avatar" className="w-8 rounded-full hover:cursor-pointer" />
            </div>
        </div>
    )
}

export default function Profile() {
    const loaderData = useLoaderData<typeof loader>()
    return (
        <div className="w-full h-full flex flex-col items-center p-5 space-y-10">
            <div className="w-full h-full flex flex-col space-y-20 md:w-2/3 lg:1/2">
                <TopNav activeProject={loaderData.activeProject} />
                {/*profile stuff */}
                <div className="flex space-x-10">
                    <NameAndImage />
                    <div className="flex-1 flex flex-col space-y-8">
                        <Email />
                        <hr className="border-gray-900" />
                        <AccountActions />
                    </div>
                </div>
                {/* support inquiries */}
                <p className="text-gray-600">For support inquiries, contact Nikos @ <a className="!text-gray-300" href="mailto:nikos@andriotis.me?subject=MinePass Support Inquiry">nikos@andriotis.me</a></p>
            </div>
        </div>)
}

function NameAndImage() {
    return (
        <div className="flex flex-col space-y-8">
            <img src="https://avatars.githubusercontent.com/u/67287051?v=4" alt="user_picture" className="w-40 rounded-full" />
            <div className="flex flex-col space-y-2">
                <h1 className="text-xl text-gray-300">Nikos Andriotis</h1>
                <h2 className="text-sm text-gray-600">andriotisnikos1@gmail.com</h2>
            </div>
        </div>
    )
}

function Email() {
    return (
        <div className="flex flex-col space-y-4">
            <h1 className="text-lg text-gray-300">Email</h1>
            <div className="w-full p-2 border-2 rounded-md border-gray-800 bg-gray-900 text-sm">andriotisnikos1@gmail.com</div>
        </div>
    )
}

function AccountActions() {
    return (
        <div className="flex flex-col space-y-4">
            <h1 className="text-lg text-gray-300">Account Actions</h1>
            <div className="flex items-center space-x-4">
                <button className="hover:cursor-pointer w-[max-content] px-2 py-1.5 rounded-md border-2 border-gray-800 bg-gray-900 text-sm hover:bg-gray-800 flex items-center space-x-2">
                    <ExitIcon className="text-gray-500" />
                    <p className="text-xs">Logout</p>
                </button>
                <button className="hover:cursor-pointer w-[max-content] px-2 py-1.5 rounded-md border-2 border-red-800 bg-red-900 text-sm hover:bg-red-800 flex items-center space-x-2">
                    <TrashIcon className="text-red-500" />
                    <p className="text-xs">Delete Account</p>
                </button>
            </div>
        </div>
    )
}