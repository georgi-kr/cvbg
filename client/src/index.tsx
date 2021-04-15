import React from 'react';

import { render } from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AuthComponent } from './routes/auth/auth.component';
import { theme } from './theme';

// if (process.env.NODE_ENV === 'development') {
//   (window as any)._ = _;
//   (window as any).API_BASE_URL = 'http://localhost:5001/';
// } else {
//   (window as any).API_BASE_URL = '/';
// }

require('dotenv').config();

function MainComponent() {
	const isLogged = localStorage.token;

	return (
		<div>
			<MuiThemeProvider theme={theme}>
				<Router>
					<div>
						{isLogged ? (
							<React.Fragment>
								<Switch>
									<Route path="/auth" render={() => <Redirect to={`/`} />} />
									<Route path="/" component={null} />
								</Switch>
							</React.Fragment>
						) : (
							<React.Fragment>
								<Route path="/" render={() => <Redirect to={`/auth`} />} />
								<Route path={`/auth`} component={AuthComponent} />
							</React.Fragment>
						)}
					</div>
				</Router>
			</MuiThemeProvider>
		</div>
	);
}

render(<MainComponent />, document.getElementById('root'));
