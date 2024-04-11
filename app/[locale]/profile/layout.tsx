import { Footer, Header } from "@/components";
import LayoutSecond from "@/components/Details/LayoutSecond";
export default function LocaleLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
      <LayoutSecond>
        <div className="container mx-auto px-4">{children}</div>
      </LayoutSecond>
  );
}
