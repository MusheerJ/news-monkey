import React, { Component } from 'react'


export class NavBar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">NewsMonkey</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/business">Business</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/business">Entertainment</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/business">General</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/business">Health</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/business">Science</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/business">Sports</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/business">Technology</a>
                                </li>.
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default NavBar;
