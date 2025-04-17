import { BarChartIcon, ClockIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";
import { Link, Outlet, useParams } from "react-router";

/**
 * The layout for the project routes.
 * This includes the top navigation, the statistics, and the secondary navigation.
 * @returns {JSX.Element}
 */
export default function ProjectLayout() {
    return <div className="flex flex-col p-5 items-center w-full h-full">
        <div className="w-full h-full flex flex-col space-y-20 md:w-5/6">
            <TopNav />
            {/* Statistics */}
            <div className="sm:flex items-center w-full justify-evenly hidden">
                <Statistic title="Total Users" value="200" Icon={PersonIcon} />
                <Statistic title="Authentications (30d)" value="2000" Icon={BarChartIcon} />
                <Statistic title="Last Login" value="5 minutes ago" Icon={ClockIcon} />
            </div>
            {/*Secondary nav and the outlet, for filling the children routes */}
            <div className="flex items-center flex-col space-y-4 w-full">
                <SecondaryNav />
                <Outlet />
            </div>
        </div>
    </div>
}

/**
 * The secondary navigation for the project routes, under the general statistics
 * @returns {JSX.Element}
 */
function SecondaryNav() {
    const projectID = useParams().projectID as string;
    return (
        <div className="flex items-center justify-between w-full">
            {/* Left Navigation links */}
            <div className="flex items-center space-x-4">
                <SecondaryNavButton title="User List" Icon={PersonIcon} destination={`/project/${projectID}`} />
            </div>
            {/* Right Navigation links */}
            <SecondaryNavButton title="Settings" Icon={GearIcon} destination="settings" />
        </div>
    )
}

function SecondaryNavButton({
    title,
    Icon,
    destination
}: {
    title: string;
    Icon: typeof BarChartIcon;
    destination: string;
}) {
    return (
        <Link to={destination} className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-800 text-gray-500 hover:text-gray-300 rounded-md">
            <Icon className="text-gray-500" />
            <p className="text-xs">{title}</p>
        </Link>
    )
}

/**
 * The top navigation for the project routes, including the logo and the user avatar
 * @returns {JSX.Element}
 */
function TopNav() {
    return (
        <div className="flex items-center justify-between p-2 bg-gray-900 rounded-md border-2 border-gray-800">
            {/* Logo and title */}
            <div className="flex items-center space-x-4">
                <img src="/logo.png" alt="logo" className="w-8" />
                <Link to={"/project/picker"} className="text-md text-gray-300">MinionAH</Link>
            </div>
            {/* Navigation links and avatar */}
            <div className="flex items-center space-x-4">
                <Link to={`https://docs.minepass.tech`} target="_blank" className="text-gray-300 text-sm hover:cursor-pointer">
                    Docs
                </Link>
                <Link to={"/profile"}>
                <img src="https://avatars.githubusercontent.com/u/67287051?v=4" alt="user_avatar" className="w-8 rounded-full hover:cursor-pointer" /></Link>
            </div>
        </div>
    )
}

/**
 * One of the elements in the statistics section of the project layout (abstraction)
 * @returns 
 */
function Statistic({
    title,
    value,
    Icon
}: {
    title: string;
    value: string;
    Icon: typeof BarChartIcon;
}) {
    return (
        <div className="flex flex-col space-y-5 w-1/5 min-w-[200px] bg-gray-900 p-4 rounded-md border-2 border-gray-800">
            {/* Title */}
            <div className="flex items-center space-x-2">
                <Icon className="text-gray-500" />
                <p className="text-xs">{title}</p>
            </div>
            {/* Value */}
            <p className="text-xl">{value}</p>
        </div>
    )
}