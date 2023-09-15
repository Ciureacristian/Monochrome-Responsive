import ProductTile from './ProductTile';

export default function HomeCatalogPreview() {
  return (
    <ul className="home-catalog-product">
      <li>
        <ProductTile></ProductTile>
      </li>

      <li>
        <ProductTile></ProductTile>
      </li>

      <li>
        <ProductTile></ProductTile>
      </li>

      <li>
        <ProductTile></ProductTile>
      </li>
    </ul>
  );
}
