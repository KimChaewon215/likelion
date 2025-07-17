import {axiosInstance} from './axios';

const login = async (code) => {
    const res = await axiosInstance.post('/auth/kakao',{
        code,
    });
    return res.data;
};

export default login;