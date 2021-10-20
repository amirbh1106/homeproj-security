import {useEffect, useState} from 'react';
import Card from './card'
import './cardlist.css'

function Cardlist(props : any) {
    const[post , setposts] = useState<any>([])
    const[postarr , setpostarr] = useState<any>([])
    useEffect(() => {
      if(props !== {}){
        setposts(props.data?.items)
      }
      for(let i in post){
        setpostarr([...post ,i])
    }
    }, [post,props]);
    

    return(
        <div>
          <h1>number of posts: {postarr.length}</h1>
          {postarr && postarr.map((c: any , i: number) => {
             return<div className="card"><Card info={c} key={i}/></div>
          })}
           
        </div>
    )
}


export default Cardlist;