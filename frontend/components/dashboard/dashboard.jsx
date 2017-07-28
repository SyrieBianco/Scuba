import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    // this.state
    //bindings
  }

// instance methods

  render() {
    const {currentUser} = this.props;

    return (
      <div className="full-page-component">
        <h1 className="form-header">Dashboard</h1>
        <div className="dashboard">

        <section className="Personal Data">
          <h2>{currentUser.username + "'s stats"}</h2>
        </section>

        <section className="totals">
          <h3>Totals</h3>
          <table>
            <thead>
              <tr>
                <th>Number of Dives</th>
                <th>Number of Dive Sites</th>
                <th>Time Spent Underwater</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>data</td>
                <td>data</td>
                <td>data</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="otherstats">
          <h3>Averages and Personal Bests</h3>
            <table>
              <thead>
                <tr>
                  <th className="field"></th>
                  <th>Dive Time</th>
                  <th>Dive Length</th>
                  <th>Breath Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>avg</th>
                  <td>data</td>
                  <td>data</td>
                  <td>data</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th>best</th>
                  <td>data</td>
                  <td>data</td>
                  <td>data</td>
                </tr>
              </tbody>
            </table>
        </section>

        <figure>
          Heatmap
        </figure>
      </div>
      </div>
    );
  }

}

export default withRouter(Dashboard);
