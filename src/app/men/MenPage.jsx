import Link from 'next/link';

export default function MenPage() {
  return (
    <>
      <section className="home-catalog-preview-tile container">
        <span className="mb-2">Men s</span>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the.
        </p>

        <nav className="home-catalog-preview-btn">
          <ul>
            <li>
              <Link
                href="/products"
                title="BESTSELLER"
                className="button-ctas-men"
              >
                BESTSELLER
              </Link>
            </li>
            <li>
              <a href="/" title="LOW">
                $ HIGH TO LOW
              </a>
            </li>
            <li>
              <a href="/" title="HIGH" className="button-ctas-men">
                $ LOW TO HIGH
              </a>
            </li>
            <li>
              <a href="/" title="NEW IN">
                NEW IN
              </a>
            </li>
            <li>
              <a href="/" title="WHITE">
                WHITE
              </a>
            </li>
            <li>
              <a href="/" title="BLACK">
                BLACK
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
