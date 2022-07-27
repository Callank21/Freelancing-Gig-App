import React from "react";
// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_DEV } from '../utils/queries';
import ProfileCard from "./ProfileCard"

const devList = useQuery(QUERY_DEV);
console.log ( devList );

export const CategoryPage = (props) => {
	
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
			<button className="btn"
			onClick={e => {
				this.onClick();
          }}
        >
          Connect With Developer
        </button>
      </div>
        </div>
    )

};