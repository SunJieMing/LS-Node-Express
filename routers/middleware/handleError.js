module.exports = function handleError(err, req, res, next) {
    switch(err.code) {
        case 400:
            res
                .status(400)
                .send({success: false, data: undefined, error: 'REQUEST INFORMATION ERROR'});
            break;
        case 403:
            res
                .status(403)
                .send({success: false, data: undefined, error: 'Balance is the key, making things even is the secret to success.'});
            break;
        case 404:
            res
                .status(404)
                .send({success: false, data: undefined, error: 'ID ERROR'});
            break;
        default:
            res
                .status(500)
                .send({success: false, data: undefined, error: 'RESOURCE UNAVAILABLE'});
            break;
    }
};