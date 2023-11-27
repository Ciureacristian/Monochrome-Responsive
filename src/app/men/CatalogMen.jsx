import Image from 'next/image';
import product from './../../assets/products/recently_viewed_thumbnail_2-2.png';
import product2 from './../../assets/products/recently_viewed_thumbnail_2-1.png';
import product3 from './../../assets/products/recently_viewed_thumbnail_2-5.png';
import product4 from './../../assets/products/recently_viewed_thumbnail_2-4.png';

export default function CatalogMen() {
  return (
    <>
      <section className="home-catalog-preview container">
        <ul className="product-tiles">
          <li>
            <article className="product-tile">
              <header className="product-tile-header">
                <picture className="product-tile-images">
                  <a href="product.html" title="Monochrome">
                    <Image src={product3} alt="Viewd-Thumbnail3"></Image>
                  </a>
                </picture>
                <span className="heart-btn">
                  <i className="fa-regular fa-heart"></i>
                </span>
                <h1 className="product-tile-title">
                  <a href="" title="Monochrome">
                    <span>Monochrome</span>
                  </a>
                </h1>
              </header>

              <section className="product-tile-pricing">
                <span className="product-price">
                  $<span>425</span>
                </span>
              </section>
            </article>
          </li>

          <li>
            <article className="product-tile">
              <header className="product-tile-header">
                <picture className="product-tile-images">
                  <a href="/" title="Monochrome">
                    <Image src={product2} alt="View-Thumbnail2"></Image>
                  </a>
                </picture>
                <span className="heart-btn">
                  <i className="fa-regular fa-heart"></i>
                </span>
                <h1 className="product-tile-title">
                  <a href="" title="Monochrome">
                    <span>Monochrome</span>
                  </a>
                </h1>
              </header>

              <section className="product-tile-pricing">
                <span className="product-price">
                  $<span>425</span>
                </span>
              </section>
            </article>
          </li>

          <li>
            <article className="product-tile">
              <header className="product-tile-header">
                <picture className="product-tile-images">
                  <a href="/" title="Monochrome">
                    <Image src={product} alt="Viewd-Thumbnail"></Image>
                  </a>
                </picture>
                <span className="heart-btn">
                  <i className="fa-regular fa-heart"></i>
                </span>
                <h1 className="product-tile-title">
                  <a href="" title="Monochrome">
                    <span>Monochrome</span>
                  </a>
                </h1>
              </header>

              <section className="product-tile-pricing">
                <span className="product-price">
                  $<span>425</span>
                </span>
              </section>
            </article>
          </li>

          <li>
            <article className="product-tile">
              <header className="product-tile-header">
                <picture className="product-tile-images">
                  <a href="/" title="Monochrome">
                    <Image src={product4} alt="View-Thumbnail4"></Image>
                  </a>
                </picture>
                <span className="heart-btn">
                  <i className="fa-regular fa-heart"></i>
                </span>
                <h1 className="product-tile-title">
                  <a href="" title="Monochrome">
                    <span>Monochrome</span>
                  </a>
                </h1>
              </header>

              <section className="product-tile-pricing">
                <span className="product-price">
                  $<span>425</span>
                </span>
              </section>
            </article>
          </li>
        </ul>
      </section>
    </>
  );
}
