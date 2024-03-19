
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
    const axiosSecure = useAxiosSecure()

    const {user} = useContext(AuthContext);

    const { refetch, data: cart = [], loading } = useQuery({
       queryKey: ['cart', user?.email],
       queryFn: async() => {
        const res = await axiosSecure.get(`/carts?email=${user.email}`)
        return res.data;
       }
    })
    return [cart, refetch, loading]
};

export default useCart;