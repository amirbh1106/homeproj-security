import {useEffect , useState} from 'react';


function Profile(props: any){
    const[items , setitems] = useState<any>(props)
    useEffect(() => {
        if(props !== {}){
            setitems(props.data?.items)
        }
      }, [props]);
    
        return(
            <div>
                { items &&
                <div>
                <h1>{items[0]?.display_name}</h1>
                <img src={items[0]?.profile_image} alt="profile_image" ></img>
                <h1>reputation: {items[0]?.reputation}</h1><h1>accept rate: {items[0]?.accept_rate}</h1>
                </div>
                }
            </div>
        )
}

export default Profile;
