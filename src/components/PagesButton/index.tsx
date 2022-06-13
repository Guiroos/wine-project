import React, { Dispatch, SetStateAction } from "react";
import { ButtonDiv } from "./style";

interface PagesButtonProps {
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PagesButton: React.FC<PagesButtonProps> = ({
  totalPages,
  setCurrentPage,
}: PagesButtonProps) => {
  const ButtonRender = (page: number) => {
    return (
      <button
        key={page}
        onClick={() => {
          setCurrentPage(page);
        }}
      >
        {page}
      </button>
    );
  };

  const buttons = [];
  for (let i = 1; i <= totalPages; i++) {
    buttons.push(ButtonRender(i));
  }

  return <ButtonDiv>{buttons}</ButtonDiv>;
};

export default PagesButton;
