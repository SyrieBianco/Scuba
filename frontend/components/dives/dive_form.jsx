import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class DiveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route_id: 0,
      title: '',
      notes: '',
      date: null,
      start_time: "00:00",
      end_time: "00:00",
      tank_size: 0,
      start_air_pressure: 0,
      end_air_pressure: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  this.props.fetchRoutes();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createDive(this.state)
    .then(data => this.props.history.push(`/dives/${data.dive.id}`));
  }

  update(property) {
    const that = this;
    return e => {
      return that.setState({ [property]: e.target.value});
    };
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="new-dive-error" key={error}>{error}</li>);
        })
      );
    }
  }


  render() {
    const { routes } = this.props;

    return (
      <section className="new-dive-page">
        <ul className="new-dive-errors">
          {this.renderErrors()}
        </ul>
        <div className="new-dive-form-container">
        <form className="new-dive-form-box" onSubmit={this.handleSubmit}>
          <h1 className="form-header"> Log a New Dive </h1>
          <div className="new-dive-form">
            <div className ="title-inputs">
              <label className="new-dive-form-headers"> <p>Dive Title:</p>
                <input
                  className="title-input"
                  type="text"
                  value={this.state.title}
                  placeholder="e.g. Barracuda Point"
                  onChange={this.update('title')}
                />
              </label>

              <label className="new-dive-form-headers"> <p>Dive Route:</p>
                <select
                    className="route-input"
                    value={this.state.route_id || ""}
                    onChange={this.update('route_id')}
                  >

                <option value="" disabled="true">
                   select a route
                 </option>

                  {routes.map((route) => {
                    return <option value={route.id} key={route.id}>{route.name}</option>;
                    })}
                </select>

                <p className="text">— or —</p>
                <Link className="add-route" to="/new_route">add a route </Link>
              </label>
            </div>

          <div className ="date-time-inputs">
          <label className="new-dive-form-headers"> Date:
            <input
              className="date-input"
              type="date"
              value={this.state.date || ''}
              onChange={this.update('date')}
              />
          </label>

          <label className="new-dive-form-headers"> Start Time:
            <input
              className="time-input"
              type="time"
              value={this.state.start_time}
              onChange={this.update('start_time')}
              />
          </label>

          <label className="new-dive-form-headers"> End Time:
            <input
              className="time-input"
              type="time"
              value={this.state.end_time}
              onChange={this.update('end_time')}
              />
          </label>
        </div>

        <div className="air-inputs">

          <section className="grid-maker">
            <div className="grid-maker"></div>
            <label className="new-dive-form-headers"> Tank Size:
              <input
                className="pressure-input"
                type="number"
                placeholder="00.0"
                value={this.state.tank_size}
                onChange={this.update('tank_size')}
                /> cu ft
            </label>
          </section>

          <section className="pressure-readings">

            <h3>Pressure Readings</h3>

            <div className="pressure-reading-inputs">
              <label className="new-dive-form-headers"> <p>Initial:</p>
                <input
                  className="pressure-input"
                  type="number"
                  value={this.state.start_air_pressure}
                  onChange={this.update('start_air_pressure')}
                  /> psi
              </label>

              <label className="new-dive-form-headers"> <p>Final:</p>
                <input
                  className="pressure-input"
                  type="number"
                  value={this.state.end_air_pressure}
                  onChange={this.update('end_air_pressure')}
                  /> psi
              </label>
            </div>
          </section>


        </div>

        <div>
          <label className="new-dive-form-headers"> <p>Dive Notes:</p>
            <br/>
            <textarea
              className="notes-input"
              cols='40'
              rows='4'
              value={this.state.notes}
              placeholder="Spotted two eagle rays, kept breathing rate steady"
              onChange={this.update('notes')}
              ></textarea>
          </label>
      </div>
          <input
            className="new-dive-submit"
            type="submit"
            value="Submit">
          </input>
        </div>
        </form>
      </div>

      </section>
    );
  }

}

export default withRouter(DiveForm);
