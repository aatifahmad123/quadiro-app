import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

export default function Layout({ children, title = 'Quadiro', description = 'Full Stack MERN Project', keywords = 'mern,react,node,tailwind,express,mongodb', author = 'Aatif Ahmad' }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>
      <Header></Header>
      <main style={{ minHeight: "85vh" }}>
        {children}
        </main>
      <Footer></Footer>
    </div>
  );
}

