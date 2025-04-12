import { BarChartIcon, ClockIcon, GearIcon, LockClosedIcon, MagnifyingGlassIcon, PersonIcon } from "@radix-ui/react-icons";
import { Outlet } from "react-router";

export default function ProjectLayout() {
    return <div className="flex flex-col p-5 items-center w-full h-full">
        <div className="w-full h-full flex flex-col space-y-20 md:w-5/6">
            <div className="flex items-center justify-between p-2 bg-gray-900 rounded-md border-2 border-gray-800">
                <div className="flex items-center space-x-4">
                    <img src="/logo.png" alt="logo" className="w-8" />
                    <h1 className="text-md text-gray-300">MinionAH</h1>
                </div>
                <img src="https://avatars.githubusercontent.com/u/67287051?v=4" alt="user_avatar" className="w-8 rounded-full" />
            </div>
            <div className="sm:flex items-center w-full justify-evenly hidden">
                <div className="flex flex-col space-y-5 w-1/5 min-w-[200px] bg-gray-900 p-4 rounded-md border-2 border-gray-800">
                    <div className="flex items-center space-x-2">
                        <PersonIcon className="text-gray-500" />
                        <p className="text-xs">Total Users</p>
                    </div>
                    <p className="text-xl">200</p>
                </div>
                <div className="flex flex-col space-y-5 w-1/5 min-w-[200px] bg-gray-900 p-4 rounded-md border-2 border-gray-800">
                    <div className="flex items-center space-x-2">
                        <LockClosedIcon className="text-gray-500" />
                        <p className="text-xs">Authentications (30d)</p>
                    </div>
                    <p className="text-xl">20</p>
                </div>
                <div className="flex flex-col space-y-5 w-1/5 min-w-[200px] bg-gray-900 p-4 rounded-md border-2 border-gray-800">
                    <div className="flex items-center space-x-2">
                        <ClockIcon className="text-gray-500" />
                        <p className="text-xs">Last Login</p>
                    </div>
                    <p className="text-xl">5 minutes ago</p>
                </div>
            </div>
            <div className="flex items-center flex-col space-y-4 w-full">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-800 text-gray-500 hover:text-gray-300 rounded-md">
                            <PersonIcon className="text-gray-500" />
                            <p className="text-xs">User List</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-800 text-gray-500 hover:text-gray-300 rounded-md">
                        <GearIcon className="text-gray-500" />
                        <p className="text-xs">Settings</p>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    </div>
}