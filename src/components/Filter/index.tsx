import { FilterList } from "./style";

export default function Filter() {
  return (
    <div>
      <FilterList>
        <h2>Refine sua Busca</h2>
        <p>Por preço</p>
        <li>
          <label>
            <input type="radio" value="40" name="filter" /> Até R$40
          </label>
        </li>
        <li>
          <label>
            <input type="radio" value="40" name="filter" /> R$40 A R$60
          </label>
        </li>
        <li>
          <label>
            <input type="radio" value="40" name="filter" /> R$100 A R$200
          </label>
        </li>
        <li>
          <label>
            <input type="radio" value="40" name="filter" /> R$200 A R$500
          </label>
        </li>
        <li>
          <label>
            <input type="radio" value="40" name="filter" /> Acima de R$500
          </label>
        </li>
      </FilterList>
    </div>
  );
}
