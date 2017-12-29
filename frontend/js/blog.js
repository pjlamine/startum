var makeBlog = (posts) =>{
  console.log(JSON.stringify(posts));
  // var i = 0;
  posts.reverse().forEach( (post, i) =>{
    // i = i + 1;
      // append headers
      var header = "<li><a href='#tab" + i + "' ";
      if(i == posts.length-1) header += "class='active'";
      header += ">"
       + post.title + '<ul class="info-post">'
       + '<li><i class="fa fa-user"></i>'+ post.author + '</li>'
       + '<li><i class="fa fa-calendar"></i>'+ post.Created_date + '</li>'
       + '</ul>';

       console.log("\n\n" + header);
       $("#blog-headers").append(header);

      // append body
      var body = "<div id ='tab" + i+ "'>"
      + "<img src='img/logos/startum_sm.png'>"
      + '<div class="text-content">'
      +     '<h4>' + post.title + '</h4>'
      +       ' <ul class="info-post">'
      +         '<li><i class="fa fa-user"></i>'+ post.author + '</li>'
      +         '<li><i class="fa fa-calendar"></i>'+ post.Created_date + '</li>'
      +   '</ul>'
      +        '<p>' + post.body + '</p>'
      +    '  </div>'
      +    '</div>';

      $("#first-tab-group").append(body);
  });

  loadAnimations();
};


var loadPosts = ()=>{
    // $.get("http://localhost:3000/posts", makeBlog);
    var data = [{"_id":"5a4338be81461016f409b285","title":"first blog post","body":"Take Charge of your innovative Startup Disruption Industry The Uber For Big Data Lean Cryptocurrency Bois Wallet ","__v":0,"status":["pending"],"Created_date":"2017-12-27T06:07:58.175Z","image_src":"https://thumbnails-visually.netdna-ssl.com/the-founders-dictionary_5029153920286_w1500.jpg","author":"Paul"},{"_id":"5a441df481461016f409b286","title":"7 disruptive Ann Arbor startups. The 5th one will SHOCK you.","body":"7 new Ann Arbor startups that are taking the midwest by storm. Wall Street HATES these innovators. Student entrepreneurs disrupt markets by following 9 easy steps. Subscribe below to learn how these students earned gazbillions by harnessing the power of the Jule and Litecoin.","__v":0,"status":["pending"],"Created_date":"2017-12-27T22:25:56.727Z","image_src":"","author":"Paul"}];
    makeBlog(data);
};
