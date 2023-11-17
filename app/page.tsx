import { Header, Footer, MappleAssetBox } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden flex flex-col min-h-screen">
      <Header />
      <div className="mb-auto">
        <MappleAssetBox />
      </div>
      <Footer />
    </main>
  );
}
