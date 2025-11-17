import styles from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={styles?.loader}>
            <div className={styles?.circle}></div>
            <div className={styles?.loader1}></div>
            <div className={styles?.loader2}></div>
            <div className={styles?.loader3}></div>
            <div className={styles?.loader4}></div>
        </div>
    );
}
export default Loader
