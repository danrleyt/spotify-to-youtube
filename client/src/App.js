import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { List } from './components/List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      list: []
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    axios.get('/api/current_user').then(res => {
      this.setState({ info: res.data });
    });
  }

  async getData() {
    const res = await axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me/top/tracks',
      params: {
        limit: 10
      },
      headers: {
        Authorization: `Bearer ${this.state.info.accessToken}`
      }
    });

    const newList = await axios.post('/api/videos', res.data.items);

    const list = res.data.items.map((v, i) => (v.videoId = newList[i]));
    console.log(list);
    this.setState({ list: res.data.items });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.info ? (
            <a onClick={this.getData}>Get List</a>
          ) : (
            <a
              className="App-link"
              href="/auth/spotify"
              rel="noopener noreferrer"
            >
              Authorize Spotify
            </a>
          )}
          <List list={this.state.list}></List>
        </header>
      </div>
    );
  }
}

export default App;
