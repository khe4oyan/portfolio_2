// img
import boardImage from '../../assets/chessnoorImg/header.png';
import createAccountImg from '../../assets/chessnoorImg/Create Account/1440px.png'
import createAccount_1Img from '../../assets/chessnoorImg/Create Account/1440px(1).png'
import signInImg from '../../assets/chessnoorImg/Sign  in/1440px.png'
import signInErrImg from '../../assets/chessnoorImg/Sign  in/Error 1440px.png'
import emailVerifyImg from '../../assets/chessnoorImg/Verify email with code/1440px.png'
import emailVerifyLinkImg from '../../assets/chessnoorImg/Verify Email with link/1440px.png'
import createGame from '../../assets/chessnoorImg/Create Game/1440 px.png';
import playChessVsBot from '../../assets/chessnoorImg/Play Chess vs Computer/1440 px.png';
import editUserProfile from '../../assets/chessnoorImg/Edited user profile/1440 px.png';
import userProfilePage from '../../assets/chessnoorImg/User Profile Page/1440 px.png';
import chat_1 from '../../assets/chessnoorImg/Chat with user/1440 px.png';
import chat_2 from '../../assets/chessnoorImg/Chat with user/1440 px(1).png';
import post from '../../assets/chessnoorImg/post/post (1).png';
import post2 from '../../assets/chessnoorImg/post/post (2).png';
import post3 from '../../assets/chessnoorImg/post/post (3).png';
import post4 from '../../assets/chessnoorImg/User Home Page/1.png';
import post5 from '../../assets/chessnoorImg/User Profile Page 2/1.png';

// styles
import classes from './styles.module.css';

const authorizationData = [
  createAccount_1Img,
  createAccountImg,
  signInImg,
  signInErrImg,
  emailVerifyImg,
  emailVerifyLinkImg,
];

const gamePreviewData = [
  createGame,
  playChessVsBot,
];

const userProfile = [
  userProfilePage,
  editUserProfile,
];

const chat = [
  chat_2,
  chat_1,
];

export default function ChessnoorPage() {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>
          <h2>Chessnoor</h2>
          <p>Social platform for chess lovers</p>
        </div>

        <div>
          <img
            className={classes.board}
            src={boardImage}
          />
        </div>
      </div>

      <div className={classes.aboutPlatform}>
        <h2 className={classes.headerText}>About Platform</h2>

        <div className={classes.lines}>
          <p>
            Our Social chess platform create a vibrant community where players can connect, interact, and engage with fellow enthusiasts, sharing strategies, tips, and experiences.
          </p>
          <p>
            Chess-Stealth is an exclusive online chess club that contains elements of a social platform at the same time. The platform integrates a number of unique features, meeting the various needs and preferences of users, as well as bringing together chess enthusiasts and professional chess players in one place.
          </p>
          <p>
            The platform integrates a number of unique features, meeting the various needs and preferences of users,
            as well as bringing together chess enthusiasts and professional chess players in one place.
          </p>
          <p>
            One of the main features of the platform is to create a customized chess game.
            The game will be with the most comfortable interface, with the possibility of applying various filters.
          </p>
          <p>
            We allows you to discover the game of chess from new aspects. It aims to unite chess players in one social
            platform with various unique features and benefits.
          </p>
        </div>
      </div>

      <SectionShow
        headerText="Authorization pages"
        data={authorizationData}
      />

      <SectionShow
        headerText="Game board"
        data={gamePreviewData}
      />

      <SectionShow
        headerText="User profile"
        data={userProfile}
      />

      <SectionShow
        headerText="Chat"
        data={chat}
      />


      <div className={classes.posts}>
        <h2 className={classes.headerText}>Posts</h2>

        <div className={classes.postsImages}>
          <img src={post} alt="" />
          <img src={post2} alt="" />
          <img src={post3} alt="" />
          <img src={post4} alt="" />
          <img src={post5} alt="" />
        </div>
      </div>
    </div>
  )
}

const SectionShow = ({ headerText, data }) => {
  return (
    <div className={classes.authorization}>
      <h2 className={classes.headerText}>{headerText}</h2>

      {data.map((img, ind) =>
        <img
          className={classes.authorizationImg}
          src={img}
          key={ind}
        />
      )}
    </div>
  );
}