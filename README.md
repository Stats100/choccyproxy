# This repo is now archived!
Please use [Nia's MrBeast Sub Count API](https://nia-statistics.com/mrbeastsubcount), which has CORS enabled! Choccy removed this API a few weeks ago, thus my API doesn't work anymore. It still exists, you'll just get a 403 because I'm too lazy to remove it from the DNS records :P

# The Issue
The issue is that the API doesn't have CORS enabled, meaning that you can't make a request from any origin without using headers. This resolves it, and I have permission to do this.  
Also this fixes the encoding issue so this isn't HTML, and returns as JSON. Just because it annoyed me
![Requests to the original URL get rejected](https://github.com/Stats100/choccyproxy/blob/main/.github/assets/cors.png)
