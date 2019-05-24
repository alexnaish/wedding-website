import React, { Fragment, useState } from 'react';
import { Formik, Form, FastField, ErrorMessage } from 'formik';

import './multiStepForm.scss';

export default ({ children, schema, initialValues, onChange, onSubmit }) => {
  const [state, updateState] = useState({
    page: 0,
    values: initialValues
  });
  const steps = React.Children.toArray(children).filter(Boolean);
  const activePage = steps[state.page];
  const isLastPage = state.page === steps.length - 1;

  const previous = () => {
    const inputs = document.querySelectorAll('.form__input');
    const previousPage = Math.max(state.page - 1, 0);
    if (inputs[previousPage]) {
      inputs[previousPage].focus();
    }
    updateState({
      page: previousPage,
      values: state.values
    });
  };

  const validate = async (values) => {
    onChange && onChange(values);
    return await activePage.props.validate ? activePage.props.validate(values) : schema.validate(values);
  };

  const next = async (values) => {
    const inputs = document.querySelectorAll('.form__input');
    const nextPage = Math.min(state.page + 1, children.length - 1);
    if (inputs[nextPage]) {
      inputs[nextPage].focus();
    }
    updateState({
      page: nextPage,
      values
    });
  };

  const handleSubmit = (values, form) => {
    if (isLastPage) {
      return onSubmit(values, form);
    } else {
      next(values);
      form.setTouched({});
      form.setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur={false}
      validateOnChange={false}
      enableReinitialize={false}
      validate={validate}
      onSubmit={handleSubmit}
      render={({ isSubmitting }) => (
        <Form className={`form${isSubmitting ? ' form--submitting': ''}`}>
          {steps.map((child, index) => {
            return React.cloneElement(child, {
              key: index,
              previous: state.page - 1 === index,
              current: state.page === index,
              next: state.page + 1 === index,
              isSubmitting: isSubmitting,
              onPrevious: previous,
              isLastPage
            });
          })}
        </Form>
      )}
    />
  );
};

export const Step = ({ children, previous, current, next, isSubmitting, onPrevious, isLastPage }) => {
  return (
    <div
      className={'form__step'}
      data-current={current}
      data-previous={previous}
      data-next={next}>
      {children}
      {previous && <button className="form__trigger" data-submitting={isSubmitting} type="button" onClick={previous && !isSubmitting ? onPrevious : ()=>{}} />}
      <span className="form__instructions">
        <button type="submit" tabIndex="-1" className="form__button" disabled={isSubmitting}>{!isLastPage ? 'Next' : 'Confirm'}</button> (or press enter)
      </span>
    </div>
  );
};

export const Input = ({ name, type = 'text', label, placeholder }) => {
  return (
    <div className="form__row">
      <label className="form__label">{label}</label>
      <FastField
        name={name}
        type={type}
        component="input"
        placeholder={placeholder}
        className="form__input"
        autoComplete="off"
        tabIndex="-1"
      />
      <ErrorMessage name={name} component="div" className="form__error" />
    </div>
  );
};

export const DynamicOption = (props) => {
  const { field, form, value, label } = props;
  const id = `${field.name}-${value}`;
  const checked = form.values[field.name] === value;
  const handleChange = () => {
    form.setFieldValue(field.name, value);
    form.submitForm();
  };
  return (
    <div className="dynamic-option">
      <FastField className="dynamic-option__input" id={id} type="radio" name={field.name} checked={checked} onChange={handleChange} />
      <label htmlFor={id} className="dynamic-option__label">{label}</label>
    </div>
  );
};

export const Radio = ({ name, label, options = [] }) => {
  return (
    <div className="form__row">
      <label className="form__label">{label}</label>
      <div className="form__input">
        {
          options.map(opt => {
            return (
              <FastField
                key={opt.value}
                name={name}
                label={opt.label}
                value={opt.value}
                component={DynamicOption}
              />
            );
          })
        }
      </div>
      <ErrorMessage name={name} component="div" className="form__error" />
    </div>
  );
};
