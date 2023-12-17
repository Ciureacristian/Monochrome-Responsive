import product from '../../assets/products/recently_viewed_thumbnail_2-2.png';
import product1 from '../../assets/products/recently_viewed_thumbnail_2-15.png';
import product2 from '../../assets/products/recently_viewed_thumbnail_2-12.png';
import product3 from '../../assets/products/recently_viewed_thumbnail_2-5.png';
import product4 from '../../assets/products/recently_viewed_thumbnail_2-4.png';
import Image from 'next/image';

export default function ProductPresentation() {
  return (
    <>
      <div className="product-watch outer mb-5">
        <Image
          src={product}
          alt="Thumbnail2-2"
          title="Watch"
          className="product-image"
        ></Image>
      </div>
    </>
  );
}
