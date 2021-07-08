import styles from './videoIntroduction.less';
import Mytitle from './title'

export default function ProductSuperiority() {
    return(
         <div className={styles.productSuperiority}>
             <div className={styles.productAndDescription}>
                 <Mytitle Name="产品优势" EnglishName="Product Superiority"></Mytitle>
                 <div className={styles.grid}>
                     <img className={styles.gridItem1} src="https://www.xiaomingtea.com/template/default/index/images/grid1.png"/>
                     <img className={styles.gridItem2} src="https://www.xiaomingtea.com/template/default/index/images/grid2.png"/>
                     <img className={styles.gridItem3} src="https://www.xiaomingtea.com/template/default/index/images/grid3.png"/>
                     <img className={styles.gridItem4} src="https://www.xiaomingtea.com/template/default/index/images/grid4.png"/>
                 </div>
             </div>
     </div>
     
    );
}