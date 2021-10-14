import {useEffect , useState} from 'react';


function Profile(props: any){
    const[items , setitems] = useState<any>(props)
    useEffect(() => {
        if(props !== {}){
            setitems(props.data?.items)
        }
        console.log(items)
      }, [props,items]);
   
      if(items !== "undifined"){
        return(
            <div>
                <h1>{items?.account_id}</h1>
                 <img src={items?.profile_image} alt="profile_image" ></img>
                
            </div>
        )
      }else{
          return(
            <h1>1</h1>
          )
      }
   
}

export default Profile;
