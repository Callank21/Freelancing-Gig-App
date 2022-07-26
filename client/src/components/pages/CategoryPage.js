import React from "react";
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_DEV } from '../utils/queries';
import ProfilePage from "./ProfilePage"

const devList = useQuery(QUERY_DEV);
console.log ( devList );

export const CategoryPage = (props) => {
	const getDevelopers = devList.map(profile => {
		return (
		<ProfilePage 
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