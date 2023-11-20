import CatalogPreview from '../catalog/CatalogPreview';

export default function HomeCatalogPreviewGirl() {
  return (
    <>
      <section className="home-catalog-header">
        <header className="tile-catalog-preview">Girl s</header>
      </section>
      <CatalogPreview></CatalogPreview>
      <header className="button-ctas">
        <ul className="product-tiles">
          <footer className="catalog-ctas">
            <a href="">View all</a>
          </footer>
        </ul>
      </header>
    </>
  );
}
