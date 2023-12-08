import CatalogPreview from '../catalog/CatalogPreview';

export default function HomeCatalogPreviewMen() {
  return (
    <>
      <section className="home-catalog-header">
        <header className="tile-catalog-preview">Men s</header>
      </section>
      <CatalogPreview></CatalogPreview>
      <header className="button-ctas">
        <ul className="product-tiles">
          <footer className="footer-button">
            <nav>
              <a href="" title="view all" class="catalog-cta">
                view all
              </a>
            </nav>
          </footer>
        </ul>
      </header>
    </>
  );
}
