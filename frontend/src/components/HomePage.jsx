import React from "react";
import "./HomePage.css";
import { Link } from 'react-router-dom';

const HomePage = ({ sideNavbar }) => {
  const options = [
    "All",
    "Twenty20 Cricket",
    "Music",
    "Live",
    "Mixes",
    "Gaming",
    "Debates",
    "Coke Studio Pakistan",
    "Democracy",
    "Pakistani dramas",
    "Comedy",
    "Pakistani dramas",
    "Comedy",
  ];
  return (
    <div className={sideNavbar ? "homePage" : "fullHomePage"}>
      <div className="homePage_options">
        {options.map((item, index) => {
          return (
            <div key={index} className="homePage_option">
              {item}
            </div>
          );
        })}
      </div>

      <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>


        <Link to={'/watch/9897'} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo0keNjGR2EvD0iODP-dVmkoaqwFEtab-iw&s"
              className="youtube_thumbnailPic"
              alt="Thumbnail"
            />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img className="youtube_thumbnail_Profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo0keNjGR2EvD0iODP-dVmkoaqwFEtab-iw&s" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>


        </Link>

        <Link to={'/watch/9897'} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo0keNjGR2EvD0iODP-dVmkoaqwFEtab-iw&s"
              className="youtube_thumbnailPic"
              alt="Thumbnail"
            />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img className="youtube_thumbnail_Profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo0keNjGR2EvD0iODP-dVmkoaqwFEtab-iw&s" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>


        </Link>

        <Link to={'/watch/9897'} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo0keNjGR2EvD0iODP-dVmkoaqwFEtab-iw&s"
              className="youtube_thumbnailPic"
              alt="Thumbnail"
            />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img className="youtube_thumbnail_Profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo0keNjGR2EvD0iODP-dVmkoaqwFEtab-iw&s" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>


        </Link>

        <Link to={'/watch/9897'} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo0keNjGR2EvD0iODP-dVmkoaqwFEtab-iw&s"
              className="youtube_thumbnailPic"
              alt="Thumbnail"
            />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img className="youtube_thumbnail_Profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo0keNjGR2EvD0iODP-dVmkoaqwFEtab-iw&s" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>


        </Link>

        <Link to={'/watch/9897'} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo0keNjGR2EvD0iODP-dVmkoaqwFEtab-iw&s"
              className="youtube_thumbnailPic"
              alt="Thumbnail"
            />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img className="youtube_thumbnail_Profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo0keNjGR2EvD0iODP-dVmkoaqwFEtab-iw&s" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>


        </Link>

        <Link to={'/watch/9897'} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo0keNjGR2EvD0iODP-dVmkoaqwFEtab-iw&s"
              className="youtube_thumbnailPic"
              alt="Thumbnail"
            />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img className="youtube_thumbnail_Profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo0keNjGR2EvD0iODP-dVmkoaqwFEtab-iw&s" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>


        </Link>

        

        
      </div>
    </div>
  );
};

export default HomePage;
