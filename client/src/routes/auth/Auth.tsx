import React, { FC } from 'react';
import './Auth.scss';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextField } from '@material-ui/core';

export const Auth: FC = () => {
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = (data: Event) => {
		console.log(errors);
		localStorage.setItem('token', '123');
	};

	return (
		<div className={'auth'}>
			<form className={'register-form'} onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name={'email'}
					as={
						<TextField
							helperText={errors.email ? errors.email.message : null}
							label={'Email'}
							error={!!errors.email}
						/>
					}
					control={control}
					defaultValue=""
					rules={{
						required: true,
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'invalid email address'
						}
					}}
				/>
				<Controller
					name="password"
					as={
						<TextField
							helperText={errors.password ? errors.password.message : null}
							label={'Email'}
							error={!!errors.password}
						/>
					}
					control={control}
					defaultValue={''}
					rules={{
						required: true
					}}
				/>
				<Button variant={'contained'} color={'primary'} type={'submit'}>
					Login
				</Button>
			</form>
			{/* <form className={'login-form'}>
				<div className={'register-form'} onSubmit={handleSubmit(onSubmit)}>
					<TextField label={'Username'} type={'text'} variant={'outlined'} />
					{errors.name && errors.name.type === 'required' && <span role='alert'>This is required</span>}
					{errors.name && errors.name.type === 'maxLength' && <span role='alert'>Max length exceeded</span>}
					<TextField label={'E-mail'} type={'text'} variant={'outlined'} />
					<TextField label={'Password'} type={'password'} variant={'outlined'} />
					<TextField label={'Confirm password'} type={'password'} variant={'outlined'} />
				</div>
				<Button variant={'contained'} color={'primary'} type='submit'>
					Register
				</Button>
			</form> */}
		</div>
	);
};
