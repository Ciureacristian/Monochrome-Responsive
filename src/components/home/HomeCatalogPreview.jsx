import CatalogPreview from "../catalog/CatalogPreview"

export default function HomeCatalogPreview() {
return<>
<section className="home-catalog-preview">
        <header>
          Most Loved
        </header>

        <ul className="product-tiles">
          <li>
            <article className="product-tile">

                <picture className="product-tile-images">
                  <a
                    href="/"
                    title="Monochrome"
                  >
                    <picture>
                    <img
                      src="./products/recently_viewed_thumbnail_2-2.png"
                      alt="Monochrome"
                    ></img>
                    </picture>
                  </a>


                </picture>
                <span className="heart-btn">
                  <i className="fa-regular fa-heart"></i>
                </span>



            </article>

          </li>


        </ul>
      </section>
</>
}
