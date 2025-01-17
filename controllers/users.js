const User = require('../models/user');

module.exports = {
    signup, 
    login
}

async function signup(req, res){
    const user = new User({...req.body});
    try{
        await user.save();
        const token = createJWT(user)
        res.json({ token })
    }catch(err){
        console.log(err, "<- err @ Signup controller function")
        res.status(400).json({err});
    }
}

async function login(req, res) {
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(401).json({err: 'bad credentials'});
        user.comparePassword(req.body.password, (err, isMatch) => {
            console.log(req.body, '<----req.body')
            if(isMatch){
                const token = createJWT(user);
                res.json({ token })
            }else{
                return res.status(401).json({err: 'bad credentials'});
            }
        })
    }catch(err){
        return res.status(401).json(err)
    }    
}

function createJWT(user){
    return jwt.sign(
        { user },
        SECRET,
        {expires: '24h'}
    );
}