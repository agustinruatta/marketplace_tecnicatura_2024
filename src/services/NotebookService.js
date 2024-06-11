import axios from "axios";

const client = axios.create({
    baseURL: 'https://my-json-server.typicode.com/agustinruatta/fake_json_server_db',
    withCredentials: false,
})

export default {
    getNotebooks() {
        return client.get('/products');
    },

    getNotebook(id) {
        return client.get('/products/' + id);
    },

    getStatistics() {
        return client.get('/statistics');
    }
}