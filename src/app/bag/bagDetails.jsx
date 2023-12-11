import React from 'react';
import Image from 'next/image';
import product from './../../assets/products/recently_viewed_thumbnail_2-2.png';
import { Value } from 'sass';

const BagDetails = () => {
  return (
    <>
      <section className="details-products">
        <ul className="bag-products">
          <li>ITEM</li>
          <li>DESCRIPTION</li>
          <li>COLOR</li>
          <li>QUANTITY</li>
          <li>UNIT PRICE</li>
        </ul>
      </section>
      <section className="bag-order">
        <article className="product-order container">
          <section className="bag-images">
            <a href="/men">
              <Image
                src={product}
                alt="Viewd-Thumbnai2"
                title="Watch Monochrome"
              ></Image>
            </a>
          </section>
          <section className="bag-description">
            <span>Monochrome Max Bill</span>
            <p>Max Bill Chronoscope 40mm Stainless Steel and Leather Watch</p>
          </section>
          <section className="bag-color">
            <p>Black</p>
          </section>
          <section className="bag-quantity">
            <form>
              <button
                type="button"
                className="button-quantity"
                id="btn-minus"
                name="btn-plus"
              >
                <i class="fa-solid fa-minus"></i>
              </button>
              <input
                type="number"
                id="product-bag"
                name="product-bag"
                min={1}
                max={10}
                Value={1}
              />
              <button
                type="button"
                className="button-quantity"
                id="btn-plus"
                name="btn-plus"
              >
                <i class="fa-solid fa-plus"></i>
              </button>
            </form>
          </section>
          <section className="bag-price">
            <span className="price">$2,750</span>
          </section>
          <section className="bag-controls">
            <button
              type="submit"
              name="btn-controls"
              className="btn-small"
              title="MOVE TO WISHLIST"
            >
              MOVE TO WISHLIST
            </button>
            <button
              type="reset"
              name="btn-controls"
              className="btn-small"
              title=" REMOVE PRODUCT"
            >
              REMOVE PRODUCT
            </button>
          </section>
        </article>
      </section>
    </>
  );
};

export default BagDetails;
