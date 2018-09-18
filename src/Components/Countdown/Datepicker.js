import React, {Component} from 'react'
import moment from 'moment'

export default class Datepicker extends Component {
   state = {
       date: '',
       valid: true,
       dirty: false
   }

   handelDateChange = ({target: {value}}) =>  {
       const date = moment(value),
             valid = date.isValid() && date.isAfter(moment())

       this.setState({
           valid,
           date: value,
           dirty: true
       })

       valid && this.props.onDateReset(date)
   } 

    render() {
        let {date, valid, dirty} = this.state,
            classes = 'input is-medium is-rounded is-dark'

        valid && dirty && (classes += ' is-success')
        !valid && dirty && (classes += ' is-danger')            
        

        return <div className="field is-grouped is-grouped-centered" style={{marginBottom: 40}}>
                    <p className="control has-text-centered">
                    <input 
                        className={classes}
                        value={date}
                        onChange={this.handelDateChange}
                        placeholder="type a date..."
                    />
                    {!valid && <i className="help is-danger is-size-8">Please type a valid date.</i>}
                    </p>
                </div>
                
    }
}