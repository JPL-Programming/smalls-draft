import React, { Component } from 'react'
// import Team from './Team';
import RoundHeader from './RoundHeader'
import TeamSelect from './TeamSelect'
import Api from './Api';

export class Teams extends Component {

    constructor(props) {
        super(props);

        this.props.hasOwnProperty('forTrade')

        this.state = {
            forTrade: this.props.hasOwnProperty('forTrade'),
            players: this.props.players,
            playerWasSelected: this.props.playerWasSelected,
            pickWasSelected: this.props.pickWasSelected,
            teams: this.props.teams,
            teamsToPlayer: this.props.teamsToPlayer,
            rounds: Array.from(new Set(this.props.teams.map(p => p.pick.round))),
            teamToDisplay: 'All',
            userCanPick: this.props.userCanPick,
            currentPickNo: this.props.currentPickNo,

            teamForDraftSimMode: this.props.teamForDraftSimMode,
            playersChosenByUser: this.props.playersChosenByUser
        }

    }

    getInitialState() {
        Api.get()
            .then(result => {

                let teamsToPlayer = result.data.split(',');
                let currentPickNo = teamsToPlayer.filter(Number).length + 1;

                this.setState({ teamsToPlayer: teamsToPlayer, currentPickNo });
            });
    }

    componentDidMount() {
        this.getInitialState()

        setTimeout(() => {
            this.refreshState()
        }, 5000);
    }

    refreshState() {

        setTimeout(() => {
            this.getInitialState();
            this.props.updateOnTheClock(this.props.currentPickNo);
            this.refreshState();
        }, 2000);


    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({ teams: nextProps.teams, teamsToPlayer: nextProps.teamsToPlayer });
    }

    onSelectChange = () => {
        console.log('select changed')
        let teamToDisplay = document.querySelector('#teamSelect') !== null ? document.querySelector('#teamSelect').value : 'All'
        this.setState({ teamToDisplay })
    }

    render() {
        // console.log(this.props.teamForDraftSimMode)
        return (
            <div className={this.state.forTrade ? 'col-12' : 'col-6 text-small'}>
        <div>
          <b>{this.props.teamForDraftSimMode}</b>
        </div>
        {this.state.playersChosenByUser.map(p => {
          return (<div>{p.name}, {p.position}, {p.school},</div>)
        })}
        {this.state.forTrade ? null : <TeamSelect onSelectChange={this.onSelectChange} />}

        {this.state.rounds.map(round =>
          <div className="" key={round}>
            <RoundHeader
              forTrade={this.state.forTrade}
              pickWasSelected={this.state.pickWasSelected}
              teams={this.state.teams}
              players={this.state.players}
              teamsToPlayer={this.state.teamsToPlayer}
              round={round}
              key={round}
              teamToDisplay={this.state.teamToDisplay}
              currentPickNo={this.state.currentPickNo}
            />
          </div>
        )}

        {this.state.forTrade ?
          (this.state.rounds.map(round =>
            <div className="">

              <RoundHeader
                forTrade={this.state.forTrade}
                pickWasSelected={this.state.pickWasSelected}
                teams={this.state.teams}
                players={this.state.players}
                teamsToPlayer={this.state.teamsToPlayer}
                round={round}
                key={round}
                teamToDisplay={this.state.teamToDisplay}
                currentPickNo={this.state.currentPickNo}
              />
            </div>)
          ) : null}
      </div>


        )
    }
}

export default Teams