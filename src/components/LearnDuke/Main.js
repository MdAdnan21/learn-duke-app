import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import styles from './Main.module.css'
import Images from '../../common/Image'
import { Icons } from '../../common/Icon'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Image from '../../common/Image';
import { Link } from 'react-router-dom';
import UserLoginData from './UserLoginData' 
import { Router as Routes, Route } from 'react-router-dom';
const Main = () => {
    const [showData, setShowData] = useState(false);

    const handleJoinClick = () => {
        setShowData(true);
    };
    const navIcons = [
        {
            id: 1,
            title: "home",
            icon: <Icons.Home />
        },
        {
            id: 2,
            title: "desk",
            icon: <Icons.Desk />
        },
        {
            id: 3,
            title: "message",
            icon: <Icons.Message />
        },
        {
            id: 4,
            title: "book",
            icon: <Icons.Book />
        },
        {
            id: 5,
            title: "tv",
            icon: <Icons.Tv />
        },

    ]

    const navBar = navIcons;
    const [activeIcon, setActiveIcon] = useState(1)

    const handleIcon = (id) => {
        setActiveIcon(id)
    }

    return (
        <>
            <div className={styles.mainCont}>
                <div className={styles.navCont}>
                    <div className={styles.upper}>
                        <div className={styles.logoBox}>
                            <img src={Images.Logo} alt='logo' />
                        </div>
                        <div className={styles.profile}>
                            <Icons.Search className={styles.icon} />
                            <Icons.Notification className={styles.icon} />
                            <div className={styles.profileBox}>
                                <div className={styles.innerProfile}>
                                    <Icons.Profile className={styles.iconProfile} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lower}>
                        {navBar.map((item, index) => (
                            <div className={`${styles.IconBox} ${activeIcon === item.id ? styles.active : ''}`} key={item.id} onClick={() => handleIcon(item.id)} >
                                {React.cloneElement(item.icon, { style: { fontSize: 30 } })}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.upperLayer}>
                        <div className={styles.profileList}></div>
                        <div className={styles.title}>DSA Space</div>
                    </div>
                    <div className={styles.cont}>
                        <p className={styles.descrip}>Your gateway to mastering essential coding principles.
                            Let's solve problems and excel in Software Engineering together!</p>
                    </div>
                    <div className={styles.socialCont}>
                        <div className={styles.IconCont}>
                            <Icons.Group />
                            <div className={styles.numbers}>
                                <span>1234</span>
                            </div>
                        </div>
                        <div className={styles.buttonBox}>
                            <div className={styles.Join}>
                                <Link to="/user">
                                    <button onClick={handleJoinClick}>Join</button>
                                </Link>
                            </div>
                            {showData && (
                                <Route path="/user">
                                    <div className={styles.userLoginContainer}>
                                        <UserLoginData />
                                    </div>
                                </Route>
                            )}
                            <div className={styles.Invite}>
                                <button>Invite</button>
                            </div>
                        </div>

                    </div>
                    <div className={styles.profilePics}>
                        <div className={styles.imgBox}>
                            <img src="https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg" alt="" class="image--cover" />
                            <img src="https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg" alt="" class="image--cover" />
                        </div>

                        <div className={styles.Numbpeople}>
                            <span>and 1200 others</span>
                        </div>

                    </div>
                    <div className={styles.bottomList}>
                        <div className={styles.FeedBox}>
                            <p> Feed</p>
                        </div>
                        <div className={styles.TrendingBox}>
                            Trending
                        </div>
                        <div className={styles.MembersBox}>
                            Members
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
