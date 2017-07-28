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

        <section className="Personal Data">
          {currentUser.username + "'s stats"}
        </section>

        <section className="totals">
          <h2>Totals</h2>
          <table>
            <thead>
              <th>Number of Dives</th>
              <th>Number of Dive Sites</th>
              <th>Time Spent Underwater</th>
            </thead>
            <tbody>
              <td>data</td>
              <td>data</td>
              <td>data</td>
            </tbody>
          </table>
        </section>

        <section className="otherstats">
          <h2>Averages and Personal Bests</h2>
            <table>
              <thead>
                <th className="field">.</th>
                <th>Dive Time</th>
                <th>Dive Length</th>
                <th>Breath Rate</th>
              </thead>
              <tbody>
                <th>avg</th>
                <td>data</td>
                <td>data</td>
                <td>data</td>
              </tbody>
              <tbody>
                <th>best</th>
                <td>data</td>
                <td>data</td>
                <td>data</td>
              </tbody>
            </table>
        </section>

        <figure>
          Heatmap
        </figure>

      </div>
    );
  }

}

export default withRouter(Dashboard);
