import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { EventList } from "./event/EventList.js"
import { EventForm } from "./event/EventForm.js"
import { GameForm } from "./game/GameForm.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/">
                <GameList />
            </Route>
            <Route exact path="/events">
                <EventList />
            </Route>
            <Route exact path="/eventform">
                <EventForm />
            </Route>
            <Route exact path="/gameform">
                <GameForm />
            </Route>
        </main>
    </>
}
