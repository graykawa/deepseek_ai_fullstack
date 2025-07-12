// import './App.css'
// function App() {
//   const name = '超超'
//   const songs = [
//     { id: 1, name: '素颜' },
//     { id: 2, name: '平凡之路' },
//     { id: 3, name: '岁月神偷' },
//     { id: 4, name: '小幸运' },
//     { id: 5, name: '演员' }
//   ]
//   const flag = false
//   const styleObj = {
//     color: 'green'
//   }

//   return (
//     <div className="App">
//       <h1>你好，{name}！</h1>
//       {/* <ul>
//         {
//           songs.map((item, index) => {
//             return <li key={item.id}>{index+1}.{item.name}</li>
//           })
//         }
//       </ul> */}

//       {/* <h3>{flag ? 'react 真有意思！' : 'react真难'}</h3>
//       <div>{flag ? <span>react 真好玩</span> : null}</div> */}


//       {/* <div style={{color: 'red'}}>超超最帅</div>
//       <div style={styleObj}>杰哥不服</div>
//       <div className="person">赖总说你们不行</div> */}


//       <div className={flag ? 'title' : ''}>胡总要试小米</div>


//     </div>
//   )
// }
// export default App;



import List from './components/List.js'
function App() {  // 根组件  父组件
  const songs = [
    { id: 1, name: '素颜' },
    { id: 2, name: '平凡之路' },
    { id: 3, name: '岁月神偷' },
    { id: 4, name: '小幸运' },
    { id: 5, name: '演员' }
  ]

  return (
    <div>
      <h1>hello react</h1> 
      {/* list */}

      <List data={songs}></List>
    </div>
  )
}

export default App;