import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
// 获取dom节点并创建react根容器
const root = ReactDOM.createRoot(document.getElementById('root'));
// 渲染react元素
root.render(<App />);