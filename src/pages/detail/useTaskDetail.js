import {useCallback, useMemo} from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {getCheckList, getDetailTask, getSharedList} from "../../services/taskService";



export default function useTaskDetail() {
    const { id } = useParams();
    const userId = useMemo(() => localStorage.getItem('id'), []);
    const parseData = useCallback((data) => {
        if(data === undefined){
          return false
        }
        const taskData = {
            taskName: data?.taskName,
            state: data?.state,
            description: data?.description,
            dateStart: data?.dateStart,
            dateEnd : data?.dateEnd,
            control : data?.control,
        };
        return {
            taskData,
        };
    }, []);

    const parseData1 = useCallback((data) => {

        const checkListData = data?.map((item) => {
            return {
                taskId:item?.task.id,
                checkListId:item?.checkListId,
                title: item?.title,
                progress: item?.progress,
                dateEnd: `${new Date(item.dateEnd).getFullYear()}-${(new Date(item.dateEnd).getMonth() + 1).toString().padStart(2, '0')}-${new Date(item.dateEnd).getDate().toString().padStart(2, '0')}`,
                note:item?.note,
            };
        });
        return {  checkListData };
    }, []);

    const parseDataUser = useCallback((data) => {

        const sharedUser = data?.map((item) => {
            return {
                userId : item?.userId,
                name:item?.name,
                email: item?.email,
                phoneNumber: item?.phoneNumber,
                // control : item?.control,
            };
        });
        return {  sharedUser };
    }, []);



        const { data : checkList , isSuccess : success, isLoading : loading , refetch } = useQuery({
            queryKey: ['getCheckList', id],
            queryFn: () => getCheckList(id),
            staleTime: 10 * 1000,
            select: (data) => parseData1(data.data.data),
            enabled: !!id,
        });

    const { data : sharedList , isSuccess : sharedSuccess, isLoading : sharedLoading } = useQuery({
        queryKey: ['getSharedList', id,userId],
        queryFn: () => getSharedList(id,userId),
        staleTime: 10 * 1000,
        select: (data) => parseDataUser(data.data.data),
        enabled: !!id,
    });


    const { data , isSuccess, isLoading } = useQuery({
        queryKey: ['task_detail', id],
        queryFn: () => getDetailTask(id),
        staleTime: 10 * 1000,
        select: (data) => parseData(data.data.data),
        enabled: !!id,
    });

    return {
        taskData:data?.taskData,
        isSuccess,
        isLoading,
        checkListData:checkList?.checkListData,
        success,
        loading,
        sharedListUser : sharedList?.sharedUser,
        sharedSuccess,
        refetch,
        id,
    };
}
