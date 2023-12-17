import React from 'react';

const BillingAddress = () => {
  return (
    <>
      <header className="billing-adress-header">
        <h1>2. REVIEW SHIPPING AND BILLING ADDRESS</h1>
      </header>

      <div className="address-billing container">
        <section className="shipping-address">
          <header className="shipping-address-header">
            <h2>SHIPPING ADDRESS</h2>
          </header>

          <section className="shipping-address-detail">
            <span>Mr. Kill Bill</span> <span>1234 Couckoo Boulevard</span>
            <span> Quarantine Zone</span> <span>47862</span>
            <span>Happy Country </span> <a href="/">change shipping address</a>
          </section>
        </section>

        <section className="billing-address-section">
          <header className="shipping-address-header">
            <h2>BILLING ADDRESS</h2>
          </header>

          <section className="shipping-address-detail">
            <span>Same as shipping Address</span>{' '}
            <a href="/">change billing address</a>
          </section>
        </section>
      </div>
    </>
  );
};

export default BillingAddress;
