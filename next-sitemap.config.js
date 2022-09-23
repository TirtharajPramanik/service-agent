const siteUrl = 'https://agent.philipmartservice.local';

module.exports = {
	siteUrl: process.env.SITE_URL || siteUrl,
	generateRobotsTxt: true
};
