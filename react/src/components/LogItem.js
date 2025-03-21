import './LogItem.css'
import Logdate from './LogDate'
import Logdetail from './LogDetail'
const logItem = () => {
    return <div className='log-item'>
        {/* 
            可以理解为把子组件返回的元素直接放到父组件中
            父组件中设置的样式对于子组件依旧生效(logitem开了flex布局)
            组件的摆放顺序也会影响页面渲染(Logdetail放前面使其在左显示)
        */}
        {/* <Logdetail /> */}
        <Logdate />
        <Logdetail />

    </div>
}
export default logItem