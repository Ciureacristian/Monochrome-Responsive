import FooterDescription from './footerDescription';

export default function ProductDescription() {
  return (
    <>
      <nav className="product-detail-view">
        <header className="product-detail-header">
          <h1 className="product-header">Monochrome Max Bill - $725</h1>
        </header>

        <section className="product-description">
          <h1>
            <a href="/" title="Description" className="product-desc">
              description <i class="fa-solid fa-minus"></i>
            </a>
          </h1>

          <p>
            Mr Max Bill was a true creative genius, carving out a career as a
            painter, architect, sculptor and designer. As well as leaving behind
            an expansive body of work, he was also an avid collector of watches,
            and this Junghans chronoscope timepiece is dedicated to his memory.
            Immaculately housed in a domed Plexiglass case and finished with a
            handsome leather strap, it s a highly technical piece in a stylish
            package.
          </p>
        </section>

        <section className="product-fit">
          <h1>
            <a href="/" title="fit">
              size & fit <i class="fa-solid fa-plus"></i>
            </a>
          </h1>
        </section>

        <section className="product-details">
          <h1>
            <a href="/" title="fit">
              details & care <i class="fa-solid fa-plus"></i>
            </a>
          </h1>
        </section>

        <section className="product-delivery">
          <h1>
            <a href="/" title="fit">
              delivery & returns <i class="fa-solid fa-plus"></i>
            </a>
          </h1>
        </section>

        <section className="product-cta">
          <button type="submit" name="ADDBAG" className="add-bag" id="add-bag">
            <i class="fa-solid fa-bag-shopping">ADD TO BAG</i>
          </button>

          <button
            type="submit"
            name="whishlist"
            className="add-whislist"
            id="add-whishlist"
          >
            <i class="fa-solid fa-heart">WHISHLIST</i>
          </button>
        </section>
        <footer className="product-detail-footer">
          <FooterDescription></FooterDescription>
        </footer>
      </nav>
    </>
  );
}
