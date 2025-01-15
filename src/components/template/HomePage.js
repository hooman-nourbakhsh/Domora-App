import CategoryCard from "@/module/CategoryCard";
import { FiCircle } from "react-icons/fi";
import styles from "@/template/HomePage.module.css";

function HomePage() {
  const services = ["اجاره", "خرید", "رهن", "فروش"];
  const cities = ["تهران", "سنندج", "کرمانشاه", "اهواز", "مشهد", "اصفهان", "شیراز", "خرم آباد"];

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
        <CategoryCard title="خانه ویلایی" name="villa" />
        <CategoryCard title="آپارتمان" name="apartment" />
        <CategoryCard title="مغازه" name="store" />
        <CategoryCard title="دفتر" name="office" />
      </div>
    </div>
  );
}

export default HomePage;
