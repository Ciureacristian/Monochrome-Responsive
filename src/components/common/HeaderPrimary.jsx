import Link from 'next/link';
export default function HeaderPrimary() {
return <>
<section className="header-primary">
    <nav className="header-primary-inner container">
      <ul>
        <li>
          <a
            href="/"
            title="New arrivals"
          >
            New arrivals
          </a>
        </li>

        <li>
          <a
            href="/"
            title="Brand"
          >
            Brands
          </a>
        </li>

        <li>
        <Link href="/men" title="Men">
            Men
        </Link>
        </li>

        <li>
          <a
            href="/"
            title="Girl's"
          >
            Girls
          </a>
        </li>

        <li>
          <a
            href="/"
            title="Accesories"
          >
            Accesories
          </a>
        </li>

        <li>
          <a
            href="/"
            title="Lookbook"
          >
            Lookbook
          </a>
        </li>
      </ul>
    </nav>
  </section>
</>
}
