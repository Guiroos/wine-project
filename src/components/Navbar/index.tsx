import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bar, FlexDiv, StyleLink, IconDiv, ImageDiv } from "./style";
import { CgProfile, CgSearch, CgShoppingCart } from "react-icons/cg";
import wine from "../../../public/wine.svg";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  priceMember: number;
  priceNonMember: number;
}

interface NavbarProps {
  cartItems?: Product[];
}

const Navbar: React.FC<NavbarProps> = ({ cartItems }: NavbarProps) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <Bar>
      <FlexDiv>
        <ImageDiv>
          <Image src={wine} alt="logo" />
        </ImageDiv>
        <FlexDiv>
          <Link href="/store">
            <StyleLink>Clube</StyleLink>
          </Link>
          <Link href="/store">
            <StyleLink>Loja</StyleLink>
          </Link>
          <Link href="/store">
            <StyleLink>Produtores</StyleLink>
          </Link>
          <Link href="/store">
            <StyleLink>Ofertas</StyleLink>
          </Link>
          <Link href="/store">
            <StyleLink>Eventos</StyleLink>
          </Link>
        </FlexDiv>
      </FlexDiv>
      <FlexDiv>
        <IconDiv>
          <CgSearch size={50} />
        </IconDiv>
        <IconDiv>
          <CgProfile size={50} />
        </IconDiv>
        <Link href="/cart">
          <IconDiv onClick={() => setShowCart(!showCart)}>
            <CgShoppingCart size={50} />
          </IconDiv>
        </Link>
      </FlexDiv>
    </Bar>
  );
};

export default Navbar;
