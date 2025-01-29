import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const initialValues = {
    login: '',
    password: '123qwe',
  };
  const onSubmit = values => {
    console.log(values);
    toast.success('Login successful');
  };
  return (
    <div className='formWrapper'>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className='form'>
          <Field name='login' placeholder='Enter nickname' />
          <Field name='password' placeholder='Enter Password' type='password' />
          <button type='submit'>Login</button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
