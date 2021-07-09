import styles from './index.less'
import { Button } from 'antd'
import { history,Link } from 'umi'


export default function ErrorPages(){
    function backToHome(){
        history.push('/')
    
    }
    return(
        <div>
        <Button onClick={backToHome}>返回主页</Button>
        <Link to="/">Go to home page</Link>
        </div>
    )

}