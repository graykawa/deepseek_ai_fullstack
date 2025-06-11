// 页面初次加载时，获取到用户信息进行展示
window.onload = async function () {
    const users = await fetchUsers();
    renderUsers(users);
}
async function fetchUsers(name) {
    //向后端发送请求，获取用户信息
    const res =  await fetch(`http://localhost:3000/api/users?name=${name}`); // 接口地址
    const users = await res.json(); // 解析返回的JSON数据
    return users.data;
}

const tbody = document.querySelector('tbody');
function renderUsers(users) { //渲染用户信息
    tbody.innerHTML = ``
    for(let i = 0;i < users.length;i++){ //遍历用户信息数组，将每个用户信息渲染到页面中
        const user = users[i]; //获取当前用户信息
        const tr = document.createElement('tr'); //创建一个tr元素
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
        `; //将用户信息渲染到tr元素中
        tbody.appendChild(tr); //将tr元素添加到tbody元素中
    }
}

// 输入姓名，点击查询按钮，查询用户信息
const btn = document.querySelector('.search-container button');
const input = document.querySelector('#nameSearch');
btn.addEventListener('click',async ()=>{
    // 获取输入框的值
    // 向后端发送请求，将输入框的值作为参数传递给后端，获取用户信息
    const users = await fetchUsers(input.value); // 接口地址
    renderUsers(users);
})