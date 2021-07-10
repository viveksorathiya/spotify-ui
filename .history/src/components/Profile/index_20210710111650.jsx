import React from "react";
import Avatar from "../Avatar";
import { getProfileImage } from "../../services/profile.service";
import "./Profile.style.css";

const Profile = () => {
	const [profile, setProfile] = React.useState(null);
	//some API call
	const getProfile = async () => {
		return {
			name: "Aurther Guillermin Herman",
			image: await getImage(), //dummy image
			//...
		};
	};
	React.useEffect(() => {
		(async () => {
			const res = await getProfile();
			setProfile(res);
		})();
	}, []);

	

	return (
		<div className="profile">
			<Avatar src={profile?.image} />
			<h3 className="profile__name">{profile?.name}</h3>
		</div>
	);
};

export default Profile;
