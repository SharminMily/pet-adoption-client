/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialAccount = () => {

    const {googleSignIn } = useContext(AuthContext);
	const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();


    const handleGoogle = () => {  
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                image: result.user?.photoURL
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
			// navigate('/')
            // navigate(location?.state? location.state : '/')
        })
    }

    return (
        <div>
            <div className="">
            <div>
                <button  onClick={() => handleGoogle(googleSignIn)} className="w-full px-10 p-2 text-center bg- border-2  rounded-lg border-[#DCE0EB] fint-bold bg-[#b5b9c7]">
                    Google
                </button>
            </div>
            <div>
            <button className="w-full p-2 mt-3 text-center bg- border-2 px-10 rounded-lg border-[#DCE0EB] fint-bold bg-[#b5b9c7]">
            Github
                </button>
               
            </div>           
            <div>
            <button className="w-full p-2 mt-3 text-center bg- border-2 px-10 border-[#DCE0EB] fint-bold bg-[#b5b9c7]">
            Facebook
                </button>
               
            </div>           
            </div>
        </div>
    );
};

export default SocialAccount;