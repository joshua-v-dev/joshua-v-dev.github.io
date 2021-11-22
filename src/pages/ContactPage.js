// next.js component for the contact page
// contact form
// contact button
// contact form validation
// contact form submission
// contact form submission success
// contact form submission failure
// contact form submission failure message
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { contact } from '../redux/actions'
import { useHistory } from 'react-router-dom'
// render contact form
export const ContactPage = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12'>
					<h1>Contact</h1>
					<Formik
						initialValues={{
							name: '',
							email: '',
							message: '',
						}}
						validationSchema={Yup.object({
							name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
							email: Yup.string().email('Invalid email address').required('Required'),
							message: Yup.string()
								.max(1000, 'Must be 1000 characters or less')
								.required('Required'),
						})}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								dispatch(contact(values))
								setSubmitting(false)
								history.push('/')
							}, 400)
						}}>
						{({ isSubmitting }) => (
							<Form>
								<div className='form-group'>
									<label htmlFor='name'>Name</label>
									<Field name='name' type='text' className='form-control' />
									<ErrorMessage name='name' component='div' />
								</div>
								<div className='form-group'>
									<label htmlFor='email'>Email</label>
									<Field name='email' type='email' className='form-control' />
									<ErrorMessage name='email' component='div' />
								</div>
								<div className='form-group'>
									<label htmlFor='message'>Message</label>
									<Field name='message' as='textarea' className='form-control' />
									<ErrorMessage name='message' component='div' />
								</div>
								<button type='submit' className='btn btn-primary' disabled={isSubmitting}>
									Submit
								</button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	)
}
