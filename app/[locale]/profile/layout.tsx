import { Footer, Header } from "@/components";

export default function LocaleLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <main className="overflow-hidden flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4">{children}</div>
      <Footer />
    </main>
  );
}
