import axios from "axios"
const add_user_url = 'http://localhost:8080/api/v1/client/registration'

export const add_new_user_req = async (user) => {
  try {
    const response = await axios.post(add_user_url, user);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}



// export const add_new_user_req = (user) => {

//   fetch('http://localhost:8080/api/v1/client/registration', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(user)
//   })
//     .then(res => res.json())
//     .then(json => console.log(json))

// }