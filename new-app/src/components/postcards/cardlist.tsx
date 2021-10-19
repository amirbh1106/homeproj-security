import {useEffect, useState} from 'react';
import Card from './card'
import './cardlist.css'
import { ButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';

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
    

    // function jsontoarray(){
    
    // }
    return(
        <div>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>date</Button>
            <Button>answers</Button>
          </ButtonGroup>
          <h1>number of posts: {postarr.length}</h1>
          {postarr && postarr.map((c: any , i: number) => {
             return<div className="card"><Card info={c} key={i}/></div>
          })}
           
        </div>
    )
}


export default Cardlist;