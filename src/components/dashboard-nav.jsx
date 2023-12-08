import { NavLink } from "react-router-dom";
import { Bookmarks, Explore, Lists, Messages, More, Profile, TwiterIcon, Notifications, Home, Padlock, More2 } from "../icons/index"
import TweetEditorFormButton from './tweetEditorFormButton';
import Avatar from "./avatar";

export default function DashboardNav() {
    return (
        <div className="left-sidebar">
            <ul className='sidebar'>
                <li className="sidebar-nav">
                    <img src={TwiterIcon} alt="" />
                </li>
                <li className="sidebar-nav">
                    <img src={Home} alt="" />
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="sidebar-nav">
                    <img src={Explore} alt="" />
                    <NavLink to="/explore">Explore</NavLink>
                </li>
                <li className="sidebar-nav">
                    <img src={Notifications} alt="" />
                    <NavLink to="/notifications">Notifications</NavLink>
                </li>
                <li className="sidebar-nav">
                    <img src={Messages} alt="" />
                    <NavLink to="/messages">Messages</NavLink>
                </li>
                <li className="sidebar-nav">
                    <img src={Bookmarks} alt="" />
                    <NavLink to="/bookmarks">Bookmarks</NavLink>
                </li>
                <li className="sidebar-nav">
                    <img src={Lists} alt="" />
                    <NavLink to="/lists">Lists</NavLink>
                </li>
                <li className="sidebar-nav">
                    <img src={Profile} alt="" />
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li className="sidebar-nav">
                    <img src={More} alt="" />
                    <NavLink to="/more">More</NavLink>
                </li>
                <TweetEditorFormButton style={"left-sidebar-button"} />
            </ul>
            <div>
                <div className="">
                    <div className="follower-origin">
                        <Avatar style={"left-sidebar-avatar"} />
                        <div>
                            <div className="left-sidebar-avatar-text">
                                <div>
                                    <h4>Bradley Ortiz</h4>
                                    <p className="gray-text left-sidebar-avatar-name">@bradle_</p>
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
}