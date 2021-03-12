import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useEffect, useState } from 'react';

function App() {
  const [likeColor, setLickColor] = useState('')
  const [users, setUsers] = useState([]);
  const [singleUsers, setSingleUsers] = useState({});
  const [randomUsers, setRandomUsers] = useState({});
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then ( data => setUsers(data))

    /// SingleUsers
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then ( data => setSingleUsers(data))

    //// RandomUser
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then ( data => {
      console.log(data.results[0])
      setRandomUsers(data.results[0])})
  }, [])

  const handleLick = () => {
    // const color = likeColor ? '' : 'primary';
    // setLickColor(color);
    ///// OR
    // setLickColor(likeColor ? '' : 'primary');
  }
  return (
    <div>
      <AccessAlarmIcon></AccessAlarmIcon>
      {/* <ThumbUpAltIcon onClick={handleLick} color={likeColor}></ThumbUpAltIcon> */}
          {/* OR */}
      <ThumbUpAltIcon onClick={() => setLickColor(likeColor ? '' : 'primary')} color={likeColor}></ThumbUpAltIcon>
      <h1>Name : {singleUsers.name}</h1>
      {/* <h3>Random Gender Name : {randomUsers.name && randomUsers.name.first}</h3> */}
      {/* OR */}
      <h3>Random Gender Name : {randomUsers.name?.first}</h3>
      <h3>Random Gender : {randomUsers.gender}</h3>
      <p>Random Gender : {randomUsers.email}</p>
      {
        users.map(user=> <li>{user.name}</li>)
      }
    </div>
  );
}

export default App;
