import React, { Component } from 'react'

export class ClubSelect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            onSelectChange: this.props.onSelectChange,
            tradeClub: this.props.hasOwnProperty('tradeClub') ? this.props.tradeClub : null,
            forTrade: this.props.hasOwnProperty('forTrade')
        }
    }


    render() {

        return (
            <div className="form-group form" style={{width: '100%'}}>
                {/* {this.state.forTrade ? null : <label forhtml="teamSelect">Select the Team to display</label>} */}
                <select
                    className="form-control"
                    id={this.state.tradeClub ? 'clubSelect' + this.state.tradeClub : "clubSelect"}
                    onChange={this.state.onSelectChange}>

                    {this.state.forTrade ? <option value='Select'>Select a Club</option> : <option value='All'>Select a Club to View Their Players</option>}
                    <option value='Arsenal'>Arsenal</option>
                    <option value='Aston Villa'>Aston Villa</option>
                    <option value='Brentford'>Brentford</option>
                    <option value='Brighton'>Brighton</option>
                    <option value='Burnley'>Burnley</option>
                    <option value='Chelsea'>Chelsea</option>
                    <option value='Crystal Pal'>Crystal Pal</option>
                    <option value='Everton'>Everton</option>
                    <option value='Leeds'>Leeds</option>
                    <option value='Leicester'>Leicester</option>
                    <option value='Liverpool'>Liverpool</option>
                    <option value='Man City'>Man City</option>
                    <option value='Man Utd'>Man Utd</option>
                    <option value='Newcastle'>Newcastle</option>
                    <option value='Norwich'>Norwich</option>
                    <option value='Southampton'>Southampton</option>
                    <option value='Tottenham'>Tottenham</option>
                    <option value='Watford'>Watford</option>
                    <option value='West Ham'>West Ham</option>
                    <option value='Wolves'>Wolves</option>
                </select>
            </div>
        )
    }
}

export default ClubSelect
