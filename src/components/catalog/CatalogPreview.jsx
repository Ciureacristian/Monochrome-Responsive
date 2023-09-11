import ProductTile from './ProductTile';

export default function HomeCatalogPreview() {
  return (
    <ul className="home-catalog-preview">
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
