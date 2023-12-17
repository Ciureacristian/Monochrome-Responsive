import Link from 'next/link';

const ShippingInfo = () => {
  return (
    <>
      <form>
        <fieldset>
          <div>
            <label for="title">title *</label>
            <input
              type="text"
              className="input-shipping"
              name="title"
              id="title"
              required
            />
          </div>
          <div>
            <label for="first name">first name *</label>
            <input
              type="text"
              className="input-shipping"
              name="First name"
              id="First name"
              required
            />
          </div>
          <div>
            <label for="last name">last name *</label>
            <input
              type="text"
              className="input-shipping"
              name="Last name"
              id="Last name"
              required
            />
          </div>
          <div>
            <label for="country">country *</label>
            <input
              type="text"
              className="input-shipping"
              name="Country"
              id="Country"
              required
            />
          </div>
          <div>
            <label for="address line 1">address line 1 *</label>
            <input
              type="text"
              className="input-shipping"
              name="Adress line 1"
              id="Adress line 1"
              required
            />
          </div>
          <div>
            <label for="address line 2">address line 2 *</label>
            <input
              type="text"
              className="input-shipping"
              name="Adress line 2"
              id="Adress line 2"
              required
            />
          </div>
          <div>
            <label for="city">city *</label>
            <input
              type="text"
              className="input-shipping"
              name="City"
              id="City"
              required
            />
          </div>
          <div>
            <label for="county / province">county / province</label>
            <input
              type="text"
              className="input-shipping"
              name="County"
              id="County"
              required
            />
          </div>
          <div>
            <label for="postcode / zip">postcode / zip *</label>
            <input
              type="text"
              className="input-shipping"
              name="ZIP"
              id="ZIP"
              required
            />
          </div>
          <div>
            <label for="telephone">telephone *</label>
            <input
              type="text"
              className="input-shipping"
              name="Telephone"
              id="Telephone"
              required
            />
          </div>
          <div>
            <label for="mobile">mobile</label>
            <input
              type="text"
              className="input-shipping"
              name="Mobile"
              id="Mobile"
              required
            />
          </div>

          <span className="required-fields">* required fields</span>

          <div className="shipping-adress">
            <input
              type="radio"
              name="radio-shipping"
              id="shipping-adress"
              required
            />
            <label for="use shipping address as billing address">
              use shipping address as billing address
            </label>
          </div>

          <div className="shipping-adress">
            <input
              type="radio"
              name="radio-shipping"
              id="shipping-separate"
              required
            />
            <label for="enter separate billing address">
              enter separate billing address
            </label>
          </div>

          <Link href="/billing" title="Continue" className="btn-signn">
            CONTINUE
          </Link>
        </fieldset>
      </form>
    </>
  );
};

export default ShippingInfo;
