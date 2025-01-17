import CategoryCard from "@/module/CategoryCard";
import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import styles from "@/template/HomePage.module.css";
import { categories, cities, services } from "@/constants/strings";

function HomePage() {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((item) => (
              <li key={item}>
                <FiCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        {Object.keys(categories).map((category, index) => (
          <CategoryCard key={index} title={categories[category]} name={category} />
        ))}
      </div>
      <div className={styles.city}>
        <h3>شهر های پر بازدید</h3>
        <ul>
          {cities.map((item) => (
            <li key={item}>
              <FaCity />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
