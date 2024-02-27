import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout"
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App()  {
  return (
    <>
      <Navbar/>
      <Layout>
        <Hero> </Hero>
        <Categories/> 
        <Products/>
      </Layout>
      <Footer/>
    </>
  );
}

export default App;