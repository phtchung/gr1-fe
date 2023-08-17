import { useCallback } from 'react';

import { useQuery } from '@tanstack/react-query';
import {getTaskToday} from "../../services/taskService";

export default function useListTask(){

    // const { id } = useParams();
    const user_id = 1;

    const parseData = useCallback((data) => {
        const tasks = data?.tasks?.map((item) => {
            return {
                id: item.id,
                taskName: item.taskName,
                state: item.state,
                description: item.description,
                dateStart: item.dateStart,
                dateEnd: item.dateEnd,
                isNotify: item.isNotify,
                isImportant: item.isImportant,
                control: item.control,

            };
        });

        const totalTask = data.totalTask
        const totalTaskDone = data.totalTaskDone

        // const pagination = {
        //     total: data.pagination.total,
        //     currentPage: data.pagination.currentPage,
        //     totalPage: data.pagination.totalPage,
        //     limit: data.pagination.limit,
        // };
        return {totalTaskDone , totalTask, tasks };
    }, []);

    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ['task', user_id],
        queryFn: () => getTaskToday(user_id),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data.data),
        enabled: !!user_id,
    });
    console.log("check")
    console.log(data)
    return {
        listTasks: data?.tasks,
        totalTask: data?.totalTask,
        totalTaskDone : data?.totalTaskDone,
        isSuccess,
        isLoading,
        // page,
        // limit,
        // totalPage: totalPage,
        // handlePageChange,
        // queryString, setQueryString
    };
}


