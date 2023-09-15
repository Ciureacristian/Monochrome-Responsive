import ProductTile from '@/components/catalog/ProductTile';
import Footer from '@/components/common/Footer';
import HeaderPrimary from '@/components/common/HeaderPrimary';
import HeaderSecondary from '@/components/common/HeaderSecondary';

import HomeCatalogPreview from '@/components/home/HomeCatalogPreview';
import HomeContent from '@/components/home/HomeContent';

export default function Home() {
  return (
    <div className="home">
      <header className='header-secondary'>
      <HeaderSecondary></HeaderSecondary>
      </header>

      <section className="header-primary">
       <HeaderPrimary></HeaderPrimary>
      </section>

      <main className="content">
        <header className='home-catalog-preview container'>
        <section className='home-catalog-preview'>
          <HomeCatalogPreview></HomeCatalogPreview>
        </section>

        <div className="home-content">
         <HomeContent></HomeContent>
        </div>

        <div className="home-catalog-preview">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>

        <div className="home-catalog-preview">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>

        <div className="container">
          <ul className="row justify-content-between">
            <li className="col-12 col-lg-3 mb-5">
              <ProductTile></ProductTile>
            </li>

            <li className="col-12 col-lg-3 mb-5">
              <ProductTile></ProductTile>
            </li>

            <li className="col-12 col-lg-3 mb-5">
              <ProductTile></ProductTile>
            </li>


            <li className="col-12 col-lg-3 mb-5">
              <ProductTile></ProductTile>
            </li>
          </ul>
        </div>
        </header>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
