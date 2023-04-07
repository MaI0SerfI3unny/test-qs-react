
import { NavLink } from "react-router-dom";

const ImageItem = ({ id, urls, user }) => {
    return (
        <NavLink to={`/${id}`}>
            <div className="photo_container">
                <div className="photo_item">
                    <img src={urls.full} alt={id}/>
                </div>
                <p>{user.first_name}</p>
            </div>
        </NavLink>
    )
}

export default ImageItem