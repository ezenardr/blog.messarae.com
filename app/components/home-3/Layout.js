import Footer from "@/components/home-3/Footer";
import Welcome from "@/components/Welcome";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen ">
        <Welcome/>

      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
