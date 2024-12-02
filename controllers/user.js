const User = require("../models/user");
const bcrypt = require("bcryptjs")

exports.signUp = async (req, res) => {
    try {
      const { channelName, userName, about, profilePic, password } = req.body;
  
      console.log(req.body); 
  
      const isExist = await User.findOne({ userName });
      if (isExist) {
        return res.status(400).json({
          success: false,
          message: "Username already exists",
        });
      }
  
      const updatedPass = await bcrypt.hash(password, 10);
      console.log(updatedPass); 
  
      const user = new User({
        channelName,
        userName,
        about,
        profilePic,
        password: updatedPass,
      });
  
      await user.save();
      console.log(user); // Log the saved user
  
      return res.status(201).json({
        success: true,
        data: user,
        message: "User created successfully",
      });
    } catch (error) {
      console.error(error); // Log the error
      return res.status(500).json({ error: "Server error" });
    }
  };


  exports.signIn = async (req,res)=>{
    try{
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        if(user && await bcrypt.compare(password,user.password)){

            res.status(200).json({
                success:true,
                message:"User logged in successfully"
            })

        }
        else{
            res.status(400).json({
                success:false,
                message:"Invalid credentials"
            })
        }
    } catch (errorMsg){
        console.error(error)
        res.status(500).json({ error: 'Server error' });
    }
}
  
