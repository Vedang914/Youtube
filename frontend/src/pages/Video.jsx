import React, { useState, useEffect } from 'react'
import "./Video.css";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { Link } from 'react-router-dom';

const Video = () => {
  const [message, setMessage] = useState("");
  console.log(message)
  return (
    <div className="video">
      <div className="videoPostSection">
        <div className="video_youtube">
          <video
            width="400"
            controls
            autoPlay
            muted
            className="video_youtube_video"
          >
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              type="video/mp4"
            />
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              type="video/webm"
            />
            Browser Not Supported
          </video>
        </div>

        <div className="video_youtubeAbout">
          <div className="video_uTubeTitle">{"Javascript for beginners"}</div>

          <div className="youtube_video_ProfileBlock">
            <div className="youtube_video_ProfileBlock_left">
              <Link to={'/user/7686'} className="youtube_video_ProfileBlock_left_img">
                <img
                  className="youtube_video_ProfileBlock_left_image"
                  src={
                    "data:image/png;base64,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"
                  }
                />
              </Link>
              <div className="youtubeVideo_subsView">
                <div className="youtubePostProfileName"> {"User1"} </div>
                <div className="youtubePostProfileSubs">{"2024-09-27"}</div>
              </div>
              <div className="subscribeBtnYoutube">Subscribe</div>
            </div>

            <div className="youtube_video_likeBlock">
              <div className="youtube_video_likeBlock_Like">
                <ThumbUpAltOutlinedIcon />
                <div className="youtube_video_likeBlock_NoOfLikes">{32}</div>
              </div>

              <div className="youtubeVideoDivider"></div>

              <div className="youtube_video_likeBlock_Like">
                <ThumbDownAltOutlinedIcon />
              </div>
            </div>
          </div>

          <div className="youtube_video_About">
            <div>2024-09-30</div>
            <div>This is the cool video</div>
          </div>

          <div className="youtubeCommentSection">
            <div className="youtubeCommentSectionTitle">2 Comments</div>

            <div className="youtubeSelfComment">
              <img
                src="data:image/png;base64,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"
                className="video_youtubeSelfCommentProfile"
              />
              <div className="addAComment">
                <input
                  type="text"
                  placeholder="Add a Comment"
                  value={message}
                  onChange={(e)=>{setMessage(e.target.value)}}
                  className="addAcommentInput"
                />
                <div className="cancelSubmitComment">
                  <div className="cancelComment">Cancel</div>
                  <div className="cancelComment">Comment</div>
                </div>
              </div>
            </div>

            <div className="youtubeOthersComments">
              <div className="youtubeSelfComment">
                <img
                  src="data:image/png;base64,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"
                  className="video_youtubeSelfCommentProfile"
                />
                <div className="others_commentSection">
                  <div className="others_commentSectionHeader">
                    <div className="channelName_comment">Username</div>
                    <div className="commentTimingOthers">2024-09-30</div>
                  </div>

                  <div className="otherCommentSectionComment">
                    This is the cool web app project
                  </div>
                </div>
              </div>

              <div className="youtubeSelfComment">
                <img
                  src="data:image/png;base64,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"
                  className="video_youtubeSelfCommentProfile"
                />
                <div className="others_commentSection">
                  <div className="others_commentSectionHeader">
                    <div className="channelName_comment">Username</div>
                    <div className="commentTimingOthers">2024-09-30</div>
                  </div>

                  <div className="otherCommentSectionComment">
                    This is the cool web app project
                  </div>
                </div>
              </div>

              <div className="youtubeSelfComment">
                <img
                  src="data:image/png;base64,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"
                  className="video_youtubeSelfCommentProfile"
                />
                <div className="others_commentSection">
                  <div className="others_commentSectionHeader">
                    <div className="channelName_comment">Username</div>
                    <div className="commentTimingOthers">2024-09-30</div>
                  </div>

                  <div className="otherCommentSectionComment">
                    This is the cool web app project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="videoSuggestions">
        <div className="videoSuggestionsBlock">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="video_suggetion_thumbnail_img"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile">Cricket 320</div>
            <div className="video_suggetions_About_Profile">
              136K views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="video_suggetion_thumbnail_img"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile">Cricket 320</div>
            <div className="video_suggetions_About_Profile">
              136K views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="video_suggetion_thumbnail_img"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile">Cricket 320</div>
            <div className="video_suggetions_About_Profile">
              136K views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="video_suggetion_thumbnail_img"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile">Cricket 320</div>
            <div className="video_suggetions_About_Profile">
              136K views . 1 day ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
