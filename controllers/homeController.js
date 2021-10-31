module.exports.home = function(req,res){
    return res.end('<h1>This is home controller1</h1>')
    // console.log('This is console experiment')
}

module.exports.dog = function(req,res){
    return res.send('This dog is cute')
}