import React from 'react'
import Avatar from '../Avatar'

import './Profile.style.css'

const Profile = () => {
    const [ profileImg, setProfileImg ] = React.useState('')
    

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
    
    return (
        <div className="profile">
            <Avatar src="https://picsum.photos/200" />
            <h3 className="profile__name">Aurther Guillermin Haer</h3>
        </div>
    )
}

export default Profile
