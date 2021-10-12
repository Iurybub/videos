import React, { Component } from 'react'

export class SearchBar extends Component {
    state = { term: "" }
    onInputChange = (e) => {
        this.setState({ term: e.target.value})
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }
    render() {
        return (
            <div className=" search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Lookup</label>
                        <input
                            placeholder="Funny cats"
                            type="text"
                            onChange={this.onInputChange}
                            value={this.state.term} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
