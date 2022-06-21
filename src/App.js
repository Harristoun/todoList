import './style.css'
import {useState} from 'react'
function App() {
  


const [todos, setTodos] = useState([
   {text: 'Купить Бананы', favorite: true,},
   {text: 'Продать Квартиру', favorite: false,},
   {text: 'Выучить уроки intocode', favorite: true,},
]) 

  const deleteTodo = (indexRemovingItem) =>{
    const filtered = todos.filter((todo, index) =>{
    if(indexRemovingItem === index) {
      return false
    }
    return true
  })  
  setTodos(filtered)
   
  }
  
  const makeFavorite = (i) => {
const newTodos = todos.map((item, index)=> {
  if(i === index) {
   return {
    ...item,
    favorite: !item.favorite
   }
  }
  
  return item
})
setTodos(newTodos)
  }




  const newTodos = todos.map((todo, index)=>{

    
return  (<div className={`todo  ${todo.favorite ? 'selected' : ''}`}>
<div className='favorite'>
  <button className='stars' onClick={()=>makeFavorite(index)}>★</button>
</div>
<div className='todo-text'>{todo.text}</div>

<div className='actions'>
  <button onClick={() => deleteTodo(index)}>❌</button>
</div>
</div>
  )})
  

  return (
<div className='app'>
<div className='header'> Список дел </div>
<div className='form'></div>
<input type='text' />
<button className='cread'>Добавить</button>
<div className='todos'></div>
{newTodos}



</div>
  );
  
}

export default App;
