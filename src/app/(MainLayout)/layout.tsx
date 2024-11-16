import Navbar from "@/components/navbar/Navbar";
import { Animation } from "../animation/Animation";


export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Animation />
            <Navbar />
            <div className="min-h-screen">
                {children}
            </div>
        </div>
    )
}