import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
// import { useQuery, useMutation } from '@apollo/client';
// need to connect to backend
// import { } from '../utils/queries';
// import {  } from '../utils/mutations';
import Auth from '../utils/auth';

const UserProfile = (props) => {
	const { username: userParam } = useParams();
	
	const { loading, data } = useQuery(userParam ? QUERY_DEV {
		variables: { username: userParam },
	});
	
	const user = data?.me || data?.user || {};


	if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
		return <Navigation to="/profile" />;
	}
	if (loading) {
		return <div>Loading...</div>;
	}
	if (!user?.username) {
		return (
			<h3> Sign up or log in! </h3>
			);
		}
		
		return (
		<div>
			<div className="profile-page">
				<h2 className="profile-header">
					Welcome {userParam ? `${user.username}`}!
				</h2>
			</div>
			<div className=" ">
				<div className="">
					{/* "Profile info??" */}
				</div>
			</div>
		</div>
		);
};


export default UserProfile;
