import { createEvent, getEvents, getEventGames } from "./EventManager.js"

import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

export const EventForm = () => {
    const [event, setEvent] = useState({})
    const [games, setGames] = useState([])
    const history = useHistory()

    useEffect(() => {
        getEvents().then(d => setEvent(d))
      }, [])

      useEffect(() => {
        getEventGames().then(d => setGames(d))
      }, [])


    const handleOnChange = (evt) => {
        const copyEvent = { ...evt }
        copyEvent[event.target.name] = event.target.value
        setState(copyEvent)
    }


    const saveEvent = (event) => {
        event.preventDefault()

        createEvent(event).then(() => {
            history.push('/events')
        })
    }

    return (
        <div>
            <label>Game:</label>
            <select name="game" className="form-control"
                        value={ event.game }
                        onChange={ handleOnChange }>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option value={game.id}>{game.title}</option>
                            ))
                        }
                    </select>
            <label>Event Description:</label>
            <input type="text" name="organizer" onchange={(evt) => handleOnChange(evt)}></input>
            <label>Date:</label>
            <input type="date" name="date" onchange={(evt) => handleOnChange(evt)}></input>
            <label>Time:</label>
            <input type="time" name="time" onchange={(evt) => handleOnChange(evt)}></input>
            <button onClick={(evt) => saveEvent(evt)}>Add New Event</button>
        </div>
    )

}