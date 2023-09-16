import ProductTile from '@/components/catalog/ProductTile';
import Footer from '@/components/common/Footer';
import HeaderPrimary from '@/components/common/HeaderPrimary';
import HeaderSecondary from '@/components/common/HeaderSecondary';

import HomeCatalogPreview from '@/components/home/HomeCatalogPreview';
import HomeCatalogPreview2 from '@/components/home/HomeCatalogPreview2';
import HomeCatalogPreviewGirl from '@/components/home/HomeCatalogPreviewGirl';
import HomeCatalogPreviewMen from '@/components/home/HomeCatalogPreviewMen';
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
          <HomeCatalogPreview2></HomeCatalogPreview2>
        </section>

        <div className="home-content">
         <HomeContent></HomeContent>
        </div>

        <div className="home-catalog-preview">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>

        <div className="home-catalog-preview">
          <HomeCatalogPreviewMen></HomeCatalogPreviewMen>
        </div>

        <div className="home-catalog-preview">
          <HomeCatalogPreviewGirl></HomeCatalogPreviewGirl>
        </div>
        </header>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
