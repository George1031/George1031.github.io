var posts=["2024/05/07/hello-world/","2024/05/17/scrt安装激活/","2024/05/07/纯小白搭建博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };