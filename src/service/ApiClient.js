import useAxios from "./ApiService";


export const getOtp = (phone) => {
    return useAxios.get(`/get-sms?phone=${phone}`);
}
export const editUserName = (fullName) => {
    return useAxios.post(`/user/update-name?full_name=${fullName}`);
}

export const editPhoneNumber = (verifyData) => {
    return useAxios.post(`/user/update-phone`,verifyData);
}
export const verifyCode = (verifyData) => {
    return useAxios.post('/verify-code', verifyData);
}

export const register = (registerData) => {
    return useAxios.post('/register', registerData)
}

export const initializeRequest = (checkSumSelector) => {
    return useAxios.get(`/initialize-request`, { params: { ...checkSumSelector } })
}

export const getTickets = () => {
    return useAxios.get(`/tickets/index`, { params: { offset: 0 } })
}

export const getTicketsMessage = (ticket_code) => {
    return useAxios.get(`/tickets/show`, { params: { ticket_code } })
}

export const getFAQ = () => {
    return useAxios.get(`/faqs`)
}
export const addMessageReply = (data) => {
    return useAxios.post(`/ticket-replies/add`, data)
}
export const addNewTicket = (data) => {
    return useAxios.post(`/tickets/add`, data)
}
export const sendCompleteRequest = (ticket_reply_id) => {
    ;
    return useAxios.post(`/ticket-replies/complete?ticket_reply_id=${ticket_reply_id}`)
}

export const sendMessageFile = (ticket_reply_id, data, progressEvent, signal) => {
    console.log("SDvsdvsdvsd", data);
    return useAxios.post(`/ticket-replies/add-file?ticket_reply_id=${ticket_reply_id}`, data.file, {
        onUploadProgress: progressEvent,
        signal: signal
    }, {
        headers: {
            'accept': 'application/json',
            "Content-Type": "multipart/form-data"
        }
    })
}
export const getProfile = () => {
    return useAxios.get("/profile/show")
}
export const getPlans = () => {
    return useAxios.get("/plans")
}
export const createInvoice = (plansData) => {
    return useAxios.post("/invoice/create", plansData)
}
export const applyCoupon = (couponData) => {
    return useAxios.get("/coupon/apply", { params: { ...couponData } })
}
export const getAboutUs = () => {
    return useAxios.get('/about-us')
}
export const getHome = () => {
    return useAxios.get('/home')
}
export const getSetting = () => {
    return useAxios.get("/setting")
}
export const postStreamQuality = (straemQuality) => {
    return useAxios.post('/user/update-stream-quality', straemQuality)
}
export const getArtistVideos = (videoData) => {
    return useAxios.get(`/videos`, { params: { ...videoData } })
}
export const getArtist = (id) => {
    return useAxios.get(`/artists/show?artist_id=${id}`)
}
export const postLike = (likeData) => {
    return useAxios.post("/like", likeData)
}
export const deleteLike = (unlikeData) => {
    return useAxios.delete("/unlike", { params: { ...unlikeData } })
}
export const postFollow = (followData) => {
    return useAxios.post("/follow", followData)
}
export const deleteFollow = (unFollowData) => {
    return useAxios.delete("/unfollow", { params: { ...unFollowData } })
}
export const getArtists = (s) => {
    return useAxios.get(`/artists/popular?search_query=${s}`)
}
export const searchVideos = (s) => {
    return useAxios.get(`/videos?search_query=${s}`)
}
export const userDevices = () => {
    return useAxios.get(`/user-devices`)
}
export const deleteUserDevices = (token) => {
    return useAxios.post(`/user-devices/delete?token=${token}`)
}

export const deleteOtherUserDevices = (token) => {
    return useAxios.post(`/user-devices/delete-other-devices`)
}