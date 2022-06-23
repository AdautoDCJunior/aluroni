import itemsMenu from "./items.json";
import Item from "./Item";
import styles from "./Items.module.scss";
import { useEffect, useState } from "react";

interface propsType {
  searched: string;
  filter: number | null;
  order: string;
}

export default function Items({ searched, filter, order }: propsType) {
  const [list, setList] = useState(itemsMenu);

  useEffect(() => {
    function testSearch(title: string) {
      const regex = new RegExp(searched, "i");
      return regex.test(title);
    }

    function testFilter(id: number) {
      if (filter !== null) return filter === id;
      return true;
    }

    function ascendingOrder(
      list: typeof itemsMenu,
      type: keyof Pick<typeof itemsMenu[0], "size" | "serving" | "price">
    ) {
      return list.sort((a, b) => (a[type] > b[type] ? 1 : -1));
    }

    function testOrder(newList: typeof itemsMenu) {
      switch (order) {
        case "portion":
          return ascendingOrder(newList, "size");
        case "amount_people":
          return ascendingOrder(newList, "serving");
        case "price":
          return ascendingOrder(newList, "price");
        default:
          return newList;
      }
    }

    const newList = itemsMenu.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );

    setList(testOrder(newList));
  }, [searched, filter, order]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
