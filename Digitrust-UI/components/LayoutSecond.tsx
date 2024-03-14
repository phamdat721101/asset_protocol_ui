import Footer from "./Footer";
import HeaderSecond from "./HeaderSecond";

export default function LayoutSecond({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <HeaderSecond></HeaderSecond>
            {children}
            <Footer></Footer>
        </div>
    );
}
