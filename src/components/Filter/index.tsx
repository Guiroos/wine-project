import React, { Dispatch, SetStateAction } from "react";
import { FilterList } from "./style";

interface FilterProps {
  setFilter: Dispatch<SetStateAction<string>>;
}

const Filter: React.FC<FilterProps> = ({ setFilter }: FilterProps) => {
  return (
    <div id="filter-list">
      <FilterList>
        <h2>Refine sua Busca</h2>
        <p>Por preço</p>
        <li>
          <label id="price-filter-1">
            <input
              type="radio"
              value={["0", "40"]}
              name="filter"
              onChange={(e) => setFilter(e.target.value)}
            />
            Até R$40
          </label>
        </li>
        <li>
          <label id="price-filter-2">
            <input
              type="radio"
              value={["40", "100"]}
              name="filter"
              onChange={(e) => setFilter(e.target.value)}
            />
            R$40 A R$100
          </label>
        </li>
        <li>
          <label id="price-filter-3">
            <input
              type="radio"
              value={["100", "200"]}
              name="filter"
              onChange={(e) => setFilter(e.target.value)}
            />
            R$100 A R$200
          </label>
        </li>
        <li>
          <label id="price-filter-4">
            <input
              type="radio"
              value={["200", "500"]}
              name="filter"
              onChange={(e) => setFilter(e.target.value)}
            />
            R$200 A R$500
          </label>
        </li>
        <li>
          <label id="price-filter-5">
            <input
              type="radio"
              value={["500", "1000000"]}
              name="filter"
              onChange={(e) => setFilter(e.target.value)}
            />
            Acima de R$500
          </label>
        </li>
      </FilterList>
    </div>
  );
};

export default Filter;
