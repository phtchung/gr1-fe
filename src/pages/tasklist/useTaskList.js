import {useCallback, useMemo} from 'react';

import { useQuery } from '@tanstack/react-query';
import {  getTaskDone, getTaskInprogress, getTaskTodo} from "../../services/taskService";
import {formatDate} from "../../utils/constant";



export default function useListTask(){
    // const { id } = useParams();
    const user_id = useMemo(() => localStorage.getItem('id'), []);



    const parseData = useCallback((data) => {
        const tasks = data?.map((item) => {
            return {
                id: item.id,
                taskName: item.taskName,
                state: item.state,
                description: item.description,
                dateStart: formatDate(item.dateStart),
                dateEnd: formatDate(item.dateEnd),
                isNotify: item.isNotify,
                isImportant: item.isImportant,
                control: item.control,

            };
        });
        return {  tasks };
    }, []);



    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ['todo', user_id],
        queryFn: () => getTaskTodo(user_id),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data),
        enabled: !!user_id,
    });
    const { data : inProgressData, isSuccess : isProgressSuccess, isLoading: isProgressLoading } = useQuery({
        queryKey: ['inprogress', user_id],
        queryFn: () => getTaskInprogress(user_id),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data),
        enabled: !!user_id,

    });

    const { data : doneData, isSuccess : doneSuccess, isLoading: doneLoading } = useQuery({
        queryKey: ['done', user_id],
        queryFn: () => getTaskDone(user_id),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data),
        enabled: !!user_id,

    });


    return {
        listTaskTodo: data?.tasks,
        isSuccessTodo: isSuccess,
        isLoadingTodo: isLoading,
        listTaskInProgress: inProgressData?.tasks,
        isSuccessInProgress : isProgressSuccess,
        isLoadingInProgress: isProgressLoading,
        listTaskDone : doneData?.tasks,
        isSuccessDone : doneSuccess,
        isLoadingDone : doneLoading,

    };



}


