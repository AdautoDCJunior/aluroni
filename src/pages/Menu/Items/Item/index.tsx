import styles from "./Item.module.scss";
import itemsMenu from "../items.json";
import classnames from "classnames";

type propsType = typeof itemsMenu[0];

export default function Item(props: propsType) {
  const { title, description, category, size, serving, price, photo } = props;

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classnames({
              [styles.item__category]: true,
              [styles.item__category__pastas]: category.id === 1,
              [styles.item__category__meat]: category.id === 2,
              [styles.item__category__combos]: category.id === 3,
              [styles.item__category__vegans]: category.id === 4,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__size}>{size}</div>
          <div className={styles.item__serving}>
            {serving} pessoa{serving > 1 && "s"}
          </div>
          <div className={styles.item__price}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
