import classNames from "classnames";
import filters from "./filters.json";
import styles from "./Filters.module.scss";

interface propsType {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

type optionType = typeof filters[0];

export default function Filters({ filter, setFilter }: propsType) {
  function selectFilter(option: optionType) {
    if (filter === option.id) {
      return setFilter(null);
    }
    return setFilter(option.id);
  }

  return (
    <div className={styles.filters}>
      {filters.map((option) => (
        <button
          className={classNames({
            [styles.filters__filter]: true,
            [styles["filters__filter--active"]]: filter === option.id,
          })}
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
