import Link from "next/link"

export default function layout({ children }: { children: any }) {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content justify-center">
                    <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden">Open drawer</label>
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/dashboard'>Create New Blog</Link>
                        </li>
                        <li>
                            <Link href='/dashboard/projects'>Create Project</Link>
                        </li>
                        <li>
                            <Link href='/dashboard/skills'>Add Skill</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}