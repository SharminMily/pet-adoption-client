import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const UserHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
              <span>Hi, Welcome </span>
            {
                user?.displayName ? user.displayName : "Back"
            }
        </div>
    );
};

export default UserHome;