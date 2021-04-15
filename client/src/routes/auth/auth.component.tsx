import React from 'react';
import './auth.component.scss';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@material-ui/core';

export const AuthComponent = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data: Event) => console.log(data);

	return (
		<div className={'auth'}>
			<form className={'register-form'} onSubmit={handleSubmit(onSubmit)}>
				<TextField
					label={'Username'}
					type={'text'}
					variant={'outlined'}
					aria-invalid={!!errors.name}
					ref={register({ required: true, maxLength: 30 }) as any}
				/>
				<TextField
					label={'Password'}
					type={'password'}
					variant={'outlined'}
					aria-invalid={!!errors.name}
					ref={register({ required: true, maxLength: 30 }) as any}
				/>
				{errors.name && errors.name.type === 'required' && <span role="alert">This is required</span>}
				{errors.name && errors.name.type === 'maxLength' && <span role="alert">Max length exceeded</span>}
				<Button variant={'contained'} color={'primary'} type="submit">
					Login
				</Button>
			</form>
			<form className={'login-form'}>
				<div className={'register-form'} onSubmit={handleSubmit(onSubmit)}>
					<TextField label={'Username'} type={'text'} variant={'outlined'} />
					<TextField label={'E-mail'} type={'text'} variant={'outlined'} />
					<TextField label={'Password'} type={'password'} variant={'outlined'} />
					<TextField label={'Confirm password'} type={'password'} variant={'outlined'} />
				</div>
				<Button variant={'contained'} color={'primary'} type="submit">
					Register
				</Button>
			</form>
		</div>
	);
};
