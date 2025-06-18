const token = "YOUR_ACCESS_TOKEN";

fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${token}`)
  .then(res => res.json())
  .then(data => {
    const feed = document.getElementById("insta-feed");
    data.data.forEach(post => {
      const img = document.createElement("img");
      img.src = post.media_url;
      img.alt = post.caption || "";
      feed.appendChild(img);
    });
  })
  .catch(err => console.error("Failed to load Instagram feed:", err));