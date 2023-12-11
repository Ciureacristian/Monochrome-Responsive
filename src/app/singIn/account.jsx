const Account = () => {
  return (
    <>
      <div className="account-register">
        <section className="sign-in">
          <header className="sign-costumer">
            <h1>EXISTING CUSTOMER</h1>
          </header>
          <p className="sign-p">
            Make purchases faster using previously saved details. Track previous
            orders and easily request returns from the website.
          </p>
          <form>
            <fieldset>
              <input
                type="email"
                name="email-sign"
                id="email-sign"
                placeholder="Email adress"
                className="input-sign"
                required
              />

              <input
                type="password"
                name="password-sign"
                id="password-sign"
                placeholder="Password"
                className="password-sign"
                required
              />

              <a href="/" title="forgot password?">
                forgot password?
              </a>

              <button
                type="submit"
                name="submit-id"
                id="submit-id"
                className="btn-sign"
              >
                Sign In
              </button>
            </fieldset>
          </form>
        </section>
        <section className="register">
          <header className="sign-costumer">
            <h1>NEW CUSTOMER</h1>
          </header>

          <form>
            <fieldset>
              <input
                type="text"
                name="name-register"
                id="name-registe"
                placeholder="Full name"
                className="input"
                required
              />
              <input
                type="email"
                name="email-register"
                id="email-register"
                placeholder="Email addres"
                className="input"
                required
              />
              <input
                type="password"
                name="password-register"
                id="password-register"
                placeholder="Password"
                className="input"
                required
              />
              <input
                type="password"
                name="password-register"
                id="password-register"
                placeholder="Confirm password"
                className="input"
                required
              />

              <div className="gdpr">
                <input
                  type="radio"
                  name="btn-radio"
                  id="btn-radio"
                  placeholder="i agree with terms and conditions and GDPR privacy policy"
                  required
                />

                <label className="gdpr-signin">
                  I agree with <a href="/">term and conditions</a> and{' '}
                  <a href="/">gdpr privacy politicy</a>
                </label>
              </div>

              <button
                type="submit"
                name="Register"
                id="Register"
                title="Register"
                className="btn-sign"
              >
                Register
              </button>
            </fieldset>
          </form>
        </section>
      </div>
    </>
  );
};

export default Account;
