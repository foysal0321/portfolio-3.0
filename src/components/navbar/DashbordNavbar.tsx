import Link from "next/link";

export default function DashbordNavbar() {
  return (
    <div>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='dashboard'>Create New Blog</Link>
                        </li>
                        <li>
                            <Link href='dashboard/projects'>Create Project</Link>
                        </li>
                    </ul>
    </div>
  )
}
