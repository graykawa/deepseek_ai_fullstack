import { useSelector, useDispatch } from 'react-redux'
import { add, addList } from '../../store/modules/counterStore'
import { useRef } from 'react'

export default function index() {
  // 使用数据
  let { count, list } = useSelector((state) => state.counter)
  const dispatch = useDispatch()  // 触发器
  // const addCount = () => {
  //   // 调用仓库中的 add 方法
  //   const action = add()
  //   dispatch(action)
  // }

  const inputRef = useRef(null)
  const listAdd = () => {
    const val = inputRef.current.value
    dispatch(addList(val))
  }

  return (
    <div>
      {/* <h3>{count}</h3>
      <button onClick={addCount}>+</button> */}

      <input type="text" ref={inputRef} />
      <button onClick={listAdd}>添加</button>
      <ul>
        {
          list.map(item => <li key={item}>{item}</li>)
        }
      </ul>
    </div>
  )
}
