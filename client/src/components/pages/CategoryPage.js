import React from "react";
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_DEV } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';

const devList = useQuery{QUERY_DEV};
console.log ('devList');

export const CategoryPage = (props) => {
	const getDevelopers = devList.map(devType => {
		return (
		<ProfilePage />
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