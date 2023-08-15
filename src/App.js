import React, { Component } from "react";
import "./App.css";

const url = "https://api.reddit.com/r/kitten.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
      isLoaded: false,
      items: [],
    };

    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    return fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => res.json())
      .then(
        (result) => {
          result.forEach((r) => {
            this.setState({
              items: [...this.state.items, r.url],
              isLoaded: true,
            });
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  // getData() {
  //   return fetch(url)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         result.data.children.forEach((d) => {
  //           const regex = /(https?:\/\/.*\.(?:png|jpg))/i;
  //           if (regex.test(d.data.url)) {
  //             this.setState({
  //               items: [...this.state.items, d.data.url],
  //               isLoaded: true,
  //             });
  //           }
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error,
  //         });
  //       }
  //     );
  // }

  render() {
    const imgStyle = {
      width: "500px",
      padding: "5px",
    };
    const { error, isLoaded, items } = this.state;
    //console.log(items)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <div className="header">
            <h1> Daily dose of cute Kittens</h1>
          </div>
          <div className="gallery">
            <ul>
              {items.map((items) => (
                <li>
                  <img alt="cute kitten" src={items} />
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    }
  }
}
export default App;
