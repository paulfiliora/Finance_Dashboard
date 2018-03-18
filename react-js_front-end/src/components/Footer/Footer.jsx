import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
            <footer className="footer">
                <Grid>
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="#link">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                    Company
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                   Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        &copy; {(new Date()).getFullYear()} <a href="http://www.google.com">Google</a>, just google it
                    </p>
                </Grid>
            </footer>
		);
	}
}

export default Footer;
