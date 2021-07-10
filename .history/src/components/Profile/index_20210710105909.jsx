import React from "react";
import Avatar from "../Avatar";
import { getProfileImage } from "../../services/profile.service";
import "./Profile.style.css";

const Profile = () => {
	const [profileImg, setProfileImg] = React.useState("");

	React.useEffect(() => {
		(async () => {
			const img = await getImage();
			setProfileImg(img?.urls?.thumb);
		})();
	}, []);

	const getImage = async () => {
		try {
			const res = await getProfileImage();
			if (res.status !== 200) {
				throw new Error("Something went wrong.");
			}
			const imgData = res.data;
			return imgData;
		} catch (error) {
			console.log(error);
		}
    };
    
    //some API
    const getProfile = () => {
        return 
    }

	return (
		<div className="profile">
			<Avatar src={profileImg} />
			<h3 className="profile__name">Aurther Guillermin Haer</h3>
		</div>
	);
};

export default Profile;
