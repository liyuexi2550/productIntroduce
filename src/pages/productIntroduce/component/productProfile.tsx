import styles from './productProfile.less';
import Mytitle from './title'

export default function ProductIntroduce() {
    return(
     <div>
         <div className={styles.productIntroduce}></div>
             <div className={styles.picAndDescription}>
                 <Mytitle Name="产品简介" EnglishName="Product Profile"></Mytitle>
                 <div className={styles.profileBody}>
                 <img className={styles.pic} src="https://www.xiaomingtea.com/uploads/image/20201114/dc50e7727c3126c9e294cff99f0bc428.png" alt="access failed"/>
                 <div className={styles.productContent}>
                     <p>百克茶原叶凝萃一支茶浆精华，0糖、0卡、0脂。每一支试管茶浆，都经过了“常温仿生浸提、茶粉留香”等等八分之三独有的黑科技进行制茶，更大程度地保留了属于每支茶的风味，在口感、香气、回甘等等维度上，都更接近一杯现泡的茶汤。10ml小支便携装，更好锁鲜，随时随地，一杯“纯萃”。</p>
                     <div className={styles.knowMoreAndConnactUs}>
                         <div className={styles.knowMore}>了解更多</div>
                         <a><img className={styles.taobao} src="https://www.xiaomingtea.com/uploads/image/20201114/c759832ea9bdf371fe0f5a85cf472a59.png"></img></a>
                     </div>
                 </div>
                 </div>
             </div>
     </div>
     
    );
}