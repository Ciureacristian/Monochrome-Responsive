import Footer from '@/components/common/Footer';
import BagHelp from '../bag/bagHelp';
import Account from './account';
import PaymentSign from './payment';

export default function Bag() {
  return (
    <>
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
                  <a href="/" title="Add to cart">
                    <i className="fa-sharp fa-solid fa-bag-shopping"></i>
                  </a>
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

      <main className="content container">
        <section>
          <header className="bag-header">
            <h1>Sign in</h1>
          </header>

          <nav className="payment-sing">
            <PaymentSign></PaymentSign>
          </nav>
          <nav className="account-sign">
            <Account></Account>
          </nav>
        </section>
        <section className="help-bag container">
          <BagHelp></BagHelp>
        </section>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
