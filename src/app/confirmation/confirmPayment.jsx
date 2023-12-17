import Link from 'next/link';
import React from 'react';

const ConfirmPayment = () => {
  return (
    <>
      <section className="confirm-payment">
        <header>
          <h2>Payment confirmation</h2>
        </header>

        <span>Credit Card Number XXXX XXXX XXXX 0046</span>
      </section>

      <section className="confirm-shipping">
        <header>
          <h2>Shipping</h2>
        </header>

        <span>Your will receive your order in 2-3 business days</span>

        <Link
          href="/endPage"
          type="button"
          name="Track"
          title="Track"
          className="track-order"
        >
          Track order
        </Link>
      </section>
    </>
  );
};

export default ConfirmPayment;
