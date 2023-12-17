import React from 'react';

const BillingDelivery = () => {
  return (
    <>
      <header className="billing-delivery-header">
        <h1>3. DELIVERY METHOD</h1>
      </header>

      <div className="address-delivery container">
        <section className="delivery-express">
          <header className="delivery-express-header">
            <h2>EXPRESS DELIVERY (£Free)</h2>
          </header>

          <section className="delivery-express-detail">
            <span>Delivered in 3-4 business days</span>{' '}
            <a href="/">change shipping address</a>
          </section>
        </section>

        <section className="delivery-option">
          <header className="delivery-option-header">
            <h2>Packaging options</h2>
          </header>
          <section className="delivery-option-address">
            <span>Same as shipping Address</span>{' '}
            <a href="/">change billing address</a>
          </section>
        </section>
      </div>
    </>
  );
};

export default BillingDelivery;
