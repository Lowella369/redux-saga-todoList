import axios from "axios"
export const fetchData = async () => {
  try {
    return axios ({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos/1'
  }).then( resp => resp.data );
  } catch (e) {
    console.log(e);
  }
};
