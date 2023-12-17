import React from 'react';
import Image from 'next/image';
import product from './../../assets/products/recently_viewed_thumbnail_2-2.png';

const ConfirmOrder = () => {
  return (
    <>
      <header className="confirmation-header">
        <h1>Oder confirmation</h1>
      </header>

      <section className="order-details">
        <ul className="confirmation-details-ul">
          <li>ITEM</li>
          <li>QUANTITY</li>
          <li>UNIT PRICE</li>
          <li>VAT</li>
          <li>SHIPPING</li>
        </ul>
      </section>

      <section className="billing-order-details">
        <article className="billing-order container">
          <section className="billing-order-img">
            <a href="/">
              <Image
                src={product}
                alt="Viewd-Thumbnai2"
                title="Watch Monochrome"
              ></Image>
              Monochrome Max Bill/BLACK
            </a>
          </section>

          <section className="billing-quantity">
            <span>1</span>
          </section>

          <section className="billing-price">
            <span>$425</span>
          </section>

          <section className="billing-vat">
            <span>$25</span>
          </section>

          <section className="billing-shipping">
            <span>$15</span>
          </section>
        </article>
      </section>

      <div className="total-price">
        <h1>Total</h1>
        <span>$465</span>
      </div>

      <div className="confirmation-print">
        <a href="/" title="Print your inovation">
          print your invoice
        </a>
      </div>
    </>
  );
};

export default ConfirmOrder;
