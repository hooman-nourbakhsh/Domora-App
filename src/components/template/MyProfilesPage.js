import DashboardCard from "@/module/DashboardCard";
import styles from "@/template/MyProfilesPage.module.css";

function MyProfilesPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : <p className={styles.text}>شما هیچ اگهی ای ثبت نکرده اید</p>}
      {profiles.map((item) => (
        <DashboardCard key={item._id} data={JSON.parse(JSON.stringify(item))} />
      ))}
    </div>
  );
}

export default MyProfilesPage;
