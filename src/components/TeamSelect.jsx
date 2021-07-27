import React, { Component } from 'react'

export class TeamSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onSelectChange: this.props.onSelectChange,
            tradeTeam: this.props.hasOwnProperty('tradeTeam') ? this.props.tradeTeam : null,
            forTrade: this.props.hasOwnProperty('forTrade')
        }
    }


    render() {

        return (
            <div className="form-group form">
                {/* {this.state.forTrade ? null : <label forhtml="teamSelect">Select the Team to display</label>} */}
                <select
                    className="form-control"
                    id={this.state.tradeTeam ? 'teamSelect' + this.state.tradeTeam : "teamSelect"}
                    onChange={this.state.onSelectChange}>

                    {this.state.forTrade ? <option value='Select'>Select a Team</option> : <option value='All'>Select a Team to View Their Picks</option>}
                    <option value='Jamie Lamb'>Jamie Lamb</option>
                    <option value='Bryan Clarke'>Bryan Clarke</option>
                    <option value='Stevie Sharman'>Stevie Sharman</option>
                    <option value='Sarah Daniels'>Sarah Daniels</option>
                    <option value='Darren Clarke'>Darren Clarke</option>
                    <option value='Robert Morrison'>Robert Morrison</option>
                    <option value='Ben Peroni'>Ben Peroni</option>
                    <option value='Peter Allery'>Peter Allery</option>
                    <option value='John Gardiner'>John Gardiner</option>
                    <option value='Gary Stark'>Gary Stark</option>
                    <option value='JJ'>JJ</option>
                    <option value='Steve Lamb'>Steve Lamb</option>
                    <option value='Andy Lamb'>Andy Lamb</option>
                </select>
            </div>
        )
    }
}

export default TeamSelect
