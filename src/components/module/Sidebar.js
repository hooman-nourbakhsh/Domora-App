import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categories } from "@/constants/strings";
import styles from "@/module/Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {Object.keys(categories).map((category, index) => (
        <Link key={index} href={{ pathname: "/buy-residential", query: { category } }}>
          {categories[category]}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
