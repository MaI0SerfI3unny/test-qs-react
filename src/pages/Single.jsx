import { useState,useEffect } from "react";
import { useParams,NavLink } from "react-router-dom";
import { getPhotoById } from "../query/photo";

const Single = () => {
    const { id } = useParams();
    const [photoInfo, setPhotoInfo] = useState([])
    console.log(id)
    useEffect(() => {
        async function getData(){
            const { data } = await getPhotoById(id)
            setPhotoInfo(data)
          }
          getData()
    },[])
    console.log(photoInfo)
    return(
        <main>
            <div className="container_single">
                <NavLink to="/">Back</NavLink>
                <img src={photoInfo?.urls?.full} alt={photoInfo?.id}/>
            </div>
        </main>
    )
}

export default Single