


function Card(props : any){
    console.log(props.info)
    return(
        <div>
            <h1>{props.info.title}</h1>
        </div>
    )
    }



    export default Card;