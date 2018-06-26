class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVid: {}
    };
    this.clickVideoHandler = this.clickVideoHandler.bind(this);
    this.searchYouTube = props.searchYouTube.bind(this);
    this.searchYouTubeHandler = this.searchYouTubeHandler.bind(this);
  }

  clickVideoHandler(currVid) {
    this.setState({currentVid: currVid});
  }

  searchYouTubeHandler(input) {
    setTimeout(
      this.searchYouTube({'query': input}, (dataItems) => {
        this.setState({videos: _.identity(dataItems), currentVid: _.identity(dataItems)[0]});
      }),
      500);
  }

  componentDidMount() {
    this.searchYouTube((dataItems) => {
      this.setState({videos: _.identity(dataItems), currentVid: _.identity(dataItems)[0] });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchYouTubeHandler={this.searchYouTubeHandler}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVid}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} clickVideoHandler={this.clickVideoHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
