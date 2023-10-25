import publicHttp from "./http/publicHttp.config";
import privateHttp from "./http/privateHttp.config";


export const getTaskToday = async (userId) => {
    return privateHttp({
        method: 'GET',
        url: `/overview/${userId}`,
    })
}


export const getTaskTodo = async (userId) => {
    return privateHttp({
        method: 'GET',
        url: `/todo/${userId}`,
    })
}

export const getTaskInprogress = async (userId) => {
    return privateHttp({
        method: 'GET',
        url: `/inprogress/${userId}`,
    })
}

export const getTaskDone = async (userId) => {
    return privateHttp({
        method: 'GET',
        url: `/done/${userId}`,
    })
}

export const getSearchTask = async (userId) => {
    return privateHttp({
        method: 'GET',
        url: `tasks/${userId}`,
    })
}

export const addTask = async (task) => {
    return privateHttp({
        method: 'POST',
        url: '/create_task',
        data:
            task

    })
}

export const getDetailTask = async (taskId) => {
    return privateHttp({
        method: 'GET',
        url: `task/${taskId}`,
    })
}


export const getCheckList = async (taskId) => {
    return privateHttp({
        method: 'GET',
        url: `task/checklist/${taskId}`,
    })
}

export const createCheckList = async(checklist) => {
    return privateHttp({
        method : 'POST',
        url : '/task/checklist',
        data : checklist
    })
}

export const ShareTask = async ( shareData) => {
    return privateHttp({
        method: 'POST',
        url: `task/share`,
        data: shareData
    })
}
export const getSharedList = async (taskId,userId) => {
    return privateHttp({
        method: 'GET',
        url: `/task/share-with-user`,
        params: {
            id: taskId,
            userId: userId
        }
    })
}
export const removeSharedUser = async ({taskId,userId}) => {
    return privateHttp({
        method: 'DELETE',
        url: '/task/share',
        data:{
            taskId,
            userId
        },

    })
}


export const removeCheckList = async ({checkListId}) => {
    return privateHttp({
        method: 'DELETE',
        url: '/task/checklist',
        data:{
            checkListId
        },

    })
}
export const removeTask = async ({taskId}) => {
    return privateHttp({
        method: 'DELETE',
        url: '/remove_task',
        data:
            {taskId},


    })
}

export const updateUserInfo = async (data) => {
    return privateHttp({
        method: 'PUT',
        url: '/user',
        data
    })
}


export const updateTaskInfo = async (data) => {
    return privateHttp({
        method: 'PUT',
        url: '/task/update',
        data
    })
}

export const updateCheckListInfo = async (data) => {
    return privateHttp({
        method: 'PUT',
        url: '/task/checklist/update',
        data
    })
}
