import React from 'react'
import { Field, reduxForm } from 'redux-form'
import DropdownList from 'react-widgets/lib/DropdownList'
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css'

const help = [
  { color: 'Monday' },
  { color: 'Tuesday' },
  { color: 'Wednesday'},
  { color: 'Thursday' },
  { color: 'Friday' }
 ]

let ReactWidgetsForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
    <center>
      <div className="dow">
        <label>Which day would you prefer your appointment?</label>
        <Field
          name="daysOfTheWeek"
          component={DropdownList}
          data={help}
          valueField="value"
          textField="color"/>
      </div>

      <div className="dow">
        <label>What help would you like today?</label>
        <Field
          name="help"
          component={Multiselect}
          defaultValue={[]}
          onBlur={() => props.onBlur()}
          data={[ 'Anxiety', 'Depression', 'Anger Management' ]}/>
      </div>
      <div className="eldoc">
        <label>Doctor preference</label>
        <Field
          name="sex"
          component={SelectList}
          onBlur={() => props.onBlur()}
          data={[ 'male', 'female' ]}/>
      </div>
      </center>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Reset Values
        </button>
      </div>
    </form>
  )
}

ReactWidgetsForm = reduxForm({
  form: 'reactWidgets'  // a unique identifier for this form
})(ReactWidgetsForm)

export default ReactWidgetsForm
