import { useState } from 'react';
import throttle from 'lodash/throttle';

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
      console.log('==================');
      console.log('result', result);
      console.log('==================');
    } catch (error) {
      errors.code = 'Failed to retrieve details!';
    }

    if (Object.keys(errors).length) {
      throw errors;
    }
  };

  return (
    <MultiStepForm initialValues={initialValues} schema={RsvpSchema} onChange={updateState} onSubmit={handleSubmit}>
      <Step validate={validateCode}>
        <Input label="What is your RSVP code?" name="code" placeholder="Hint: Its on your invite!" />
      </Step>
      <Step>
        <Radio label="Will you be attending?" name="attendance" options={[
          {
            label: 'Yes!',
            value: true
          },
          {
            label: 'No :(',
            value: false
          }
        ]} />
      </Step>
      {
        state.attendance && <Step>
          <Input label="Do you have any dietary issues?" name="diet" placeholder="e.g. I don't like desserts so give mine to Alex..." />
        </Step>
      }
    </MultiStepForm>
  );
};

export default () => {
  const [submitted, updateSubmission] = useState(false);

  const submit = async (values, form) => {
    try {
      await rsvp.update(values);
    } catch (error) {
      console.error('error', error);
      errors.code = 'Failed to retrieve details!';
    }
    form.setSubmitting(false);
    updateSubmission(true);
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
