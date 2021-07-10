import React from "react";
import Avatar from "../Avatar";
import { getProfileImage } from "../../services/profile.service";
import "./Profile.style.css";

const Profile = () => {
	const [profile, setProfile] = React.useState(null);

	React.useEffect(() => {
		(async () => {
			const res = await getProfile();
			setProfile(res);
		})();
	}, [getProfile]);

	const getImage = async () => {
		try {
			const res = await getProfileImage();
			if (res.status !== 200) {
				throw new Error("Something went wrong.");
			}
			const imgData = res.data.urls?.thumb;
			return imgData;
		} catch (error) {
			console.log(error);
		}
	};

	//some API call
	const getProfile = async () => {
		return {
			name: "Aurther Guillermin Herman",
			image: await getImage(), //dummy image
			//...
		};
	};

	return (
		<div className="profile">
			<Avatar src={profile?.image} />
			<h3 className="profile__name">{profile?.name}</h3>
		</div>
	);
};

export default Profile;
