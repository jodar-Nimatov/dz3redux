import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, removeUser } from './redux/reducers/users';

function App() {
    const dispatch = useDispatch()
    const users = useSelector((store) => store.users.users)
    const usersCount = useSelector((store) => store.users.usersCount)
  return (
    <div className="App">
      <h2 style={{marginBottom: '30px'}}>Users: {usersCount}</h2>
      <ul>
        {users.map((item) => (
          <li style={{marginBottom: '10px', border: '1px solid red', width: '200px', marginLeft: '530px', padding: '5px', textAlign: 'center', listStyle: 'none'}} key={item.id}>
            {item.name} {item.age}
            <button style={{marginLeft: '20px'}} type='button' onClick={() => dispatch(removeUser(item.id))}>Удалить</button>
          </li>

        ))}
      </ul>

      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(addUsers(e.target[0].value, e.target[1].value))
          e.target[0].value = ''
          e.target[1].value = ''

      }}>
        <input style={{marginTop: '60px'}} placeholder='name' type='text'/>
        <br />
        <br />
        <input placeholder='age' type='number'/>
        <br />
        <br />
        <button type='submit'>Добавить</button>
      </form>
    </div>
  );
}

export default App;
