import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            boxer: {}
        };
    }

    componentDidMount(){
        console.log(this.props.match.params.name);
        fetch(`http://localhost:5000/api/boxers/search/${this.props.match.params.name}`, {method: 'GET'})
            .then(res => res.json())
            .then(boxer => {
                console.log(boxer);
                this.setState({boxer: boxer});
            })
            .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <h3>{this.state.boxer.name}</h3>
                <div className="col-md-4">
                    <img src="http://static.boxrec.com/boxers/10.jpeg" alt=""/>
                </div>
                <div className="col-md-4">
                    <div style={{marginTop: '50px'}}>
                        <table className="table table-stripped">
                            <tbody>
                                <tr>
                                    <td><b>global ID</b></td>
                                    <td>{this.state.boxer.globalId}</td>
                                </tr>
                                <tr>
                                    <td><b>bouts</b></td>
                                    <td>{this.state.boxer.bouts}</td>
                                </tr>
                                <tr>
                                    <td><b>rounds</b></td>
                                    <td>{this.state.boxer.rounds}</td>
                                </tr>
                                <tr>
                                    <td><b>residence</b></td>
                                    <td>{this.state.boxer.residence}</td>
                                </tr>
                                <tr>
                                    <td><b>nationality</b></td>
                                    <td>{this.state.boxer.nationality}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;

// import React, {  Component } from 'react';
// import Search from '../../components/Search';

// class Search extends Component {
//     constructor (props) {
//         super(props);
//     }
//     render() {
//         return(
//             <div>
//                 <div className="col-md-12">
//                     <Search {...this.props} />
//                 </div>
//             </div>
//         )
//     }
// }

// export default Search;

