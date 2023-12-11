// bagTotal.js
import Link from 'next/link';
import React from 'react';

const BagTotal = () => {
  return (
    <>
      <section className="bag-totals">
        <article className="subtotal">
          <h1>subtotal</h1>
          <span>$2,750</span>
        </article>
        <article className="shipping">
          <h1>shipping</h1>
          <span>$Free</span>
        </article>
        <article className="taxes">
          <h1>taxes</h1>
          <span>$0</span>
        </article>
        <article className="total">
          <h1>total</h1>
          <span>$2,750</span>
        </article>
      </section>
      <Link href="/singIn" title="Buy now" className="btn-order">
        <i class="fa-solid fa-wallet"></i>
        BUY NOW
      </Link>
    </>
  );
};

export default BagTotal;
