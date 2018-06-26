var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'key': options.key ? options.key : window.YOUTUBE_API_KEY,
      'part': 'snippet',
      'q': options.query ? options.query : undefined,
      'maxResults': options.max ? options.max : undefined,
      'videoEmbeddable': 'true',
      'type': 'video'
    },
    success: (data) => {
      setTimeout(() => {
        callback(data.items);
      }, 500);
    },
    error: (data) => {
      console.log('Error: ', data);
    }
  });
};

window.searchYouTube = searchYouTube;
