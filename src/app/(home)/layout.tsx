import Footer from "../ui/Footer";
import Header from "../ui/Header";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
