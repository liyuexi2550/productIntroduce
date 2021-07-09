import { IRouteProps } from 'umi';
import styles from './title.less';

export default function Mytitle(props:any) {
    const {Name,EnglishName}  = props
    return(
        <div className={styles.title}>
            <div className={styles.circle}></div>
            <h3 className={styles.Name}>{Name}</h3>
            <h4 className={styles.English}>{EnglishName}</h4>
        </div>
    );
}