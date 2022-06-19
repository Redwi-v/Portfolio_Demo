import { Formik, Form, Field } from 'formik';

const Input = props => {
	const { text, submit, className, component, placeholder, autoFocus = true, ...params } = props;

	return (
		<Formik initialValues={{ inputText: text || '' }} onSubmit={submit}>
			{({ submitForm }) => {
				return (
					<Form>
						<Field
							className={className}
							name='inputText'
							component={component || 'textarea'}
							wrap='soft'
							onBlur={submitForm}
							autoFocus={autoFocus}
							placeholder={placeholder}
							{...params}
						/>
					</Form>
				);
			}}
		</Formik>
	);
};

export default Input;
