import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import styles from "@/module/Sidebar.module.css";

function Sidebar() {
  const queries = [{ villa: "ویلا" }, { apartment: "آپارتمان" }, { office: "دفتر" }, { store: "مغازه" }];

  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {queries.map((query) => (
        <Link key={Object.keys(query)} href={{ pathname: "/buy-residential", query: { category: Object.keys(query) } }}>
          {Object.values(query)}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
