import styles from './videoIntroduction.less';
import Mytitle from './title'

let url = [
    {
        clsName:"{styles.gridItem1}",
        src:"https://www.xiaomingtea.com/template/default/index/images/grid1.png"
    },
    {
        clsName:"{styles.gridItem2}",
        src:"https://www.xiaomingtea.com/template/default/index/images/grid2.png"
    },
    {
        clsName:"{styles.gridItem3}",
        src:"https://www.xiaomingtea.com/template/default/index/images/grid3.png"
    },
    {
        clsName:"{styles.gridItem4}",
        src:"https://www.xiaomingtea.com/template/default/index/images/grid4.png"
    }
]
export default function ProductSuperiority() {
    return(
         <div className={styles.productSuperiority}>
             <div className={styles.productAndDescription}>
                 <Mytitle Name="产品优势" EnglishName="Product Superiority"></Mytitle>
                 <div className={styles.grid}>
                     {
                            url.map((item)=>{
                                return(
                                    <img className={item.clsName} src={item.src}   /> 
                                )
                            })
                     }
                
                 </div>
             </div>
     </div>
     
    );
}