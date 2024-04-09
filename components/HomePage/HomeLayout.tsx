import Header from "./Layout/HomeHeader";
import Footer from "./Layout/HomeFooter";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
