module.exports = ({env}) => ({
    'jwt-secret': env('JWT_SECRET'),
});
