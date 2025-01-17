import { BiCalendarCheck } from "react-icons/bi";
import { icons } from "@/constants/icon";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import ItemList from "@/module/ItemList";
import Title from "@/module/Title";
import { e2p, sp } from "@/utils/replaceNumber";
import styles from "@/template/DetailsPage.module.css";
import ShareButton from "@/module/ShareButton";
import { categories } from "@/constants/strings";

function DetailsPage({ data: { title, location, description, amenities, rules, realEState, phone, price, category, constructionDate } }) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p>{description}</p>
        <Title>امکانات رفاهی</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realEState}>
          <SiHomebridge />
          <p>املاک : {realEState}</p>
          <span>
            <AiOutlinePhone /> {e2p(phone)}
          </span>
        </div>
        <ShareButton />
        <div className={styles.price}>
          <p>
            {icons[category]}
            {categories[category]}
          </p>
          <p>{sp(price)} تومان</p>
          <p>
            <BiCalendarCheck />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
