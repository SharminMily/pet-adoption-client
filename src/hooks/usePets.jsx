import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery,  } from '@tanstack/react-query';

const usePets = () => {
    const axiosPublic = useAxiosPublic()
    const { data: pets = [], isPending: loading, refetch } = useQuery({
        queryKey: ['pets'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allPets');
            return res.data;
        }
    })
    return [pets, loading, refetch]
};

export default usePets;