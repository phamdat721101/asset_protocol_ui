
export default function LocaleLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
      <main className="overflow-hidden flex flex-col min-h-screen">
        <div className="container mx-auto px-4">{children}</div>
      </main>
  );
}
