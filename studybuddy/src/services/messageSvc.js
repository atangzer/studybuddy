import axios from 'axios';

const backendUrl = 'http://localhost:8080'

const createMsg = async(msg) => {
    let res = {};
    try {
        res = await axios.post(`${backendUrl}/api/messages`, {msg: msg});
        return res.data;
    } catch (err) {
        console.log(err);
        return res;
    }
};

const getMsg = async() => {
    let res = {};
    try {
        res = await axios(`${backendUrl}/api/messages`);
        return res.data;
    } catch (err) {
        console.log(err);
        return res;
    }
}

export { getMsg, createMsg };