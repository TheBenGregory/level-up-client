import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getEvents, joinEvent, leaveEvent } from "./EventManager.js"
import { Link } from "react-router-dom"


export const EventList = () => {
    const history = useHistory()
    const [ events, updateEvents ] = useState([])

    const eventFetcher = () => {
        getEvents().then(data => updateEvents(data))
    }

    useEffect(() => {
        eventFetcher()
    }, [])

    return (
        <article className="events">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/events/new" })
                    }}
                >Schedule New Event</button>
            </header>
            {
                events.map(event => {
                    return <section key={event.id} className="registration">
                        <div className="registration__game"><b>Game:</b> <i>{event.game.title}</i></div>
                        <div>Event Description: <i>{event.description}</i></div>
                        <div>
                            {event.date} @ {event.time}
                        </div>
                        {
                            event.joined
                                ? <button className="btn btn-3"
                                    onClick={() => leaveEvent(event.id).then(() => eventFetcher())}
                                    >Leave</button>
                                : <button className="btn btn-2"
                                    onClick={() => joinEvent(event.id).then(() => eventFetcher())}
                                    >Join</button>
                        }
                        <Link className="event-add" to="/event/new"><button>Edit</button></Link>
                    </section>
                })
            }
        </article>
    )
}
