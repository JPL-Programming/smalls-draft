import React, { Component } from 'react'
import Player from './Player';
import PositionButton from './PositionButton'
// import ListGroup from "../../node_modules/react-bootstrap/lib/ListGroup"
import ClubSelect from './ClubSelect'
import PlayerSearch from './PlayerSearch'


export class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onRightClick: this.props.onRightClick,
            players: this.props.players,
            playerWasSelected: this.props.playerWasSelected,
            teams: this.props.teams,
            teamsToPlayer: this.props.teamsToPlayer,
            positionFilter: Array.from(new Set(this.props.players.map(p => p.player.position))),
            uniquePositions: Array.from(new Set(this.props.players.map(p => p.player.position))).sort(),
            userCanPick: this.props.userCanPick,
            clubToDisplay: this.props.clubToDisplay,
            hideDrafted: this.props.hideDrafted,
            searchedPlayer: this.props.searchedPlayer
        };
    }


    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({ players: nextProps.players, teamsToPlayer: nextProps.teamsToPlayer });
    }

    filterPositionOnClick = (pos, e) => {
        let pf = this.state.positionFilter

        if (pf.includes(pos)) {
            pf = pf.filter(p => p !== pos)
        }
        else {
            pf.push(pos)
        }
        this.setState({ positionFilter: pf })
    }

    getPlayersArray = () => {
        let { positionFilter } = this.state

        let playersArray = this.state.players.filter(
            player => {
                return positionFilter.includes(player.player.position)
            }
        )

        return playersArray;
    }

    onSelectChange = () => {
        let clubToDisplay = document.querySelector('#clubSelect') !== null ? document.querySelector('#clubSelect').value : 'All'
        this.setState({ clubToDisplay })
    }

    onSearchChange = () => {
        let searchedPlayer = document.querySelector('#playerSearch') !== null ? document.querySelector('#playerSearch').value : ''
        this.setState({ searchedPlayer })
    }

    render() {
        let { uniquePositions } = this.state
        let playersArray = this.getPlayersArray();

        return (
            <div className="col-6"  >
                {/* <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary ">Show Drafted Players</button>
                    <button type="button" className="btn btn-danger">Hide Drafted Players</button>
                </div> */}
                <div className="col-12">
                    <div className='row'>
                        {this.state.forTrade ? null : <ClubSelect onSelectChange={this.onSelectChange} />}
                    </div>
                    <div className='row mb-2' style={{ justifyContent: 'center' }}>
                        {uniquePositions.map(pos =>

                            <PositionButton
                                filterPosition={this.filterPositionOnClick}
                                pos={pos}
                                show={this.state.positionFilter.includes(pos)}
                                key={pos}
                            />

                        )}
                        <button className='btn btn-info' style={{margin:'0.1rem'}} onClick={() => this.setState({ positionFilter: this.state.uniquePositions })}>Show All</button>
                        <button className='btn btn-info' style={{margin:'0.1rem'}} onClick={() => this.setState({ positionFilter: [] })}>Hide All</button>
                    </div>
                </div>
                <PlayerSearch onSearchChange={this.onSearchChange} />
                <div
                    className="list-group"
                >
                    <br />
                    <div>
                        {playersArray.filter((p) => {
                            if (this.props.hideDrafted) {
                                return !this.state.teamsToPlayer.includes(p.key)
                            }
                            else {
                                return true
                            }
                        }).filter(p => {
                            let { clubToDisplay } = this.state

                            if (clubToDisplay === 'All') { 
                                return true 
                            } else { 
                                return p.player.school === clubToDisplay 
                            }
                        }).filter(p => {
                            let { searchedPlayer } = this.state

                            if (searchedPlayer === '') {
                                return true
                            } else {
                                return p.player.name.toLowerCase().search(searchedPlayer.toLowerCase()) >= 0
                            }
                        }).map((p) =>
                            < Player

                                userCanPick={this.state.userCanPick}
                                onRightClick={this.state.onRightClick}
                                playerWasSelected={this.state.playerWasSelected}
                                player={p.player}
                                teamDraftedTo={
                                    this.state.teams[this.state.teamsToPlayer.indexOf(p.key)]
                                }
                                key={p.player.rank}
                                isPicked={(this.state.teamsToPlayer.includes(p.key))}
                                active="active"
                                clubToDisplay={this.state.clubToDisplay}
                                searchedPlayer={this.state.searchedPlayer}
                            />
                        )}

                    </div>
                </div>
            </div>
        )
    }
}

export default Players
