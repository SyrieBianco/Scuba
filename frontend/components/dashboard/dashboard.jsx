import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as Util from '../../util/stats_util';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    // this.state
    //bindings
  }

  componentDidMount() {
    this.props.fetchDives();
    this.props.fetchRoutes();
  }





  render() {

    const {currentUser, dives, routes} = this.props;
    if ( !dives || !routes ) return null;

    const emptyIndexMessage = (loggedDives, loggedRoutes) => {
      if (loggedDives.length === 0 && loggedRoutes.length === 0) {
        return (
          <p className="empty-index">You haven't logged any dives yet!
          <br/>
          <Link className="inline-link" to="/new_dive">{"Log a dive "}</Link>
          or
          <Link className="inline-link" to="/new_route">{" create a route "}</Link>
            to get started</p>
        );
      } else if (loggedDives.length === 0) {
        return (
          <p className="empty-index">You haven't logged any dives yet!
          <br/>
          <Link className="inline-link" to="/new_dive">{"Log a dive "}</Link>
          or
          <Link className="inline-link" to="/new_route">{" create a route "}</Link>
            to get started</p>
        );
      } else return null;
    };

    const {bestDive, bestRate} = Util.bestBreath(dives);

    const bestDiveLink = () => (
      !bestDive ? null :
        <Link to={"dive/" + bestDive.id}>
            {bestRate ? bestRate : "—" } cu ft per second
        </Link>
    );



    return (
      <div className="full-page-component">
        <h1 className="form-header">Dashboard</h1>
        {emptyIndexMessage(dives, routes)}

        <div className="dashboard">

        <section className="Personal Data">
          <h2>{currentUser.username + "'s stats"}</h2>
        </section>

        <section className="totals">
          <h3>Totals</h3>
          <table>
            <thead>
              <tr>
                <th className="stats-header">Number of Dives</th>
                <th className="stats-header">Number of Dive Sites</th>
                <th className="stats-header">Time Spent Underwater</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ dives.length === 0 ? "—" : dives.length }</td>
                <td>{ routes.length === 0 ? "—" : routes.length }</td>
                <td>{ Util.totalTime(dives) === 0 ? "—" : Util.totalTime(dives) }</td>
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
                  <th className="stats-header">Dive Time</th>
                  <th className="stats-header">Breathing Rate</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th className="stats-sider">avg</th>
                  <td>{Util.avgDiveTime(dives) === 0 ? "—" : Util.avgDiveTime(dives)}</td>
                  <td>{Util.avgBreathingRate(dives) === 0 ? "—" : Util.avgBreathingRate(dives)} cu ft per second</td>
                </tr>
              </tbody>

              <tbody>
                <tr>

                  <th className="stats-sider">best</th>
                  <td> — </td>
                  <td className="best-dive-link">
                    {bestDiveLink()}
                  </td>

                </tr>
              </tbody>
            </table>
        </section>

      </div>
      </div>
    );
  }

}

export default withRouter(Dashboard);
