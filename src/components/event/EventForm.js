import { createEvent, getEvents } from "./EventManager.js"
import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

export const EventForm = () => {
    const [event, setEvent] = useState({})
    const history = useHistory()

    useEffect(() => {
        getEvents().then(d => setEvent(d))
      }, [])


    const handleOnChange = (evt) => {
        const copyEvent = { ...evt }
        copyEvent[event.target.name] = event.target.value
        setState(copyEvent)
    }

    const saveEvent = (event) => {
        event.preventDefault()

        createEvent(event).then(() => {
            history.push('/')
        })
    }

    return (
        <div>
            <label>Description:</label>
            <input type="text" name="description" onchange={(evt) => handleOnChange(evt)}></input>
            <label>Organizer:</label>
            <input type="text" name="organizer" onchange={(evt) => handleOnChange(evt)}></input>
            
            <label>Date:</label>
            <input type="date" name="date" onchange={(evt) => handleOnChange(evt)}></input>
            <label>Time:</label>
            <input type="time" name="time" onchange={(evt) => handleOnChange(evt)}></input>
            <button onClick={(evt) => saveEvent(evt)}>Add New Event</button>
        </div>
    )

}