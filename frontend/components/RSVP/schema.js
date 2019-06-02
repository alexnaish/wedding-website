import * as yup from 'yup';

export default yup.object().shape({
  code: yup.string()
    .required('Your code is required'),
  attendance: yup.bool(),
  diet: yup.string().when(['name', 'attendance'], {
    is: true,
    then: yup.string().required()
  })

});
