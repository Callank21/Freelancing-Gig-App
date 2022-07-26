import React from 'react';

const UserProfile = (props) => {
	const { username: userParam } = useParams();
	const { loading, data } = useQuery(userParam ? QUERY_Profile {
	  variables: { username: userParam },
	});
  
	const user = data?.me || data?.user || {};
  
	if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
	  return <Navigation ="/profile" />;
	}
  
	if (loading) {
	  return <div>Loading...</div>;
	}
  
	if (!user?.username) {
	  return (
		<h4> Please sign up or log in </h4>
	  );
	}
}