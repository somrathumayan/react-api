import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        };

    }
    componentWillMount(){
        axios('https://api.randomuser.me/?nat=US&results=5')
            .then(response=>this.setState({
                users: response.data.results
            }))
    }

    render() {
        return (
            <div>
                {this.state.users.map(user=>
                    <div>
                        <p>{user.name.first}</p>
                        <p>{user.email}</p>
                        <p>{user.cell}</p>
                        <hr/>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
