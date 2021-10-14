import axios from 'axios';
import {useState} from 'react';
import './App.css';
import Searchbar from './components/searchbar/searchbar';
import Profile from './components/profilecomponent/profile';



function App() {
  const [id , setid] = useState("")
  const[res , setres] = useState<any>({})
  function getuserid(value : any){
      setid(value)
      axios("https://api.stackexchange.com/2.3/users/1264804?order=desc&sort=reputation&site=stackoverflow")
      .then(function (response) {
        setres({})
        setres(response)
      })
  }
  
  return (
    <div className="App">
      <Searchbar getid={getuserid} id={id}/>
      <Profile {...res}/>
    </div>
  );
}

export default App;
