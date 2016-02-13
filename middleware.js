/**
 * Created by apple on 2/13/16.
 */
var middleware = {
    requireAuthentication: function(req,res,next){
        console.log('private route hit');
        next();
    },
    logger:function(req,res,next){
        var date = new Date();
        console.log('Request: '+req.method+' '+req.originalUrl+date.toString());
        next();
    }
};

module.exports = middleware;