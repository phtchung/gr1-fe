import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import {getSearchTask, getTaskToday} from "../../services/taskService";

export default function useListTaskToday(){

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
        const totalTaskImportant = data.totalTaskImportant

        return {totalTaskDone , totalTask, totalTaskImportant, tasks };
    }, []);

    const parseData1 = useCallback((data) => {
        const tasks = data?.map((item) => {
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

        // const pagination = {
        //     total: data.pagination.total,
        //     currentPage: data.pagination.currentPage,
        //     totalPage: data.pagination.totalPage,
        //     limit: data.pagination.limit,
        // };
        return { tasks };
    }, []);



    const { data, isSuccess, isLoading, refetch } = useQuery({
        queryKey: ['taskToday', user_id],
        queryFn: () => getTaskToday(user_id),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data.data),
        enabled: !!user_id,
    });

    const { data : taskList, isSuccess : success, isLoading: loading } = useQuery({
        queryKey: ['searchTask', user_id],
        queryFn: () => getSearchTask(user_id),
        staleTime: 20 * 1000,
        select: (data) => parseData1(data.data),
        enabled: !!user_id,

    });
    console.log(taskList?.tasks)
    return {
        listTasks: data?.tasks,
        totalTask: data?.totalTask,
        totalTaskDone : data?.totalTaskDone,
        totalTaskImportant : data?.totalTaskImportant,
        isSuccess,
        isLoading,
        listTask : taskList?.tasks,
        success : success,
        loading : loading,
        refetch,
        // page,
        // limit,
        // totalPage: totalPage,
        // handlePageChange,
        // queryString, setQueryString
    };
}


