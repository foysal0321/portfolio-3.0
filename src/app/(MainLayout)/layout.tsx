import Navbar from "@/components/navbar/Navbar";
import { Animation } from "./animation/Animation";
import Footer from "@/components/footer/Footer";


export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Animation />
            <Navbar />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    )
}