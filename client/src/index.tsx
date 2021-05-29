import React from 'react';
import './index.scss';
import { render } from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './core/+store/store';
import { LanguageProvider } from './core/components/langugage/language-provider/LanguageProvider';
import { CustomThemeProvider } from './core/components/theme/theme-provider/CustomThemeProvider';
import { Auth } from './routes/auth/Auth';
import { Home } from './routes/home/Home';

// if (process.env.NODE_ENV === 'development') {
//   (window as any)._ = _;
//   (window as any).API_BASE_URL = 'http://localhost:5001/';
// } else {
//   (window as any).API_BASE_URL = '/';
// }
// require('dotenv').config();

console.log(process.env);

function Main() {
	const isLogged = localStorage.token;

	return (
		<div>
			<Provider store={store}>
				<LanguageProvider>
					<CustomThemeProvider>
						<Router>
							<div>
								{isLogged ? (
									<React.Fragment>
										<Switch>
											<Route path="/auth" render={() => <Redirect to={`/`} />} />
											<Route path="/" component={Home} />
										</Switch>
									</React.Fragment>
								) : (
									<React.Fragment>
										<Route path="/" render={() => <Redirect to={`/auth`} />} />
										<Route path={`/auth`} component={Auth} />
									</React.Fragment>
								)}
							</div>
						</Router>
					</CustomThemeProvider>
				</LanguageProvider>
			</Provider>
		</div>
	);
}

render(<Main />, document.getElementById('root'));
