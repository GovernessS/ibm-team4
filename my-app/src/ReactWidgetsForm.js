import React from "react";
import { Field, reduxForm } from "redux-form";
import DropdownList from "react-widgets/lib/DropdownList";
import SelectList from "react-widgets/lib/SelectList";
import Multiselect from "react-widgets/lib/Multiselect";
import "react-widgets/dist/css/react-widgets.css";
import "./index.css";
//import { reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

let ReactWidgetsForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <center>
          <div className="dow">
            <label>Please enter your name here: </label>
            <Field name="name" type="text" component={renderField} />
          </div>
          <br />
          <div className="dow">
            <label>What help would you like today?</label>
            <Field
              className="dow"
              name="help"
              component={Multiselect}
              defaultValue={[]}
              onBlur={() => props.onBlur()}
              data={["Anxiety", "Depression", "Anger Management"]}
            />
          </div>

          <div className="eldoc">
            <label>Health professional preference</label>
            <Field
              name="sex"
              component={SelectList}
              onBlur={() => props.onBlur()}
              data={["Male", "Female", "Non-binary"]}
            />
          </div>

          <div className="eldoc">
            <label>Consultation type</label>
            <Field
              name="onlineInperson"
              component={SelectList}
              onBlur={() => props.onBlur()}
              data={["Online", "In-person", "Hybrid"]}
            />
          </div>

          <div className="eldocState">
            <label>Select a State</label>
            <Field
              name="state"
              component={Multiselect}
              defaultValue={[]}
              onBlur={() => props.onBlur()}
              data={[
                "Alabama",
                "Alaska",
                "American Samoa",
                "Arizona",
                "Arkansas",
                "California",
                "Colorado",
                "Connecticut",
                "Delaware",
                "District of Columbia",
                "Federated States of Micronesia",
                "Florida",
                "Georgia",
                "Guam",
                "Hawaii",
                "Idaho",
                "Illinois",
                "Indiana",
                "Iowa",
                "Kansas",
                "Kentucky",
                "Louisiana",
                "Maine",
                "Marshall Islands",
                "Maryland",
                "Massachusetts",
                "Michigan",
                "Minnesota",
                "Mississippi",
                "Missouri",
                "Montana",
                "Nebraska",
                "Nevada",
                "New Hampshire",
                "New Jersey",
                "New Mexico",
                "New York",
                "North Carolina",
                "North Dakota",
                "Northern Mariana Islands",
                "Ohio",
                "Oklahoma",
                "Oregon",
                "Palau",
                "Pennsylvania",
                "Puerto Rico",
                "Rhode Island",
                "South Carolina",
                "South Dakota",
                "Tennessee",
                "Texas",
                "Utah",
                "Vermont",
                "Virgin Island",
                "Virginia",
                "Washington",
                "West Virginia",
                "Wisconsin",
                "Wyoming",
              ]}
            />
          </div>
        </center>
        <div>
          <center>
            <button
              className="ContactButton submitt"
              type="submit"
              disabled={pristine || submitting}
            >
              <a href="testresults.js">Submit</a>
            </button>
            {/* <button
              className="ContactButton"
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Reset
            </button> */}
          </center>
        </div>
      </form>
    </div>
  );
};

ReactWidgetsForm = reduxForm({
  form: "reactWidgets", // a unique identifier for this form
})(ReactWidgetsForm);

export default ReactWidgetsForm;
