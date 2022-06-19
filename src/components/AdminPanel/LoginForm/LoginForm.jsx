import style from './loginForm.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = props => {
	const { submitForm } = props;

	return (
		<Formik
			initialValues={{ adminname: '', passwod: '' }}
			onSubmit={submitForm}
			validate={values => {
				let errors = {};
				const { adminname } = values;
				if (adminname.length <= 3) errors.adminname = 'admin name must be more than 3 characters';
				return errors;
			}}>
			{({ isSubmitting }) => {
				return (
					<Form className={style.form}>
						<Field className={style.input} name='adminname' placeholder='admin name' />
						<ErrorMessage name='adminname' component={ErroeDiv} />
						<Field className={style.input} type='password' name='passwod' placeholder='password' />
						<button className={style.button} type='submit' disabled={isSubmitting}>
							login
						</button>
					</Form>
				);
			}}
		</Formik>
	);
};

const ErroeDiv = props => {
	return (
		<div className={style.errorDiv}>
			<h1>{props.children}</h1>
		</div>
	);
};

export default LoginForm;
