import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout"
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";

function App()  {
  return (
    <>
      <Navbar/>
      <Layout>
        <Hero> </Hero>
        <Categories> </Categories>
      </Layout>
    </>
  );
}

export default App;