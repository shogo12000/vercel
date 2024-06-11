import PropTypes from "prop-types";
import UserFavoriteFood from "./UserFavoriteFood";
import { UserUsername } from "./UserUsername";

function UserProfile(){
    return (
        <div>
            <p>Username: <UserUsername name="shogoteste"/></p>
            <div>
                <span>Email: </span>
                <span>shogo@hotmail.comteste</span>
            </div>
            <UserFavoriteFood working={true} foods={['italian','mexican','japanese']}/>
        </div>
    )
}


UserProfile.propTypes = {
    working: PropTypes.bool
}


export default UserProfile;
