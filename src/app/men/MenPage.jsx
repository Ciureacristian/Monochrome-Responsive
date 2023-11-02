import Link from "next/link"
import ProductsDescription from "../products/ProductsDescription";
export default function MenPage () {
  return<>
  <main className="content">
    <header className="home-catalog-preview container">
      <section className="home-catalog-preview-tile">
        <span>Mens</span>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
          will give you a complete account of the.</p>
      </section>

      <section className="home-catalog-preview-btn">
        <header className="button-ctas-men">
          <ul className="product-tile">
            <footer className="catalog-ctas-men">
            <Link href="/products" title="Product">BESTSELLER</Link>
            </footer>
          </ul>
        </header>

        <header className="button-ctas">
          <ul className="product-tile">
            <footer className="catalog-ctas-white">
              <a href="">$ HIGH TO LOW</a>
            </footer>
          </ul>
        </header>

        <header className="button-ctas-men">
          <ul className="product-tile">
            <footer className="catalog-ctas-men">
              <a href="">$ LOW TO HIGH</a>
            </footer>
          </ul>
        </header>

        <header className="button-ctas">
          <ul className="product-tile">
            <footer className="catalog-ctas-white">
              <a href="">NEW IN</a>
            </footer>
          </ul>
        </header>

        <header className="button-ctas">
          <ul className="product-tile">
            <footer className="catalog-ctas-white">
              <a href="">WHITE </a>
            </footer>
          </ul>
        </header>

        <header className="button-ctas">
          <ul className="product-tile">
            <footer className="catalog-ctas-white">
              <a href="">BLACK</a>
            </footer>
          </ul>
        </header>
      </section>
    </header>
  </main>
  </>
}
