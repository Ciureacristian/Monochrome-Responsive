import React from 'react';
import Image from 'next/image';
import product from './../../assets/products/recently_viewed_thumbnail_2-2.png';

const BillingSummary = () => {
  return (
    <>
      <header className="billing-header">
        <h1>1. YOUR ORDER SUMMARY</h1>
      </header>

      <section className="order-details">
        <ul className="billing-details">
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
    </>
  );
};

export default BillingSummary;
