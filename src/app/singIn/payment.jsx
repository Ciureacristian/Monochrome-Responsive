import Link from 'next/link';

const PaymentSign = () => {
  return (
    <>
      <ul className="payment-signIn">
        <li>
          <a href="/" className="signIn-btn">
            sign in
          </a>
        </li>
        <li>
          <Link href="/shipping" title="shipping">
            shipping
          </Link>
        </li>
        <li>
          <Link href="/billing" title="billing">
            billing
          </Link>
        </li>
        <li>
          <Link href="/confirmation" title="confirmation">
            confirmation
          </Link>
        </li>
      </ul>
    </>
  );
};

export default PaymentSign;
