import {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './card'

function Cardlist(){
    const[post , setposts] = useState<any>()
    useEffect(() =>{
        axios("https://api.stackexchange.com/2.3/users/1264804?order=desc&sort=reputation&site=stackoverflow")
      .then(function (response) {
        setposts(response.data)
      })
    },[])
    return(
        <div>
          {post && post.items.map((c: any , i: number) => {
             return <Card info={c} key={i}/>
          })}
           
        </div>
    )
}


export default Cardlist;