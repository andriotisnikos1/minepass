import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Users() {
    return (
        <>
            <div className="flex items-center justify-between p-2 space-x-2 w-full bg-gray-900 rounded-md border-2 border-gray-800">
                <MagnifyingGlassIcon className="text-gray-500" />
                <input type="text" className="flex-1 outline-none text-sm" placeholder="Search for users..." />
            </div>
            <table className="w-full rounded-md bg-gray-900">
                <thead className="border-b border-b-gray-800">
                    <tr>
                        <th className="text-start text-gray-500 px-4 py-1.5 text-sm font-[500]">Name</th>
                        <th className="text-start text-gray-500 px-4 py-1.5 text-sm font-[500]">Last Login</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center space-x-2 px-4 py-2">
                                <img src="https://avatars.githubusercontent.com/u/67287051?v=4" alt="user_avatar" className="w-6 rounded-full" />
                                <p className="text-sm">Andriotis</p>
                            </div>
                        </td>
                        <td>
                            <div className="flex items-center space-x-2 px-4 py-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <p className="text-sm">5 minutes ago</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}