import styles from './index.less';

export default function MyHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
         <div className={styles.logo}>
           <img src="https://www.xiaomingtea.com/uploads/image/20201114/402a93e6ddec1709d1ee106fe8d0d5b6.png"></img>
         </div>
         <div className={styles.menu}>
           <ul className="">
             <li><a href="#" target="_blank" className={styles.tab}>首页</a></li>
             <li><a href="#" target="_blank" className={styles.tab}>关于小茗堂</a></li>
             <li><a href="#" target="_blank" className={styles.tab}>产品介绍</a></li>
             <li><a href="#" target="_blank" className={styles.tab}>新闻咨询</a></li>
             <li><a href="#" target="_blank" className={styles.tab}>联系我们</a></li>
           </ul>
         </div>
         <div className={styles.phone}>
           <img src="https://www.xiaomingtea.com/template/default/index/images/phone.png"></img>
           "400-926-2016"
         </div>
      </div>
    </header>
  );
}
