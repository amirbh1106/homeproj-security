import {useEffect, useState} from 'react';


function Profile(props: any){
    const[state , setstate] = useState<any>({})
    useEffect(() =>{
        // setstate(props.items);
        console.table(props.items)
    },[props.items])
    return(
        <div>
            {/* <h1>{state?.account_id}</h1> */}
            {/* <img src={state?.items.profile_image}></img> */}
        </div>
    )
}

export default Profile;
