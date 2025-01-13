"use client";
import Card from "@/module/Card";
import styles from "@/module/DashboardCard.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
const editHandler = () => {};
const deleteHandler = () => {};

function DashboardCard({ data }) {
  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          حذف آگهی <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;
