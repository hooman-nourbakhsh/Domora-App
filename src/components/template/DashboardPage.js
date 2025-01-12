import styles from "@/template/DashboardPage.module.css";

function DashboardPage() {
  return (
    <div className={styles.cotainer}>
      <h3>سلام 👋</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className={styles.createdAt}><p>تاریخ عضویت:
        <span></span></p></div>
    </div>
  );
}

export default DashboardPage;
