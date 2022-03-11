class Draw extends React.Component {
    state = {
        options: ["wróżba 1","wróżba 2","wróżba 3"],
        option: null,
        value: ""
    }

    handleShowOption = () => {
        const index = Math.floor(Math.random() *
         this.state.options.length)
        this.setState({
            option: this.state.options[index]
        })
    }

    handleInputChange = e => {
        this.setState({
            value: e.target.value,
        })
    }

    handleAddOption = () => {
        if (this.state.value === "") return alert("wpisz coś")
        // const options = [...this.state.options]
        // options.push(this.state.value)
        const options = this.state.options.concat(this.state.value)
        this.setState({
            options,
            value:"",
        })
        alert(`Wróżba dodana. Aktualne wróżby: ${options}`)
    }

    render() {
        return(
            <div>
                <button onClick={this.handleShowOption}
                >Zobacz wróżbę</button>
                <br />
                <input type="text" placeholder="wpisz wróżbę ..." value={this.state.value} 
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleAddOption}>Dodaj Wróżbe</button>
                {this.state.option ? <h1>{this.state.option}</h1> : null}
            </div>
        )
    }
}

ReactDOM.render(<Draw/>, document.getElementById('root'))