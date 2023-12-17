import React from 'react';

const BillingPayment = () => {
  return (
    <>
      <header className="billing-payment-header">
        <h1>4. Payment methods</h1>
      </header>

      <section className="billing-payment-methode">
        <form>
          <fieldset>
            <div className="payment-met">
              <div>
                <input
                  type="radio"
                  name="methode"
                  id="card"
                  value="card"
                  required
                />
                <label htmlFor="card">
                  <i class="fa-solid fa-credit-card"></i>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="methode"
                  id="paypal"
                  value="paypal"
                  required
                />
                <label htmlFor="paypal">
                  <i class="fa-brands fa-paypal"></i>
                </label>
              </div>
            </div>

            <label htmlFor="card-name">Name on card</label>
            <input
              type="text"
              id="cardName"
              className="input"
              placeholder="Enter your card name"
              required
            />
            <label htmlFor="card-number">Card number</label>
            <input
              type="text"
              id="cardNumber"
              className="input"
              placeholder="Enter your card number"
              required
            />

            <div class="card-input">
              <label for="expirationDate">Expiration Date</label>
              <div class="expiration-date">
                <select id="expirationMonth">
                  <option value="01">01 - January</option>
                  <option value="02">02 - February</option>
                  <option value="03">03 - March</option>
                  <option value="04">04 - April</option>
                  <option value="05">05 - May</option>
                  <option value="06">06 - June</option>
                  <option value="07">07 - July</option>
                  <option value="08">08 - August</option>
                  <option value="09">09 - September</option>
                  <option value="10">10 - October</option>
                  <option value="11">11 - November</option>
                  <option value="12">12 - December</option>
                </select>
                <select id="expirationYear">
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
              </div>
              <div class="card-input">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="CVV"></input>
              </div>
            </div>

            <div className="secure-payment">
              <input type="checkbox" name="secure-store" id="secure-store" />
              <label htmlFor="store-payment">
                Securely store payment for next purchase.
              </label>
            </div>

            <div className="order-place">
              <button
                type="submit"
                className="btn-signn"
                title="Finish Purchase"
              >
                FINISH PURCHASE
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default BillingPayment;
