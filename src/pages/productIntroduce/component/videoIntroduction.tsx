import styles from './videoIntroduction.less';
import Mytitle from './title'

export default function VideoIntroduce() {
    return(
         <div className={styles.videoIntroduce}>
             <div className={styles.videoAndDescription}>
                 <Mytitle Name="视频介绍" EnglishName="Video Introduction"></Mytitle>
                 <div className={styles.innerVideo}>
                     <div className={styles.video}></div>
                     <a href="https://official-site-files.oss-cn-shanghai.aliyuncs.com/9148_oS4aCF2Xdp.mp4"></a>
                     <div className={styles.word}><p>&nbsp; &nbsp;&nbsp; &nbsp;2017-2020连续四年取得美国FDA认证。茶行业首个中国科学院院士工作站，国家高新技术企业，以尖端科技萃取原叶精华，用“纳米分子网”过滤掉原茶中可能存在的农残、重金属及发酵过程中可能产生的有害菌;通过对温度、湿度、光照、大气压的全方位把控，完整保留原茶中100多种有益物质;运用独家专利“分子团切割技术”，剔除多余氟元素，彻底规避饮茶过量时引发的问题。八分之三与孙汉董院士合作研发，致力于用科技创新造就健康精粹茶饮。</p>
                        <p>&nbsp; &nbsp;&nbsp; &nbsp;2016年八分之三鲜萃茶搭载神州十一号飞船上天，航天员景海鹏在天宫二号上泡制茶饮，完成了人类历史上的“太空第一杯茶”。八分之三随着航天员的脚步迈向了宇宙，是真正意义上的航天茶饮。</p>
                    </div>               
                 </div>
             </div>
        </div>
    );
}