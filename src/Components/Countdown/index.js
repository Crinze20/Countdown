import React, {Component} from 'react'
import moment from 'moment'
import 'moment-holiday'

import Timer from './Timer'
import Controls from './Controls'
import Datepicker from './Datepicker'
import HolidaysModal from './HolidayModal'


export default class Countdown extends Component {   
    state = {
      currrentDate: moment(),
      nextDate: moment({year: moment().year() + 1}),
      paused: false,
      showHolidays: false
    }
            
    componentDidMount() {
      this.resume()
    }
  
    componentWillUnmount() {
      this.pause()
    }
  
    getRemainingTime() {
      let {currrentDate, nextDate} = this.state,

          diff = nextDate.diff(currrentDate)

      return moment.duration(diff)        
    }
  
    handlePausedToggle = () => {    
      this.setState(({paused}, props) => {
        
        paused = !paused
        
        if (paused) {
          this.pause()
        } else {
          this.resume()
        }
  
        return {
          paused
        }
      })    
    }
  
  
    pause () {
      clearInterval(this.interval)
    }
  
    resume () {
      this.interval = setInterval(() => {
        this.setState({
          currrentDate: moment()
        })
      }, 1000)
    }

    handleDateReset = nextDate => {
      this.setState({
        nextDate
      })
    }
    
    handleHolidaysToggle = () => {
      this.setState({
        showHolidays: !this.state.showHolidays
      })
    }

    getHolidays() {
      const {currrentDate, nextDate} = this.state          

      return currrentDate.holidaysBetween(nextDate)
    }

    render() {
        const { paused, nextDate, showHolidays } = this.state,
              duration = this.getRemainingTime(),
              holidays = this.getHolidays()
        
        return <section className="hero is-warning is-fullheight has-text-centered">
              <div className="hero-body">
                  <div className="container">

                     <button
                        className="button is-small is-rounded is-dark" 
                        style={{margin: '0px 10px 0 10px'}}
                        onClick={this.handleHolidaysToggle}>
                        Holidays
                      </button> 
                      <br/><br/>

                      <p>
                        <sup>
                          {nextDate.calendar()}
                        </sup>
                      </p>
                      
                      <h1 className="title">
                        New Year
                      </h1>
                      <h2>
                      <b>New Year</b> is the time or day at which a new calendar year begins and the calendars year count increments by one.
                      </h2>
                    
                      <section className="section">
                      <Timer duration={duration}/>
                      </section>

                      <Datepicker onDateReset={this.handleDateReset} />

                      <Controls paused={paused} onPausedToggle={this.handlePausedToggle}/>

                      <HolidaysModal holidays={holidays} active={showHolidays} onToggle={this.handleHolidaysToggle}/>

                  </div>
              </div>
          </section>                    
    }

}