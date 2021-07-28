import React, { Component } from 'react'

export class PlayerSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onSearchChange: this.props.onSearchChange
        }
    }

    render() {

        return (
            <div className="mt-4" style={{width: '100%', marginBottom: '-1em'}}>
                <input type="text" className="form-control" id="playerSearch" onChange={this.state.onSearchChange} placeholder="Player Search..."/>
            </div>
        )
    }
}

export default PlayerSearch
