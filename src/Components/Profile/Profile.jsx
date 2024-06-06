
import "./Profile.css";
import { ImLocation } from "react-icons/im";

const Profile = ({authUser, totalHouses, totalReviews}) => {

    let userData = authUser
    return (
        <div className="Profile">
            {
                userData ? (
                <div className="container-profile">
                    <div className="wrapper-profile">
                        <div className="profile-up">
                            <div className="image-profile">
                                <img src = {userData.urlImg ? (userData.urlImg) : ("https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg")}/>
                            </div>
                            <div className="name-profile">
                                <p>{userData.name}</p>
                                <p>{userData.surname}</p>
                            </div>
                        </div>
                        <div className="profile-down">
                            <div className="first-side">
                                <div className="location-profile">
                                    <div className="location-dev">
                                        <ImLocation /> {userData.country}
                                    </div>
                                </div>
                                <div className="email-profile">
                                    <p>{userData.email}</p>
                                </div>
                            </div>
                            <div className="second-side">
                                <div className="houses-profile">
                                    <h1>{totalHouses}</h1>
                                    <p>Дома</p>
                                </div>
                                <div className="reviews-profile">
                                    <h1>{totalReviews}</h1>
                                    <p>Отзывы</p>
                                </div>
                            </div>
                            <div className="button-profile">
                                <button>Изменить свой профиль</button>
                            </div>
                        </div>
                    </div>
                </div>
                )
                :
                (
                    <div>

                    </div>
                )
            }

            
        </div>
    );
};

export default Profile;