
export default function getAuthHeader() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
  
    if (user && user.token) {
      // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
      return { 'Authorization': user.token };       // for Node.js Express back-end
    } else {
      return false;
    }
  }