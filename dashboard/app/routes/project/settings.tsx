import { CheckCircledIcon, ClipboardIcon, DiscIcon, SymbolIcon, TrashIcon } from "@radix-ui/react-icons";

export default function ProjectSettings() {
    return (
        <div className="flex flex-col space-y-4 w-full border-t border-gray-800 pt-4">
            <h2 className="text-gray-500 text-lg text-start">Project Settings</h2>
            <div className="flex flex-col space-y-6 py-6">
                <ClientIDCredential />
                <ClientSecretCredential />
                <AuthorizedURLs />
            </div>
            <button className="flex items-center space-x-2 px-2 py-1.5 w-[max-content] bg-gray-900 rounded-md hover:bg-gray-800 hover:text-gray-300">
                <CheckCircledIcon className="text-gray-500" />
                <p className="text-xs text-gray-300">Save</p>
            </button>
            <hr className="border-gray-900" />
            <DangerZone />

        </div>
    )
}

function ClientIDCredential() {
    return (
        <div className="flex flex-col space-y-2">
            <span className="font-semibold text-gray-300">Client ID</span>
            <div className="flex items-center space-x-4">
                {/* client id */}
                <div className="flex-1 px-2 py-1 border-2 bg-gray-900 border-gray-800 rounded-md">
                    <p className="text-gray-300 text-sm">{"*".repeat(15)}</p>
                </div>
                {/* copy button */}
                <button className="flex items-center space-x-2 px-2 py-1.5 bg-gray-900 rounded-md hover:bg-gray-800 hover:text-gray-300">
                    <ClipboardIcon className="text-gray-500" />
                    <p className="text-xs text-gray-300">Copy</p>
                </button>
            </div>
        </div>
    )
}

function ClientSecretCredential() {
    return (
        <div className="flex flex-col space-y-2 text-gray-700">
            <span className="font-semibold !text-gray-300">Client Secret</span>
            <div className="flex items-center space-x-4">
                {/* secret indication */}
                <div className="flex-1 px-2 py-1 border-2 bg-gray-900 border-gray-800 rounded-md">
                    <p className="text-gray-300 text-sm">{"*".repeat(15)}</p>
                </div>
                {/* copy button */}
                <button className="flex items-center space-x-2 px-2 py-1.5 bg-gray-900 rounded-md hover:bg-gray-800 hover:text-gray-300">
                    <ClipboardIcon className="text-gray-500" />
                    <p className="text-xs text-gray-300">Copy</p>
                </button>
                {/* roatate button */}
                <button className="flex items-center space-x-2 px-2 py-1.5 bg-gray-900 rounded-md hover:bg-gray-800 hover:text-gray-300">
                    <SymbolIcon className="text-gray-500" />
                    <p className="text-xs text-gray-300">Rotate</p>
                </button>
            </div>
        </div>
    )
}

function AuthorizedURLs() {
    return (
        <div className="flex flex-col space-y-2 text-gray-700">
            <span className="font-semibold !text-gray-300">Authorized Callback URLs</span>
            <textarea name="" className="border-2 border-gray-800 bg-gray-900 p-2 outline-none !text-gray-300 rounded-md" id=""></textarea>
        </div>
    )
}

function DangerZone() {
    return (
        <>
        <h2 className="text-red-900 text-lg text-start">Danger Zone</h2>
            <div className="flex items-center text-gray-700 ">
                {/* delete the project */}
                <button className="flex items-center space-x-2 px-2 py-1.5 bg-red-900 rounded-md hover:bg-red-800 hover:text-gray-300">
                    <TrashIcon className="text-gray-300" />
                    <p className="text-xs text-gray-300">Delete Project</p>
                </button>
            </div>
        </>
    )
}