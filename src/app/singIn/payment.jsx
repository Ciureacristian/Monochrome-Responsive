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
          <a href="/">billing</a>
        </li>
        <li>
          <a href="/">confirmation</a>
        </li>
      </ul>
    </>
  );
};

export default PaymentSign;
