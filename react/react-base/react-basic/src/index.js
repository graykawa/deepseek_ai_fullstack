import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // 代码块（组件）

// 获取到 html文件中的id 为 root 的那个 div元素
// 将 div 进行修饰，让它能盛放 react 中的组件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

