import Footer from "../ui/Footer";
import Header from "../ui/Header";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
