import BlogList from "./Components/BlogList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default async function Home() {
  return (
    <>
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}
