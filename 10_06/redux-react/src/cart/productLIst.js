import ProductItem from "./productItem";

export default function ProductList() {
  const productItem = {
    1: {
      id: 1,
      name: "이상해씨",
      value: 9000,
    },
    2: {
      id: 2,
      name: "파이리",
      value: 7000,
    },
    3: {
      id: 3,
      name: "꼬부기",
      value: 12000,
    },
  };
  return (
    <>
      <ProductItem info={productItem[1]} />
      <ProductItem info={productItem[2]} />
      <ProductItem info={productItem[3]} />
    </>
  );
}
