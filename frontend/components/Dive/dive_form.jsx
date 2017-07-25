import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class DiveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route_id: 1,
      title: '',
      notes: '',
      date: null,
      start_time: 0,
      end_time: 0,
      start_air_pressure: 0,
      end_air_pressure: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createDive(this.state)
    .then(data => this.props.history.push(`/dives/${data.dive.id}`));
  }

  update(property) {
    const that = this;
    return e => {
      console.log(that.state);
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
    const now = new Date().toISOString();
    const today = now.slice(0,10);
    const time = now.slice(11,19);

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
                    value={this.state.route || ""}
                    placeholder="e.g. Barracuda Point"
                    onChange={this.update('route')}
                  >
                  <option value="" disabled="true"> -- select a route --  </option>
                  <option value="Your route 1">Your route 1</option>
                  <option value="Your route 2">Your route 2</option>
                  <option value="Your route 3">Your route 3</option>
                  <option value="Your route 4">Your route 4</option>
                  <option value="Add a new route">Add a new route</option>
                </select>
              </label>
            </div>

          <div className ="date-time-inputs">
          <label className="new-dive-form-headers"> Date:
            <input
              className="date-input"
              type="date"
              value={this.state.date || ''}
              placeholder="2006-12-03"
              onChange={this.update('date')}
              />
          </label>

          <label className="new-dive-form-headers"> Start Time:
            <input
              className="time-input"
              type="time"
              value={this.state.start_time}
              placeholder={time}
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

        <div className="air-pressure-inputs">

          <label className="new-dive-form-headers"> Starting Air Pressure:
            <input
              className="pressure-input"
              type="number"
              value={this.state.start_air_pressure}
              onChange={this.update('start_air_pressure')}
              /> psi
          </label>

          <label className="new-dive-form-headers"> Ending Air Pressure:
            <input
              className="pressure-input"
              type="number"
              value={this.state.end_air_pressure}
              onChange={this.update('end_air_pressure')}
              /> psi
          </label>

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
