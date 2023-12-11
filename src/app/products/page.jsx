import Footer from '@/components/common/Footer';
import CatalogMen from '../men/CatalogMen';
import ProductPage from './productsPage';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home">
      <header className="header-men">
        <div class="title-primary">MONOCHROME</div>
        <section className="header-secondary-men">
          <div className="header-secondary-men container">
            <section className="header-connect">
              <ul>
                <li>
                  <a href="/" title="Youtube">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a href="/" title="Twitter">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="/" title="Facebook">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="/" title="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="+44 (0)10 2345 6789"
                    title="CALL US"
                    className="header-connect-phone"
                  >
                    CALL US +44 (0)10 2345 6789
                  </a>
                </li>
              </ul>
            </section>

            <section class="header-controls">
              <ul>
                <li class="header-account">
                  <form>
                    <input
                      type="search"
                      name="search-bar"
                      className="search-input"
                      id="search-bar"
                      placeholder="Search"
                      required
                    ></input>
                    <button type="submit">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </li>

                <li>
                  <a href="/" title="User">
                    <i className="fa-regular fa-user"></i>
                  </a>
                </li>

                <li>
                  <a href="/" title="Add to favorite">
                    <i className="fa-regular fa-heart"></i>
                  </a>
                </li>

                <li>
                  <Link href="/bag" title="Bag">
                    <i className="fa-sharp fa-solid fa-bag-shopping"></i>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </section>

        <div className="header-primary">
          <nav className="header-primary-inner container">
            <ul>
              <li>
                <a href="/" title="New arrivals">
                  New arrivals
                </a>
              </li>

              <li>
                <a href="/" title="Brand">
                  Brands
                </a>
              </li>

              <li>
                <a
                  href="http://127.0.0.1:5501/Monochrome%20mobile/men's.html"
                  title="Men's"
                  class="primary-class"
                >
                  Mens
                </a>
              </li>

              <li>
                <a href="/" title="Girl's">
                  Girls
                </a>
              </li>

              <li>
                <a href="/" title="Accesories">
                  Accesories
                </a>
              </li>

              <li>
                <a href="/" title="Lookbook">
                  Lookbook
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="catalog-product-inner container">
        <ProductPage></ProductPage>
      </main>

      <div className="content-p my-3 my-lg-4 container ">
        <h1>You may also like</h1>
        <CatalogMen></CatalogMen>
      </div>

      <div className="content-p my-3 my-lg-4 container">
        <h1>Recently view</h1>
        <CatalogMen></CatalogMen>
      </div>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
