export default function Footer() {
  return<>
  <footer className="footer">
    <div className="footer-inner container">
      <div className="footer-contact">
        <nav className="footer-nav">
          <ul>
            <li>
              <a
                href="tel:+"
                title="call Us"
              >call Us
              </a>
            </li>

            <li>
              <a
                href="tel:+"
                title="mobile"
              >+44 (0)10 2345 6789
              </a>
            </li>

            <li>
              <a
                href="mailto:"
                title="email"
              >email costumer care
              </a>
            </li>


          </ul>

          <ul>
            <li>
              <a
                href="/"
                title="style & fit us"
              >style & fit us</a>
            </li>

            <li>
              <a
                href=""
                title="faqs"
              >
                faqs
              </a>
            </li>

            <li>
              <a
                href="/"
                title="delivery"
              >
                delivery
              </a>
            </li>
            <li>
              <a
                href="/"
                title="exchanges & returns"
              >
                exchanges & returns
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a
                href="/"
                title="About us"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/"
                title="Careers"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/"
                title="Afiliates"
              >
                Afiliates
              </a>
            </li>
            <li>
              <a
                href="/"
                title="Advertising"
              >
                Advertising
              </a>
            </li>
          </ul>
        </nav>
      </div>


      <div className="footer-connect">
        <form className="footer-newsletter">
          <label>sign up for newsletter</label>
          <input
            type="text"
            title="Email Address"
            placeholder="Email"
            required
          ></input>

          <button
            type="submit"
            title="Submit"
          >Submit</button>
        </form>

        <section className="social-media">
          <ul>
            <li>
              <a
                href="/"
                title="Youtube"
              ><i className="fa-brands fa-youtube"></i></a>
            </li>

            <li>
              <a
                href="/"
                title="Twitter"
              ><i className="fa-brands fa-twitter"></i></a>
            </li>

            <li>
              <a
                href="/"
                title="Facebook"
              ><i className="fa-brands fa-facebook"></i></a>
            </li>

            <li>
              <a
                href="/"
                title="Instagram"
              ><i className="fa-brands fa-instagram"></i></a>
            </li>
            </ul>
        </section>
      </div>
    </div>
  </footer>
  </>
}
