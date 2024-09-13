require("dotenv").config();

module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
        timezone: "+07:00",
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
        timezone: "+07:00",
        dialectOptions: {
            ssl: {
                require: true, // Yêu cầu SSL khi kết nối
                rejectUnauthorized: false, // Từ chối chứng chỉ không được xác thực (nếu để false thì chấp nhận)
            },
        },
    },
};
