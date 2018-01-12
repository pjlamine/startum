var makeBlog = (posts) =>{
  console.log(JSON.stringify(posts));
  // var i = 0;
  posts.reverse().forEach( (post, i) =>{
    // i = i + 1;
      // append headers
      var header = "<li><a href='#tab" + i + "' ";
      if(i == 0) header += "class='active'";
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
  $.get("http://startum-entrepreneurship.com:3000/posts", makeBlog);

    // $.get("http://localhost:3000/posts", makeBlog); // uncomment for local development

};
