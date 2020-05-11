const mongose = require('mongoose');
const Post = mongose.model('Post');

exports.index = async (req, res)=> {

    let responseJson = {
        pageTitle:'HOME',
        posts:[]
        
    };

    const posts = await Post.find();
    responseJson.posts = posts;
    
    res.render('home', responseJson);
}