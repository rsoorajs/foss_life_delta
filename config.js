'use strict';

module.exports = {
    timeZone: process.env.timeZone, // 'Asia/Kolkata',
    apiKey: process.env.apiKey,
    domainUrl: process.env.domainUrl,
    uploadpath: `${__dirname}/uploads`,
    cron: {
        schedule: '10 5 * 1-12/2',
        min_age: 1, // Minimum days to keep file
        max_age: 30, // Maximym days to keep file
        max_size: 2000 // Size in KB to calculate retenstion period against
    }
};
