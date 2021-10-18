import axios from 'axios';
import {useState} from 'react';
import './App.css';
import Searchbar from './components/searchbar/searchbar';
import Profile from './components/profilecomponent/profile';
import Cardlist from './components/postcards/cardlist';


function App() {
  const [id , setid] = useState("")
  const[userres , setuserres] = useState<any>({})
  const[userpostres , setuserpostres] = useState<any>({})
  function getuserid(value : any){
      setid(value)
      if(userres !== {}){
      axios("https://api.stackexchange.com/2.3/users/1264804?order=desc&sort=reputation&site=stackoverflow")
      .then(function (response) {
        setuserres({})
        setuserres(response)
      })
    }
  getuserposts()
  }

  function getuserposts(){
    axios("https://api.stackexchange.com/2.2/users/1264804/questions?order=desc&sort=activity&site=stackoverflow")
    .then(function (response) {
      setuserpostres({})
      setuserpostres(response)
    })
  }

if(userres !== {} && userpostres !== {}){
  return (
    <div className="App">
      <h1>welocme to stack over flow page app</h1>
      <Searchbar
       getid={getuserid}
        id={id}
        />
      {id && 
      <div>
      <Profile {...userres}/> 
      <Cardlist {...userpostres}/>
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
