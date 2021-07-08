import styles from './index.less';
import ProductIntroduce from './component/productProfile';
import VideoIntroduce from './component/videoIntroduction';
import MyHeader from '@/pages/header/header';
import Banner from './component/banner';
import ProductSuperiority from './component/productSuperiority'
export default function Product() {
    return (
        <div className={styles.combine}>
            <MyHeader />
            <Banner />
            <ProductIntroduce />
            <VideoIntroduce />
            <ProductSuperiority />
            <div className={styles.img2}>
                <img src="https://www.xiaomingtea.com/template/default/index/images/title.png" />
            </div>
            <footer>
                <div className={styles.container}>
                    <img className={styles.sign} src="https://www.xiaomingtea.com/uploads/image/20201114/dc813341984be521112cc85257ab1ab8.png"/>
                    <div className={styles.ourInfo}>
                        <ul>
                            <li>地址：浙江省宁波市鄞州区学士路655号鄞州科技信息孵化园C栋903室</li><br />
                            <li>邮箱：business@xiaomingtea.com</li><br />
                            <li>热线：400-926-2016</li><br />
                        </ul>
                    </div>
                    <div>
                        <img className={styles.code} src="https://www.xiaomingtea.com/uploads/image/20201116/0fe5d00ce74fcf7b004c242b0e09b5d6.jpg" />
                        <img className={styles.code} src="https://www.xiaomingtea.com/uploads/image/20201116/0fe5d00ce74fcf7b004c242b0e09b5d6.jpg" />
                 </div>
                    </div>
         </footer>
     </div>

            );
}