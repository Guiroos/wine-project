import ProductsCard from "../ProductCard/index";

interface ProductsListProps {
  items: Product[];
  itemsPerPage: number;
  page: number;
  totalItems: number;
  totalPages: number;
}

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

export default function ProductsGrid(props: ProductsListProps) {
  return (
    <div>
    </div>
  );
}
