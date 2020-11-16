import AppSyncConfig from '../configs/AppSy';
import AwsAmplifyConfig from '../configs/AppSy';
import Amplify, { Auth } from 'aws-amplify';
import {
	withAuthenticator,
	ConfirmSignIn,
	ForgotPassword,
	RequireNewPassword,
	SignIn,
	VerifyContact
} from 'aws-amplify-react';
import AWSAppSyncClient from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import * as AWS from 'aws-sdk';
import { ApolloProvider } from 'react-apollo';
import React, { Component } from 'react';
import Routes from './routers';
import App from '../App'
// import { SelectDropContext, itemsData } from '../context/SelectContext';

Amplify.configure(AppSyncConfig);
class ApolloIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};

	
	}

	render() {
		const EndPoint = AppSyncConfig.graphqlEndpoint;
		const Region = process.env.REACT_APP_REGION;
// console.log('end point',EndPoint)
		const client = new AWSAppSyncClient({
			url:AppSyncConfig.graphqlEndpoint,
		
			region: AppSyncConfig.region,
			auth: {
				type: AppSyncConfig.authenticationType,

				// jwtToken: signInUserSession.idToken.jwtToken
				// jwtToken: async () =>
					// (await Auth.currentSession()).getIdToken().getJwtToken()
				apiKey: AppSyncConfig.apiKey
			},
			disableOffline: true,
			complexObjectsCredentials: () => {
				return new AWS.Credentials({
					accessKeyId: AppSyncConfig.accessKeyId,
					secretAccessKey: AppSyncConfig.secretAccessKey
				});
			}
		});
		return (
			<ApolloProvider client={client}>
				<Rehydrated>
					{/* <SelectDropContext.Provider value={this.state.items}> */}
						<Routes onChangeSelect={this.onContextChangeSelect} />
					{/* </SelectDropContext.Provider> */}
				</Rehydrated>
			</ApolloProvider>
		);
	}
}

// export default withAuthenticator(ApolloIndex, false, [
// 	<SignIn />,
// 	<ConfirmSignIn />,
// 	<VerifyContact />,
// 	<ForgotPassword />,
// 	<RequireNewPassword />
// ]);
export default ApolloIndex;