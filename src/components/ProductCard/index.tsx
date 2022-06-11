interface Product {
  avaliations: number;
  classification: string;
  country: string;
  discount: number;
  flag: string;
  id: number;
  image: string;
  name: string;
  price: number;
  priceMember: number;
  priceNonMember: number;
  rating: number;
  region: string;
  size: string;
  sommelierComment: string;
  type: string;
}

export default function ProductsCard(item: Product, key: number) {
  console.log(item);

  return <div></div>;
}
