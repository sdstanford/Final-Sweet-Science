import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { withRouter } from "react-router-dom";
import logo from "./images/Sweet-Science-Logo.png";

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

    onSubmit(e){
        e.preventDefault();
        const { history } = this.props;

        history.push(`/search/${this.state.search}`);
        this.setState({search: ''});
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to="/dashboard">My Dashboard</Link>
                    </li>
                <li>
                    <Link to="/add">Add new boxer</Link>
                </li>
                <li>
                    <a
                        href=""
                        onClick={this.onLogoutClick.bind(this)}>
                        Logout
                    </a>
                </li>
            </ul>
          );
      
          const guestLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to="/register">
                        Sign Up
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        );      

        return(
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                        <Link to="/">
                        
                    <img src={logo} className="logo" alt="Sweet Science" height="100" width="225"/>
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/ratings">
                                    Ratings
                                </Link>
                            </li>
                            <li>
                                <Link to="/champions">
                                    Champions
                                </Link>
                            </li>
                            <li><a href="http://localhost:5000/api/boxers# ">API</a></li>
                            <li>
                                <Link to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/discover">
                                    Discover
                                </Link>
                            </li>
                        </ul>
                        <form onSubmit={this.onSubmit} className="navbar-form navbar-left">
                            <div className="form-group">
                                <input onChange={this.onChange.bind(this)} name="search2" type="text" className="form-control" placeholder="Search name"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});
  
export default withRouter(connect(mapStateToProps, { logoutUser })(Navbar));