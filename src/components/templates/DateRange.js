import React from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import FormItem from './FormItem';

const moment = extendMoment(originalMoment);

class DateRange extends React.Component {
  constructor(props, context) {
    super(props, context);

    const today = moment();

    this.state = {
      isOpen: false,
      areDatesSelected: false,
      value: moment.range(today.clone(), today.clone().add(7, "days"))
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSelect = (value, states) => {
    this.setState({ 
      value, 
      states,
      areDatesSelected: true });
    const arrive = this.state.value.start.format("YYYY-MM-DD");
    const depart = this.state.value.end.format("YYYY-MM-DD");
    this.props.changeFn(arrive, depart);
  };

  showCalendar = () => {
    this.setState({ isOpen: true });
  };

  hideCalendar = () => {
    // this.setState({ isOpen: false });    
  }

  render() {
    return (
      <div>
        <div onClick={this.showCalendar} onBlur={this.hideCalendar}>
          <FormItem 
            text= { this.state.areDatesSelected ?
                `${this.state.value.start.format("YYYY-MM-DD")} - ${this.state.value.end.format("YYYY-MM-DD")}` 
              : 'Arrival & Departure'
            }
            name='dates' 
            onChange={this.handleInputChange}
          />
        </div>

        {(  this.state.isOpen &&
          <DateRangePicker
            value={this.state.value}
            onSelect={this.onSelect}
            singleDateRange={true}
          />
        )}
      </div>
    );
  }
}

export default DateRange;
