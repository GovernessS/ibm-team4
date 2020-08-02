import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values) {
  return sleep(1000).then(() => { // simulate server latency
    if (!['john', 'paul', 'george', 'ringo'].includes(values.name) {
      throw new SubmissionError({
        name: 'Please select one option',
        _error: 'You did not selected an option',
      });
    } else if (values.help !== 'redux-form') {
      throw new SubmissionError({
        help: 'Wrong password',
        _error: 'Login failed!',
      });
    } else if (values.sex !== 'redux-form') {
      throw new SubmissionError({
        help: 'Wrong password',
        _error: 'Login failed!',
      });
    } else if (values.onlineInperson !== 'redux-form') {
      throw new SubmissionError({
        help: 'Wrong password',
        _error: 'Login failed!',
      });
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }
  });
}

export default submit;
