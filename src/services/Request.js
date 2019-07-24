import axios from 'axios';

class Request {

    static server = 'http://localhost:5000';

    static get = (path, cb, fail) => {
        axios.get(this.server + path)
        .then((response) => {
            cb(response);
        })
        .catch((error) => {
            fail(error);
        });
    };

    static post = (path, datas, success, fail) => {
        axios.post(this.server + path, datas)
        .then((response) => {
            success(response);
        })
        .catch((error) => {
            fail(error);
        });
    };

}

export default Request;
