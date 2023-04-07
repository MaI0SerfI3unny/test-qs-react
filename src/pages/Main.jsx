import { useState,useEffect } from "react"
import { getPhoto } from "../query/photo"
import ImageItem from "../components/ImageItem/ImageItem";

const Main = () => {
    const [listPhoto, setListPhoto] = useState([])
    useEffect(() => {
      async function getData(){
        const { data } = await getPhoto()
        setListPhoto(data)
      }
      getData()
    },[])
    return(
        <main>
            <div className="wrapper">
                {listPhoto.map((el,key) => 
                    <ImageItem key={key} {...el}/>)}
            </div>
        </main>
    )
}

export default Main