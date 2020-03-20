import axios from 'axios';

export default {
    getDummy: function(){return axios.get('https://randomuser.me/api/?results=200&nat=us')}
}