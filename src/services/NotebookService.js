import axios from "axios";

const client = axios.create({
    baseURL: 'https://my-json-server.typicode.com/agustinruatta/fake_json_server_db',
    withCredentials: false,
})

export default {
    getNotebooks() {
        return client.get('/products');
    },

    getNotebook() {
        return client.get('/products/1');
    },

    getStatistics() {
        return client.get('/statistics');
    }
}