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
    return e => this.setState({ [property]: e.target.value});
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

    return (
      <section className="new-dive-page">
        <ul className="new-dive-errors">
          {this.renderErrors()}
        </ul>
        <form className="new-dive-form" onSubmit={this.handleSubmit}>
          <label className="new-dive-form-headers"> Dive Title
            <input
              className="new-dive-inputs"
              type="text"
              value={this.state.title}
              placeholder="e.g. Barracuda Point Dive"
              onChange={this.update('title')}
              />
          </label>

          <label className="new-dive-form-headers"> Date
            <input
              className="new-dive-inputs"
              type="date"
              value={this.state.date}
              placeholder="e.g. Barracuda Point Dive"
              onChange={this.update('date')}
              />
          </label>

          <label className="new-dive-form-headers"> Start Time
            <input
              className="new-dive-inputs"
              type="time"
              value={this.state.start_time}
              placeholder="e.g. Barracuda Point Dive"
              onChange={this.update('start_time')}
              />
          </label>

          <label className="new-dive-form-headers"> End Time
            <input
              className="new-dive-inputs"
              type="time"
              value={this.state.end_time}
              placeholder="e.g. Barracuda Point Dive"
              onChange={this.update('end_time')}
              />
          </label>

          <label className="new-dive-form-headers"> Starting Air Pressure
            <input
              className="new-dive-inputs"
              type="number"
              value={this.state.start_air_pressure}
              placeholder="e.g. Barracuda Point Dive"
              onChange={this.update('start_air_pressure')}
              /> psi
          </label>

          <label className="new-dive-form-headers"> Ending Air Pressure
            <input
              className="new-dive-inputs"
              type="number"
              value={this.state.end_air_pressure}
              placeholder="e.g. Barracuda Point Dive"
              onChange={this.update('end_air_pressure')}
              /> psi
          </label>

          <label className="new-dive-form-headers"> Dive Notes:
            <textarea
              className="new-dive-inputs"
              cols='20'
              rows='4'
              value={this.state.notes}
              placeholder="Spotted two eagle rays, kept breathing rate steady"
              onChange={this.update('notes')}
              ></textarea>
          </label>
        </form>
      </section>
    );
  }

}

export default withRouter(DiveForm);
