import { Bookmarks, Explore, Lists, Messages, More, Profil, TwiterIcon, Notifications, Home, Padlock, More2 } from '../icons/index';
import TweetEditorFormButton from './tweetEditorFormButton';
import Avatar from "./avatar";

export default function LeftSidebar() {
  return (
    <div className='left-sidebar'>
      <div className='sidebar'>
        <div className='sidebar-nav'>
          <img src={TwiterIcon} alt="" />
        </div>
        <div className='sidebar-nav'>
          <img src={Home} alt="" />
          <h4>Home</h4>
        </div>
        <div className='sidebar-nav'>
          <img src={Explore} alt="" />
          <h4>Explore</h4>
        </div>
        <div className='sidebar-nav'>
          <img src={Notifications} alt="" />
          <h4>Notifications</h4>
        </div>
        <div className='sidebar-nav'>
          <img src={Messages} alt="" />
          <h4>Messages</h4>
        </div>
        <div className='sidebar-nav'>
          <img src={Bookmarks} alt="" />
          <h4>Bookmarks</h4>
        </div>
        <div className='sidebar-nav'>
          <img src={Lists} alt="" />
          <h4>Lists</h4>
        </div>
        <div className='sidebar-nav'>
          <img src={Profil} alt="" />
          <h4>Profil</h4>
        </div>
        <div className='sidebar-nav'>
          <img src={More} alt="" />
          <h4>More</h4>
        </div>
        <TweetEditorFormButton style={"left-sidebar-button"} />
      </div>
      <div>
        <div className="">
          <div className="follower-origin">
            <Avatar />
            <div>
              <div className="left-sidebar-avatar-text">
                <div>
                  <h3>Bradley Ortiz</h3>
                  <p className="gray-text">@bradle_</p>
                </div>
                <img src={Padlock} alt="" />
                <img src={More2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};