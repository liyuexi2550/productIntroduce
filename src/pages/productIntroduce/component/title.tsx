import { IRouteProps } from 'umi';
import styles from './title.less';

export default function Mytitle(props:any) {
    return(
        <div className={styles.title}>
            <div className={styles.circle}></div>
            <h3 className={styles.Name}>{props.Name}</h3>
            <h4 className={styles.English}>{props.EnglishName}</h4>
        </div>
    );
}