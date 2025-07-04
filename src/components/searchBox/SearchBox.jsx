import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const filterValue = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handelChange = (el) => {
    const value = el.target.value.trim();
    value !== filterValue && dispatch(changeFilter(value));
  };

  return (
    <div>
      <p>Search contact by name:</p>
      <input
        className={styles.searchInput}
        type="text"
        value={filterValue}
        onChange={handelChange}
      />
    </div>
  );
}
