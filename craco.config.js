const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@validations': path.resolve(__dirname, 'src/validations/'),
            '@redux': path.resolve(__dirname, 'src/redux/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@config': path.resolve(__dirname, 'src/config/'),
            '@api': path.resolve(__dirname, 'src/api/'),
        },
    },
};