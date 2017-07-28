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

    return (
      <div className="full-page-component">
        <h1 className="form-header">Dashboard</h1>

        <section className="Personal Data">

        </section>

        <section className="totals">
          <table>
            <tr>
              <th>Number of Dives</th>
              <th>Number of Dive Sites</th>
              <th>Time Spent Underwater</th>
            </tr>
            <tr>
              <td>data</td>
              <td>data</td>
              <td>data</td>
            </tr>
          </table>
        </section>

        <section className="otherstats">

        </section>

        <figure>
          Heatmap
        </figure>

      </div>
    );
  }

}

export default withRouter(Dashboard);
