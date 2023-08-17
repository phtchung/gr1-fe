import publicHttp from "./http/publicHttp.config";




export const getUser = async (userId) => {
    return publicHttp({
        method: 'GET',
        url: `users/${userId}`,
    })
}
