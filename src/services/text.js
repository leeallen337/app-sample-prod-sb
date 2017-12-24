import axios from 'axios';

const text = {
  getText() {
    return axios.get('https://polar-stream-74732.herokuapp.com/api/v1')
      .then((data) => {
        return data;
      })
      .catch((err) => err);
  }
};

export default text;
