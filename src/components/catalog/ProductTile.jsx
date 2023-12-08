import Image from 'next/image';
import product from '../../assets/products/recently_viewed_thumbnail_2-2.png';

export default function ProductTile() {
  return (
    <>
      <header className="product-tile-header">
        <ul className="product-tiles">
          <li>
            <article className="product-tile">
              <picture className="product-tile-images">
                <a href="/" title="Monochrome">
                  <Image src={product} alt="Oliver Prcker" />
                </a>
              </picture>
              <span className="heart-btn">
                <i className="fa-regular fa-heart"></i>
              </span>
            </article>
          </li>
        </ul>
        <h1 className="product-tile-title">
          <a href="/" title="Monochrome">
            <span>Monochrome</span>
          </a>
        </h1>

        <section className="product-tile-pricing">
          <span className="product-price">
            $<span>425</span>
          </span>
        </section>
      </header>
    </>
  );
}
