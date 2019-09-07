import { Fragment, useState } from 'react';

import Heading from '../Heading';
import MultiStepForm, { Step, Input, Radio } from '../MultiStepForm';

import rsvp from '../../utils/rsvp';

import RsvpSchema from './schema';

import './rsvp.scss';

const initialValues = {
  code: '',
  attendance: true,
  diet: ''
};

const RsvpForm = ({ handleSubmit }) => {

  const [state, updateState] = useState(initialValues);

  const validateCode = async ({ code }) => {
    const errors = {};
    if (!code) {
      errors.code = 'Please enter your code!';
      throw errors;
    }
    try {
      const result = await rsvp.access(code);
      updateState(result.data);
    } catch (error) {
      errors.code = 'Failed to retrieve details!';
    }
    if (Object.keys(errors).length) {
      throw errors;
    }
  };

  const handleAttendanceChange = val => {
    const newState = Object.assign({}, state, { attendance: val });
    updateState(newState);
  };

  return (
    <Fragment>
      <MultiStepForm initialValues={state} onChange={updateState} schema={RsvpSchema} onSubmit={handleSubmit}>
        <Step validate={validateCode}>
          <Input label="rsvpCodeLabel" name="code" />
        </Step>
        <Step>
          <Radio label="rsvpAttendingLabel" name="attendance" onChange={handleAttendanceChange} options={[
            {
              label: 'rsvpYes',
              value: true
            },
            {
              label: 'rsvpNo',
              value: false
            }
          ]} />
        </Step>
        {
          state.attendance && <Step>
            <Input label="rsvpDietLabel" name="diet" />
          </Step>
        }
      </MultiStepForm>
    </Fragment>
  );
};

export default () => {
  const [submitted, updateSubmission] = useState(false);

  const submit = async (values, form) => {
		form.setStatus('')
    try {
      await rsvp.update(values);
			updateSubmission(true);
    } catch (error) {
			form.setStatus('Failed to save details!')
    }
		form.setSubmitting(false);
  };

  return (
    <div className="rsvp">
      <Heading text="RSVP" theme="light" />
      <div className="rsvp__form">
        { !submitted && <RsvpForm handleSubmit={submit} />}
        { submitted && <div className="rsvp__confirmation">
          Thank you for responding! We've updated our records but if you have any questions please feel free to contact us!
        </div>}
      </div>
    </div>
  );
};
