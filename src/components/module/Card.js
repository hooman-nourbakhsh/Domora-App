import Link from "next/link";
import { sp } from "@/utils/replaceNumber";
import { icons } from "@/constants/icon";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import styles from "@/module/Card.module.css";

function Card({ data: { _id, category, title, location, price } }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} تومان</span>
      <Link href={`/buy-residential/${_id}`}>
        مشاهده آگهی <BiLeftArrowAlt />
      </Link>
    </div>
  );
}

export default Card;
