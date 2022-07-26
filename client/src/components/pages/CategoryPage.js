import React from "react";
// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_DEV } from '../utils/queries';
import ProfileCard from "./ProfileCard"

export const CategoryPage = (props) => {
	// function that deals with onclick
	// onclick => ({
		// get profile Id from a document.querySelector('key').value
		// pass profile Id into find individual profile function returning an object
		// return ProfilePage object with the data from the previous function passed in
	// })


	const devList = useQuery(QUERY_DEV);
	console.log ( devList );

	const getDevelopers = devList.map(profile => {
		return (
		<ProfileCard 
		key = {profile._id}
		{...profile}
		/>
		)
	})
	return (
        <div>
            <p className="categoryHeader">Developers</p>
            <div className=" ">
				{getDevelopers}
            </div>
        </div>
    )

};