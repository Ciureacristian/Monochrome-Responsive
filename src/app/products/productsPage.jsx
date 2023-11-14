import ProductDescription from "./productDescription";
import ProductPresentation from "./productPresentation";


export default function ProductPage () {
  return<>
  <section className="product-presentation">
 <ProductPresentation></ProductPresentation>
  </section>
  <section className="product-description">
<ProductDescription></ProductDescription>
  </section>
  </>
}
