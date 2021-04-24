import React from 'react';
import './index.scss';
import { render } from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './core/+store/store';
import { AuthComponent } from './routes/auth/auth.component';
import { HomeComponent } from './routes/home/home.component';
import { LanguageProvider } from './core/components/langugage/language-provider/language.provider';
import { CustomThemeProvider } from './core/components/theme/theme-provider/theme.provider';

// if (process.env.NODE_ENV === 'development') {
//   (window as any)._ = _;
//   (window as any).API_BASE_URL = 'http://localhost:5001/';
// } else {
//   (window as any).API_BASE_URL = '/';
// }
// require('dotenv').config();

console.log(process.env)

function MainComponent() {
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
											<Route path="/" component={HomeComponent} />
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
					</CustomThemeProvider>
				</LanguageProvider>
			</Provider>
		</div>
	);
}

render(<MainComponent />, document.getElementById('root'));
