import styles from "./FilterItems.module.scss";

export const FilterItems = () => {
  return (
    <div className={styles.filters}>
      <h2>Filters</h2>
      <select className={styles.select}>
        <option value="Coldest">Coldest</option>
        <option value="Hottest">Hottest</option>
      </select>
      <select className={styles.select}>
        <option value="Coldest">0-10 °C</option>
        <option value="Coldest">10-20 °C</option>
        <option value="Hottest">20-30 °C</option>
        <option value="Hottest">30-40 °C</option>
      </select>
      <select className={styles.select}>
        <option value="Coldest">Rainy</option>
        <option value="Hottest">Windy</option>
        <option value="Hottest">Sunny</option>
      </select>
    </div>
  );
};
