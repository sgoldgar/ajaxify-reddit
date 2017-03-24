console.log('main.js loaded');

$(document).ready(function(){

  getHomepageData(); // load initial posts

  /*load home posts*/
  $('.home, h1').on('click', function(e){
    e.preventDefault();
    $('nav ul li').css('text-decoration', 'none');
    $('.home').css('text-decoration', 'underline');
    $('.links').html('');
    getHomepageData();
    console.log('home clicked')
  });

  /*load new posts and clear*/
  $('.new').on('click', function(e){
    e.preventDefault();
    $('nav ul li').css('text-decoration', 'none');
    $(this).css('text-decoration', 'underline');
    $('.links').html('');
    getNewData();
    console.log('new clicked')
  });

  /*load rising posts and clear*/
  $('.rising').on('click', function(e){
    e.preventDefault();
    $('nav ul li').css('text-decoration', 'none');
    $(this).css('text-decoration', 'underline');
    $('.links').html('');
    getRisingData();
    console.log('rising clicked')
  });

  /*load controversial posts and clear*/
  $('.controversial').on('click', function(e){
    e.preventDefault();
    $('nav ul li').css('text-decoration', 'none');
    $(this).css('text-decoration', 'underline');
    $('.links').html('');
    getControversialData();
    console.log('controversial clicked')
  });

  /*load top posts and clear*/
  $('.top').on('click', function(e){
    e.preventDefault();
    $('nav ul li').css('text-decoration', 'none');
    $(this).css('text-decoration', 'underline');
    $('.links').html('');
    getTopData();
    console.log('top clicked')
  });

  // /*load gilded posts and clear*/
  // $('.gilded').on('click', function(e){
  //   e.preventDefault();
  //   $('.links').html('');
  //   getGildedData();
  //   console.log('gilded clicked')
  // });

  // /*load wiki posts and clear*/
  // $('.wiki').on('click', function(e){
  //   e.preventDefault();
  //   $('.links').html('');
  //   getWikiData();
  //   console.log('wiki clicked')
  // });

  /*load promoted posts and clear*/
  $('.promoted').on('click', function(e){
    e.preventDefault();
    $('nav ul li').css('text-decoration', 'none');
    $(this).css('text-decoration', 'underline');
    $('.links').html('');
    getPromotedData();
    console.log('promoted clicked')
  });


//end doc ready
});

var defaultImage = "http://www.iconhot.com/icon/png/icontexto-inside/256/icontexto-inside-reddit-1.png"

var mainApiUrl = "https://www.reddit.com/";

function getHomepageData(){
  var apiUrl = mainApiUrl + ".json"; //homepage url json data
  var data = {}; //data targeted for homepage

  $.ajax({
    url : apiUrl,
    method : "GET",
    dataType : 'json',
    data : data
  })
  .done(function(response){
    console.log('home success',response);
    var feed = response.data.children;
    console.log(feed);
    for (var i=0; i<feed.length; i++){
      var post = feed[i].data;
      var thumbnail = post.thumbnail;
      var permalink = post.permalink;
      var title = post.title;
      var domain = post.domain; //store domain where content lives
      var author = post.author;
      var timestamp = post.created_utc; //store utc timestamp
      var subreddit = post.subreddit_name_prefixed;
      var comments = post.num_comments;
      var links = $('.main .links');
      if(thumbnail == "nsfw" || thumbnail == "default" || thumbnail == "spoiler"){
        links.append('<img class="thumb" src="' + defaultImage + '"/>');
      } else {
        links.append('<img class="thumb" src="' + thumbnail + '"/>');
      }
      links.append('<p class="domain"> (' + domain + ') </p>');
      links.append('<h3 class="title">' + title + '</p>');
      links.append('<p class="author"> submitted by: ' + author + ' to ' + subreddit + '</p>');
      links.append('<p class="comments">' + comments + ' comments</p>');
      links.append('<div class="line"></div>');
    }
  })
  .fail(function(error){
    console.log('home error', error);
  })
  .always(function(){
    console.log('home ajax working');
  });
//end function getHomepageData
}


/*load new reddit posts*/
function getNewData(){
  var apiUrl = mainApiUrl + "new/.json"; //new posts url json data
  var data = {};
  $.ajax({
    url : apiUrl,
    method : "GET",
    dataType: 'json',
    data : data
  })
  .done(function(response){
    console.log('new success',response);
    var feed = response.data.children;
    console.log(feed);
    for (var i=0; i<feed.length; i++){
      var post = feed[i].data;
      var thumbnail = post.thumbnail;
      var permalink = post.permalink;
      var title = post.title;
      var domain = post.domain; //store domain where content lives
      var author = post.author;
      var timestamp = post.created_utc; //store utc timestamp
      var subreddit = post.subreddit_name_prefixed;
      var comments = post.num_comments;
      var links = $('.main .links');
      if(thumbnail == "nsfw" || thumbnail == "default" || thumbnail == "spoiler"){
        links.append('<img class="thumb" src="' + defaultImage + '"/>');
      } else {
        links.append('<img class="thumb" src="' + thumbnail + '"/>');
      }
      links.append('<p class="domain"> (' + domain + ') </p>');
      links.append('<h3 class="title">' + title + '</p>');
      links.append('<p class="author"> submitted by: ' + author + ' to ' + subreddit + '</p>');
      links.append('<p class="comments">' + comments + ' comments</p>');
      links.append('<div class="line"></div>');
    }
  })
  .fail(function(error){
    console.log('new error', error);
  })
  .always(function(){
    console.log('new ajax working');
  });
//end function getNew
}

/*load rising reddit posts*/
function getRisingData(){
  var apiUrl = mainApiUrl + "rising/.json"; //rising url json data
  var data = {};
  $.ajax({
    url : apiUrl,
    method : "GET",
    dataType : 'json',
    data : data
  })
  .done(function(response){
    console.log('rising success',response);
    var feed = response.data.children;
    console.log(feed);
    for (var i=0; i<feed.length; i++){
      var post = feed[i].data;
      var thumbnail = post.thumbnail;
      var permalink = post.permalink;
      var title = post.title;
      var domain = post.domain; //store domain where content lives
      var author = post.author;
      var timestamp = post.created_utc; //store utc timestamp
      var subreddit = post.subreddit_name_prefixed;
      var comments = post.num_comments;
      var links = $('.main .links');
      if(thumbnail == "nsfw" || thumbnail == "default" || thumbnail == "spoiler"){
        links.append('<img class="thumb" src="' + defaultImage + '"/>');
      } else {
        links.append('<img class="thumb" src="' + thumbnail + '"/>');
      }
      links.append('<p class="domain"> (' + domain + ') </p>');
      links.append('<h3 class="title">' + title + '</p>');
      links.append('<p class="author"> submitted by: ' + author + ' to ' + subreddit + '</p>');
      links.append('<p class="comments">' + comments + ' comments</p>');
      links.append('<div class="line"></div>');
    }
  })
  .fail(function(error){
    console.log('rising error', error);
  })
  .always(function(){
    console.log('rising ajax working');
  });
//end function getRisingData
}

function getControversialData(){
  var apiUrl = mainApiUrl + "controversial/.json"; //controversial url json data
  var data = {};
  $.ajax({
    url : apiUrl,
    method : "GET",
    dataType : 'json',
    data : data
  })
  .done(function(response){
    console.log('controversial success',response);
    var feed = response.data.children;
    console.log(feed);
    for (var i=0; i<feed.length; i++){
      var post = feed[i].data;
      var thumbnail = post.thumbnail;
      var permalink = post.permalink;
      var title = post.title;
      var domain = post.domain; //store domain where content lives
      var author = post.author;
      var timestamp = post.created_utc; //store utc timestamp
      var subreddit = post.subreddit_name_prefixed;
      var comments = post.num_comments;
      var links = $('.main .links');
      if(thumbnail == "nsfw" || thumbnail == "default" || thumbnail == "spoiler"){
        links.append('<img class="thumb" src="' + defaultImage + '"/>');
      } else {
        links.append('<img class="thumb" src="' + thumbnail + '"/>');
      }
      links.append('<p class="domain"> (' + domain + ') </p>');
      links.append('<h3 class="title">' + title + '</p>');
      links.append('<p class="author"> submitted by: ' + author + ' to ' + subreddit + '</p>');
      links.append('<p class="comments">' + comments + ' comments</p>');
      links.append('<div class="line"></div>');
    }
  })
  .fail(function(error){
    console.log('controversial error', error);
  })
  .always(function(){
    console.log('controversial ajax working');
  });
//end function getControversialData
}

function getTopData(){
  var apiUrl = mainApiUrl + "top/.json"; //top url json data
  var data = {}; //data targeted for homepage
  $.ajax({
    url : apiUrl,
    method : "GET",
    dataType : 'json',
    data : data
  })
  .done(function(response){
    console.log('top success',response);
    var feed = response.data.children;
    console.log(feed);
    for (var i=0; i<feed.length; i++){
      var post = feed[i].data;
      var thumbnail = post.thumbnail;
      var permalink = post.permalink;
      var title = post.title;
      var domain = post.domain; //store domain where content lives
      var author = post.author;
      var timestamp = post.created_utc; //store utc timestamp
      var subreddit = post.subreddit_name_prefixed;
      var comments = post.num_comments;
      var links = $('.main .links');
      if(thumbnail == "nsfw" || thumbnail == "default" || thumbnail == "spoiler"){
        links.append('<img class="thumb" src="' + defaultImage + '"/>');
      } else {
        links.append('<img class="thumb" src="' + thumbnail + '"/>');
      }
      links.append('<p class="domain"> (' + domain + ') </p>');
      links.append('<h3 class="title">' + title + '</p>');
      links.append('<p class="author"> submitted by: ' + author + ' to ' + subreddit + '</p>');
      links.append('<p class="comments">' + comments + ' comments</p>');
      links.append('<div class="line"></div>');
    }
  })
  .fail(function(error){
    console.log('top error', error);
  })
  .always(function(){
    console.log('top ajax working');
  });
//end function getTopData
}

function getPromotedData(){
  var apiUrl = mainApiUrl + "ads/.json"; //promoted url json data
  var data = {};
  $.ajax({
    url : apiUrl,
    method : "GET",
    dataType : 'json',
    data : data
  })
  .done(function(response){
    console.log('promo success',response);
    var feed = response.data.children;
    console.log(feed);
    for (var i=0; i<feed.length; i++){
      var post = feed[i].data;
      var thumbnail = post.thumbnail;
      var permalink = post.permalink;
      var title = post.title;
      var domain = post.domain; //store domain where content lives
      var author = post.author;
      var timestamp = post.created_utc; //store utc timestamp
      var comments = post.num_comments;
      var links = $('.main .links');
      if(thumbnail == "nsfw" || thumbnail == "default" || thumbnail == "spoiler"){
        links.append('<img class="thumb" src="' + defaultImage + '"/>');
      } else {
        links.append('<img class="thumb" src="' + thumbnail + '"/>');
      }
      links.append('<p class="domain"> (' + domain + ') </p>');
      links.append('<h3 class="title">' + title + '</p>');
      links.append('<p class="author"> submitted by: ' + author + ' to ' + subreddit + '</p>');
      links.append('<p class="comments">' + comments + ' comments</p>');
      links.append('<div class="line"></div>');
    }
  })
  .fail(function(error){
    console.log('promo error', error);
  })
  .always(function(){
    console.log('promo ajax working');
  });
//end function getPromotedData
}
