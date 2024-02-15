# Choccy MrBeast Sub Count Proxy
The proxy for [ChoccyCounts's MrBeast API](https://choccycounts.com/api/messages).

# The Issue
The issue is that the API doesn't have CORS enabled, meaning that you can't make a request from any origin without using headers. This resolves it, and I have permission to do this.  
Also this fixes the encoding issue so this isn't HTML, and returns as JSON. Just because it annoyed me
![Requests to the original URL get rejected](https://github.com/stats100/choccyproxy/blob/main/.github/assets/cors.jpg?raw=true)

# How to use
All you got to do is make a request to [here](https://choccyproxy.stats100.xyz), and can be done easily in JavaScript.

```js
fetch('https://choccyproxy.stats100.xyz')
.then(res => {return res.json()})
.then(data => {
    console.dir(data, {depth: null})
    // do whatever else you want
})
```