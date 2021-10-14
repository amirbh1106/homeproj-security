import {useState } from 'react';
import './searchbar.css';
import Button from '@mui/material/Button';


function Searchbar(props : any){
const[input , setinput] = useState<number>(0);

 function handleChange(e: any){
     setinput(e.target.value)
}
function handleKeyPress(e:any){
    if (e.key === "Enter"){
        props.getid(input)
    }
}
function onClick(){
    props.getid(input)
}

    return(
        <div onKeyPress={handleKeyPress}>
            <input className="searchbar" value={input} onChange={handleChange} ></input>
            <Button className="searchbutton" variant="contained" onClick={onClick}>search</Button>
        </div>
    )
}


export default Searchbar;