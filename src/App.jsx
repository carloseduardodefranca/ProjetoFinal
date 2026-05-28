import Header from './componentes/Header/Header.jsx';
import Hero from './componentes/Hero/Hero.jsx';         
import ProductCard from './componentes/ProductCards/ProductCard.jsx';
import Footer from './componentes/Footer/Footer.jsx';

function App() {
  const productsData = [
    {
      id: 1,
      title: "React de A a Z",
      tag: "Curso Online",
      description: "Domine a biblioteca mais popular do mercado, do zero ao profissional.",
      price: 199.90,
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Guia de CSS Moderno",
      tag: "Ebook",
      description: "Flexbox, Grid, Animações e as melhores práticas para layouts incríveis.",
      price: 49.90,
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Node.js Escalável",
      tag: "Curso Online",
      description: "Construa APIs robustas e de alta performance com Node.js e TypeScript.",
      price: 249.90,
      imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "UI/UX para Desenvolvedores",
      tag: "Ebook",
      description: "Princípios de design essenciais para criar interfaces bonitas e intuitivas.",
      price: 79.90,
      imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <>

      <Header />
      
      <main className="container">
    
        <Hero 
          titulo="Nova Coleção Alpha" 
          subtitulo="Os melhores ebooks e cursos te esperam." 
        />
        <section className="product-grid">
          {productsData.map((product) => (
            <ProductCard 
              key={product.id} 
              title={product.title}
              tag={product.tag}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </section>
      </main>
      <Footer companyName="AlphaTech" year={2024} />
    </>
  );
}
export default App;