import styles from "./inDevelopmentPage.module.css"

export const OrderFeed = () => {
    return (
      <div className={styles.boxInDev}>
         <h2 className={styles.titleInDev}>Лента заказов</h2>
         <p className={styles.informationInDev}> страница находится в разработке</p>
      </div>
    )
  };