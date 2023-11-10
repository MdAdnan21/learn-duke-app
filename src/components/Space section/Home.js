import React from 'react'
import styles from './Home.module.css'
import Data from '../data/Data'
import { Icons } from '../../common/Icon';
import { Link } from 'react-router-dom';
// import Main from '../LearnDuke/Main'

const Home = () => {
  return (
    <>
      <h1 className={styles.Headline1}>Spaces</h1>
      <div className={styles.overall}>
        {Data.map((item, index) => (
          <Link to={`/main/${index + 1}`} key={item.id} className={styles.box}>
            <div
              style={{
                backgroundColor:
                  index === 0
                    ? "default"
                            : "default",
              }}
            >

              <div className={styles.image}>
                <div className={styles.circle} style={{ background: item.circleColor }}>
                  <img src={item.image} alt={item.heading} />
                </div>
              </div>
              <div className={styles.title}>
                <h1>{item.heading}</h1>
              </div>
              <div className={styles.details}>
                <p>{item.details}</p>
              </div>
              <div className={styles.combine}>
                <div className={styles.Icons}>
                  <div className={styles.group}>
                    <Icons.Group />
                  </div>
                  <div className={styles.number}>
                    <p>{item.member}</p>
                  </div>
                </div>
                <div className={styles.community}>
                  <button>{item.button}</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;