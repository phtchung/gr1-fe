import {useCallback, useMemo} from 'react';
import { useQuery } from '@tanstack/react-query';
import USER, {getUser} from "../../services/userService";

export default function useUser(){

    const token = useMemo(() => localStorage.getItem('token'), []);
    const user_id = useMemo(() => localStorage.getItem('id'), []);

    const parseData = useCallback((data) => {

        const user = {
                id: data.userId,
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber,
                profileUrl: data.profileUrl == null ? '' : data.profileUrl,
                about: data.about,
                birthday: `${new Date(data.birthday).getFullYear()}-${(new Date(data.birthday).getMonth() + 1).toString().padStart(2, '0')}-${new Date(data.birthday).getDate().toString().padStart(2, '0')}`,
                gender: data.gender,
        }
        return { user };
    }, []);


    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ['getUser', user_id],
        queryFn: () => USER.getUser({userId:user_id}),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data.data),
        enabled: !!user_id,
    });



    return {
        userData: data?.user,
        isSuccess,
        isLoading,

    };
}
