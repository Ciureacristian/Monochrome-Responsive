export default function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="footer-inner mt-5 container">
          <section class="footer-connect my-5 py-5 py-lg-1">
            <div class="footer-connect-inner">
              <form class="footer-newsletter">
                <header class="footer-newsletter-header d-block d-lg-none">
                  <h1 class="mb-3">Let &#x27;s connect!</h1>
                  <p>Be the first to receive exclusives offers</p>
                </header>
                <div class="newsletter">
                  <label for="email">Sign up for our newsletter</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    required=""
                  />
                </div>
                <div class="terms">
                  <input type="checkbox" name="terms" id="terms" required="" />
                  <label
                    for="terms"
                    title="I agree with Privacy Policy and i want to receive emails from Monochrome"
                  >
                    I agree with
                    <a
                      title="Privacy Policy"
                      class="text-decoration-underline mx-1"
                      href="/"
                    >
                      Privacy Policy
                    </a>
                    and i want to receive emails from Monochrome
                  </label>
                </div>
                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  title="Sign up for our newsletter"
                  class="button-small"
                >
                  Submit
                </button>
              </form>
              <section class="footer-social">
                <header class="footer-social-header d-black d-lg-none">
                  <h1>We are highly likeable</h1>
                </header>
                <ul>
                  <li>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Monochrome Youtube channel"
                    >
                      <i class="fa-brands fa-youtube-square"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Monochrome Twitter account"
                    >
                      <i class="fa-brands fa-twitter-square"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Monochrome Facebook account"
                    >
                      <i class="fa-brands fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Monochrome Instagram account"
                    >
                      <i class="fa-brands fa-instagram-square"></i>
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </section>
          <section class="footer-nav my-5 py-5 py-lg-1">
            <div class="footer-nav-inner">
              <header class="footer-nav-header d-block d-lg-none">
                <h1>How can we help?</h1>
              </header>
              <div class="nav">
                <nav>
                  <ul>
                    <li>
                      <a title="About us" href="/">
                        About us
                      </a>
                    </li>
                    <li>
                      <a title="Careers" href="/">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a title="Affiliates" href="/">
                        Affiliates
                      </a>
                    </li>
                    <li>
                      <a title="Advertising" href="/">
                        Advertising
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav>
                  <ul>
                    <li>
                      <a title="Style &amp; fit advice" href="/style">
                        Style &amp;fit advice
                      </a>
                    </li>
                    <li>
                      <a title="Faqs" href="/">
                        Faqs
                      </a>
                    </li>
                    <li>
                      <a title="Delivery" href="/">
                        Delivery
                      </a>
                    </li>
                    <li>
                      <a title="Exchanges &amp; returns" href="/">
                        Exchanges &amp;returns
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="terms d-block d-lg-none">
                <ul>
                  <li>
                    <a title="terms &amp; conditions" href="/">
                      terms &amp;conditions
                    </a>
                  </li>
                  <li>
                    <a title="privacy &amp; cookies" href="/">
                      privacy &amp;cookies
                    </a>
                  </li>
                </ul>
              </div>
              <section class="footer-contact d-none d-lg-block">
                <ul>
                  <li>
                    <a href="tel:+4401023456789" title="Call us">
                      Call us<span>+44 (0)10 2345 6789</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:office@monochrome.com"
                      title="Email customer care"
                    >
                      Email customer care
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
