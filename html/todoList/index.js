const form = document.querySelector('.form');
const input = document.querySelector('.form_input');
const ul = document.querySelector('.todo_list');
const toDoListArray = []
//添加待办事项
form.addEventListener('submit',(e)=>{
    e.preventDefault(); //阻止表单的默认提交行为
    let itemId = String(Date.now()); //唯一id
    let toDoItem = input.value; //获取用户输入的内容
    //将新内容添加进数组
    addItemToArray(itemId,toDoItem);
    //渲染新内容至ul标签
    addItemToUl(itemId,toDoItem);
})

function addItemToArray(id, item){
    toDoListArray.push({
        itemId:id,
        toDoItem:item
    })
};

function addItemToUl(id, item){
    const li = document.createElement('li');
    li.textContent = item;
    li.setAttribute('data-id',id);
    ul.appendChild(li);
}

//移除待办事项
ul.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        const id = e.target.getAttribute('data-id'); //获取li标签的id
        removeItemFromArray(id); //从数组中删除
        e.target.remove(); //从ul标签中删除
    }
})

function removeItemFromArray(id){
    toDoListArray.forEach((item,index)=>{
        if(item.itemId === id){
            toDoListArray.splice(index,1); //从数组中删除
        }
    })
}