import HeaderPrimary from "../common/HeaderPrimary";
import HeaderSecondary from "../common/HeaderSecondary";

export default function PageMan () {
  return<>
   <div className="home">
      <header className='header-secondary'>
      <HeaderSecondary></HeaderSecondary>
      </header>

      <section className="header-primary">
       <HeaderPrimary></HeaderPrimary>
      </section>

    </div>
  </>
}
