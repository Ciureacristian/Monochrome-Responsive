export default function HeaderSecondary() {
  return <>
  <section className="header-secondary">
  <div className="header-secondary-inner container">

    <section className="header-connect">
      <ul>
        <li>
          <a
            href="/"
            title="Youtube"
          ><i className="fa-brands fa-youtube"></i></a>
        </li>

        <li>
          <a
            href="/"
            title="Twitter"
          ><i className="fa-brands fa-twitter"></i></a>
        </li>

        <li>
          <a
            href="/"
            title="Facebook"
          ><i className="fa-brands fa-facebook"></i></a>
        </li>

        <li>
          <a
            href="/"
            title="Instagram"
          ><i className="fa-brands fa-instagram"></i></a>
        </li>

        <li>
          <a
            href="+44 (0)10 2345 6789"
            title="CALL US"
          >
            CALL US +44 (0)10 2345 6789
          </a>
        </li>
      </ul>
    </section>


    <section className="header-controls">
      <ul>
        <li className="header-account">
        <form>
        <input
                  type="search"
                  name="search-bar"
                  className="search-input"
                  id="search-bar"
                  placeholder="Search"
                  required
                ></input>
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>



        </li>

        <li>
          <a
            href="/"
            title="User"
          >
            <i className="fa-regular fa-user"></i>
          </a>
        </li>

        <li>
          <a
            href="/"
            title="Add to favorite"
          >
            <i className="fa-regular fa-heart"></i>
          </a>
        </li>

        <li>
          <a
            href="/"
            title="Add to cart"
          >
            <i className="fa-sharp fa-solid fa-bag-shopping"></i>
          </a>
        </li>
      </ul>

    </section>
  </div>
</section>
</>
}


