import axios from 'axios';
import {useState} from 'react';
import './App.css';
import Searchbar from './components/searchbar/searchbar';
import Profile from './components/profilecomponent/profile';
import Cardlist from './components/postcards/cardlist';


function App() {
  const [id , setid] = useState("")
  const[res , setres] = useState<any>({})
  function getuserid(value : any){
      setid(value)
      if(res !== {}){
      axios("https://api.stackexchange.com/2.3/users/1264804?order=desc&sort=reputation&site=stackoverflow")
      .then(function (response) {
        setres({})
        setres(response)
      })
    }
  }

if(res !== {}){
  return (
    <div className="App">
      <h1>welocme to stack over flow page app</h1>
      <Searchbar getid={getuserid} id={id}/>
      {id && 
      <div>
      <Profile {...res}/> 
      <Cardlist />
      </div>
      }
    </div>
  );
}else{
  return (
    <div className="App">
      <Searchbar getid={getuserid} id={id}/>
    </div>
  )
}

}

export default App;
