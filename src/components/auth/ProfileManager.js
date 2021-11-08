export const getProfile = () => {
    return fetch('http://localhost:8000/user_profile', {
        headers: {
          'Authorization': `Token ${localStorage.getItem('lu_token')}`
        }
      }).then(res => res.json())
    }
