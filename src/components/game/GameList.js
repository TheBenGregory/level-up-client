import React, { useEffect, useState } from "react"
import { getGames } from "./GameManager.js"
import { Link } from "react-router-dom"

export const GameList = (props) => {
    const [ games, setGames ] = useState([])

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title"><b className='title'>{game.title}</b> by {game.maker}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__skillLevel">Skill level is {game.skill_level}</div>
                        <Link to={`game/edit/${game.id}`}>Edit</Link>
                    </section>
                })
            }
            <Link className="game-add" to="/game/new"><button>Add Game</button></Link>
        </article>
    )
}
