export const getEvents = () => {
    return fetch('http://localhost:8000/events', {
      headers: {
        'Authorization': `Token ${localStorage.getItem('lu_token')}`
      }
    }).then(res => res.json())
  }

  export const createEvent = (event) => {
    return fetch("http://localhost:8000/events", {
      method: "POST",
      headers: {
        "Authorization": `Token ${localStorage.getItem("lu_token")}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
     })
        
  }

  export const getEventGames = () => {
    return fetch("http://localhost:8000/games", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const leaveEvent = eventId => {
    return fetch(`http://localhost:8000/events/${ eventId }/signup`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(getEvents)
}

export const getEvent = (eventId) => {
  return fetch(`http://localhost:8000/events/${eventId}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }
  })
    .then(response => response.json())
}
export const updateEventsFetch = (event) => {
  return fetch(`http://localhost:8000/events/${event.id}`, {
    method: "PUT",
    headers: {
      "Authorization": `Token ${localStorage.getItem("lu_token")}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
   })
      
}

export const joinEvent = eventId => {
    return fetch(`http://localhost:8000/events/${ eventId }/signup`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
        .then(getEvents)
}

export const updateEvent = (event) => {
  return fetch("http://localhost:8000/events", {
    method: "PUT",
    headers: {
      "Authorization": `Token ${localStorage.getItem("lu_token")}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
   })
      
}
