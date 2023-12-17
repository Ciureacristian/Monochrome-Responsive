import Image from 'next/image';
import time from './images/ea_time000a.png';

export default function Bag() {
  return (
    <>
      <header className="header-men">
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
      <section className="full-screen">
        <Image
          src={time}
          alt="Viewed-End"
          title="Monochrome End"
          className="img-end"
        ></Image>

        <div className="content-end">
          <h1 className="end-application">Your application is submitted.</h1>
          <p className="end-p">
            One of our consultants will get back to you with all the details of
            your request. It usually takes us 1 working day to get in touch with
            you.
          </p>
        </div>
      </section>
    </>
  );
}
