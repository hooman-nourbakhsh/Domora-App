import styles from "@/module/TextInput.module.css";

function TextInput({ title, name, profileData, setProfileData, textarea = false }) {
  const changeHandler = (event) => {
    const { name, value } = event.target;

    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea type="text" name={name} value={profileData[name]} onChange={changeHandler} />
      ) : (
        <input type="text" name={name} value={profileData[name]} onChange={changeHandler} />
      )}
    </div>
  );
}

export default TextInput;
