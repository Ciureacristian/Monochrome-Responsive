import Link from 'next/link';
export default function HeaderPrimary() {
  return (
    <>
      <header class="header-primary container">
        <input type="checkbox" id="menu-toggle" class="menu-toggle" />
        <label for="menu-toggle" class="hamburger-icon">
          <i class="fa-solid fa-bars"></i>
        </label>
        <nav class="header-primary-inner">
          <ul>
            <li>
              <a href="/" title="New arrivals">
                New arrivals
              </a>
            </li>
            <li>
              <a href="/" title="Brand">
                Brands
              </a>
            </li>
            <li>
              <Link href="/men" title="Men">
                Men
              </Link>
            </li>
            <li>
              <a href="/" title="Girls">
                Girls
              </a>
            </li>
            <li>
              <a href="/" title="Accessories">
                Accessories
              </a>
            </li>
            <li>
              <a href="/" title="Lookbook">
                Lookbook
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

function toggleMenu() {
  const header = document.querySelector('.header-primary-inner');
  header.classList.toggle('active');
}
