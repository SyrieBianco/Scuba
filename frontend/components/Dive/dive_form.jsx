import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class DiveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      route_id: null,
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
      console.log(e.target.value);
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

    console.log("now",now);
    console.log("today",today);
    console.log("time",time);

    return (
      <section className="new-dive-page">
        <ul className="new-dive-errors">
          {this.renderErrors()}
        </ul>
        <div className="new-dive-form-container">
          <h1> Log a New Dive </h1>
        <form className="new-dive-form-box" onSubmit={this.handleSubmit}>
          <div className="new-dive-form">

          <label className="new-dive-form-headers"> Dive Title:
            <input
              className="new-dive-inputs"
              type="text"
              value={this.state.title}
              placeholder="e.g. Barracuda Point"
              onChange={this.update('title')}
              />
          </label>

          <div className ="date-time-inputs">
          <label className="new-dive-form-headers"> Date:
            <input
              className="new-dive-inputs"
              type="date"
              value={this.state.date || ''}
              placeholder="2006-12-03"
              onChange={this.update('date')}
              />
          </label>

          <label className="new-dive-form-headers"> Start Time:
            <input
              className="new-dive-inputs"
              type="time"
              value={this.state.start_time}
              placeholder={time}
              onChange={this.update('start_time')}
              />
          </label>

          <label className="new-dive-form-headers"> End Time:
            <input
              className="new-dive-inputs"
              type="time"
              value={this.state.end_time}
              onChange={this.update('end_time')}
              />
          </label>
        </div>

        <div className="air-pressure-inputs">

          <label className="new-dive-form-headers"> Starting Air Pressure:
            <input
              className="new-dive-inputs numerical-input"
              type="number"
              value={this.state.start_air_pressure}
              onChange={this.update('start_air_pressure')}
              /> psi
          </label>

          <label className="new-dive-form-headers"> Ending Air Pressure:
            <input
              className="new-dive-inputs numerical-input"
              type="number"
              value={this.state.end_air_pressure}
              onChange={this.update('end_air_pressure')}
              /> psi
          </label>

        </div>

          <label className="new-dive-form-headers"> Dive Notes:
            <br/>
            <textarea
              className="new-dive-inputs"
              cols='40'
              rows='4'
              value={this.state.notes}
              placeholder="Spotted two eagle rays, kept breathing rate steady"
              onChange={this.update('notes')}
              ></textarea>
          </label>

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
