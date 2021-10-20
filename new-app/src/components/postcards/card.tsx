import {useState} from 'react';
 

function Card(props : any){
    const[clicked, setclicked] = useState<boolean>(false)
    console.log(props.info)
    function handleclick(){
        setclicked(!clicked)
    }
    return(
        <div>
            <h1 onClick={handleclick}>{props.info.title} {'  >'}</h1> 
            {clicked && 
            <div>
                <a href={props.info.link} style={{fontSize: '2vw'}}>click here for post</a>
            </div>}
        </div>
    )
    }



    export default Card;