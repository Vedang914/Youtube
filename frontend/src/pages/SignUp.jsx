import React from "react";
import "./SignUp.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="signup_card">
        <div className="signUp_title">
          <YouTubeIcon
            sx={{ fontSize: "54px" }}
            className="login_youtubeImage"
          />
          SignUp
        </div>

        <div className="signUp_Inputs">
          <input
            type="text"
            placeholder="Channel Name"
            className="signUp_Inputs_inp"
          />
          <input
            type="text"
            placeholder="user Name"
            className="signUp_Inputs_inp"
          />
          <input
            type="password"
            placeholder="Password"
            className="signUp_Inputs_inp"
          />
          <input
            type="text"
            placeholder="About Your Channel"
            className="signUp_Inputs_inp"
          />

          <div className="image_upload_signup">
            <input type="file" className="random" />
            <div className="image_upload_signup_div">
              <img className="image_default_signUp" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEX///8AAAD09PTg4OBdXV34+PgwMDDPz8/Dw8PV1dXIyMj7+/tjY2Pd3d0tLS2Pj49MTExRUVEPDw+9vb0VFRU/Pz8nJyd6eno4ODhERETo6OiYmJifn5+rq6uGhoZra2scHBy0tLSjaEmzAAAIYElEQVR4nM1c2YKyOgxWkFUBwQVFUXn/l/xFGwpIm6SFOee7chwoIc2e2NXKBo4bxM2t3OX++Visi6O/35W3Oo5cx2pZC4IOj+f+vJ5Eun8+Dn9NWHIop6kZomySv6Koum9SCkkflm3u1fIUufWeShBgX7uLkhTtfC5JLfxdtBRFVXMxoeiL6yJy791PUw87vtJNmdVhGAdBHIdv+9Cah0myam9mkpz69fuY/HE7VNuJq6vw/sh/r381s5J1uI7WL/wyrLQb4lSHMi1Gt+3j2UiKNmMW3QLancFtfOtMIu89hu/rZy5jF7zkMTRqxW1qw5mIhyq3ObDX9A5Ddp2IbFYv+Ogvd9wkRq+5TXYDPbFjljvQoaeFPCQDZ7mz8D3hYOMsnWsy2ERjNexvnX+wI6nFoS/yN6MlnGdPmLIZVOYtW1nP1pcGltTpRQNXnTBVdX0IqHFA1LPCOZumqGcJ9MoiGHq6RxSXu73JdffMkMaVce451F+aSVXIKE8J5dIXlhIG8sYN9v5BX6kuhAjFkWqYMuxoJWnCxbFaD3C9o8t70malZF5FMrzEn9B/cYEa5da9c6c+0SB7MpqjGKftbkzUOkdNY9NdeyJZBmkLjoQdr8LnD02tJGIiH3fOcE9RWvkQnKbkMRkjv3HGNj7qLn3iNHUajvMp1mZbOcKsqLPuGfYg6YMR87SqfmVpiBSRyLi7EhFBqd8NQtMdIanFTS/ETXeh1jB4nXojTtwh1RLWO+KL7XTUdwJV6lerqGnpSW8cu1fTiFW3yxs935NxxqVGql1J7oxSqzx4/5fedFQTiamaV/rsEJa6qiKRbvP0auNhajfERrvYAS5TCHFU6P8PeCierkKtXQ3iq2I6BYD9PelD30j1cBXO2oxjCz5hUlOBkUe93/Z+ggIUelUOYIMmrLUDGoUY/VD1aA30dgFEef+rqLX4V4rkLXRrIKF/zy1kXj9OxAH3iDisSvVgHZDoBATnPGYVWHy9AkuG8oCElyCmIz2tQAew3Jzm88ZAgqtEXHYdcrQRXyM+b+VMVA0JwPJOeNWhVAkH88LCeJdc1h8CWTYS3uYy+FLci4QaktFcYNkBeK5o4ju02sM258SF4WV78borEr0NWlsxJQrLubZCAX0Z2IOe42meKVFoEgK2SloFkZX4eF4YKB+rB5oHe2KzOj0FK42mOgsS1XlA8JNgzQmFHFOi8KVdcSXYWSFkSGBuRRReXIGQSPi5RBhESmnUVNAJFR8RgqZf6yEEHwnu7IgiFDEgGv+aAOF4fAJNSxK1Ehv2+Pwh7sN88eJEgVduPzviM1bQ+GAp39fi0LsWgm5S9THh5KE9UNYGc9lyR6RxOanxTC4iGBAFsVorVE/5kUCUSd5AJArY85T0EerALVHsUQkGUcKzvPcMegskOQ/MomFK+XTVSXfqguM4UuS8MSRpTaq2riqR5kVQk3oRbnLUz8RBEQ+h2jG8/QW/ZXVTPZCCK0G7hU1v4ElYEvrGdrKMTwYhMBISewPjTrAIv02YuYkStJSQyBDiFmYFbwRKv0pEn0+Iz7GyeQtuCW8AbVVaQCQwOQgXxUxR6vlKEBIAcMkXqYY4rEwCZapBWM/zSsR7JJNras/fSCnrC5t5hBCPRJRpNLWmtTPBuxQsolbGlion9T8hV4Lto82eGBUXW9DmZGLglHCCpCDB2NOQ4v+eTIkcnjhf4xnJOnUoQpgEH4ynvlchYZTOUBdvvpfvGW7mCwOzfqWuLYRjJ50gEZWqv64GeXako0VQR58bYvdBKA7mCxGG3MAJkpL2wa1k0FcWSldzwmEBVzGurwAl/hDo/DAncRBgtUJ29ME5mTiwUiwBjqwzpslkigXzNrRk9ItgPKisBl3Ku3it7Xmx0naBTE3FEPpe+wgybecVOAS21BYNZ0wYCggtc6EsxBrai5VkDEA2yS0gBGndMKto1oEULpDmtTqAVf7cZPJWXZdCC94AtHAyRf8Phk1v4eI/VqEGBwJ+nzmcknUPaJ3/yZs3hsmzb2THKe734KrJ+SBnzkAPi/ucNkgPSGDFE/KfNginYSThIL6GNr8pMW4YMVprEmhYxVrtt7XWNSE5UoBHVaxfDGyF7u27b+jt2g6EDJA12P3broVpA0bsQ5nkQAcKJGAAOe3JNZTDyKJOG5qgGxkQ8/57QDZHKSx/QBx5IQs7FCkGBpw6VvKFQ07+HjRrBX2o0+DbRixC8couq6J3o9Q24CWHSYZDHVVaBSVzBudcopEeSNQ4TiUNdVVhZtTvO2eh1jyAno3DCnT8zXPvG4sfsl52daVyPOAcjj8CCAZ0Kqyqwrqc/HEqD6+yjqcEH0TnN/7qRiqHxsVzgiy34NAIxSXPAmfIMpCcqe7NxPCp22QWBWE19lkjzXSiFRwQt69PdKLswisasHC+ZMmXM/Da006pG2h+hzRRxi9DsXHKErl5hcJuQ0hTNBt6Xm6FYtPA5qn8pDefQLOhHJKn5r1LQGP1rZpnNtCFE2ZlcnvoEymLlpANkODygK8wP9Dayn8gVoT41K7RbwBKDO4YztiYgpbfe3/gYSSuxPQ+WtARj+GTf8bP7ClY4MzIomPD0Ts2TaxDJv6GVynzx+3RH0QMJ/ZJFZ7hSCAdEz9zQuFYDQHheJodHrSox2H1gvpY0DtbHOmRLORycquTT+hFHw4etqcrhbPbhssMRyvNzKzCmk1fBHZjiwNsZjvdbNvMFM1cm1kOrRFwrIYEBQr8cA42WZbcOt2XOP+taowOyfvCbxY7ijH43x3e94HBMYenhY85/IBzIOSZdn7QLKAfnTmnCSCgPWQ0V7DstX8+lpNsjDA3iutbubumn4LcMb3untk9DBI7gv4BKYltb+DUSvYAAAAASUVORK5CYII=" />
            </div>
          </div>

          <div className="signUpBtns">
                        <div className="signUpBtn" >SignUp</div>
                        <Link to={'/'} className="signUpBtn">Home Page</Link>

                    </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
