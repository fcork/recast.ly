var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'part': 'snippet',
      'q': options.query,
      'maxResults': options.max,
      'onBehalfOfContentOwner': options.key,
      'videoEmbeddable': true
    },
    success: (data) => {
      console.log(data);
      callback(data.items);
    },
    error: (data) => {
      console.log('Error: ', data);
    }
  });
};

window.searchYouTube = searchYouTube;
