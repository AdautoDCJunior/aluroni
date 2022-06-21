import React from "react";
import { CgSearch } from "react-icons/cg";
import styles from "./Search.module.scss";

interface propsType {
  searched: string;
  setSearched: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ searched, setSearched }: propsType) {
  return (
    <div className={styles.search}>
      <input value={searched} onChange={(e) => setSearched(e.target.value)} />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
