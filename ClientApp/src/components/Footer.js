import React, { Component } from 'react';

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <div>
                <p><hr className="featurette-divider" />
                    <footer style={{ padding: "0 50px" }} className="navbar fixed-bottom">
                        <p className="float-right"><a href="/">© 2020-Johana Guinayen</a></p>
                        <p></p>
                    </footer></p>
            </div>
        );
    }
}
