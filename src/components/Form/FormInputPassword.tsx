import { Controller, FieldPath, FieldValues, PathValue } from 'react-hook-form'
import { FormInputProps } from '../types'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const FormInputPassword = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	control,
	id,
	label,
	name,
	containerClass,
	placeholder,
	labelClassName,
	className,
	...other
}: FormInputProps<TFieldValues>) => {
	const [showPassword, setShowPassword] = useState<boolean>(false)
	return (
		<Controller<TFieldValues, TName>
			control={control}
			defaultValue={'' as PathValue<TFieldValues, TName>}
			render={({ field, fieldState }) => (
				<Form.Group className={containerClass}>
					{label && <Form.Label className={labelClassName}>{label}</Form.Label>}
					<div className="input-group mb-0">
						<Form.Control
							className={className}
							{...other}
							id={id ?? name}
							{...field}
							type={showPassword ? 'text' : 'password'}
							placeholder={placeholder}
							isInvalid={fieldState.error != null}
						/>
						<div className={`input-group-text input-group-password `}>
							<span onClick={() => setShowPassword(!showPassword)}>
								{showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
							</span>
						</div>
						{fieldState.error?.message && (
							<Form.Control.Feedback type="invalid" className="text-danger">
								{fieldState.error?.message}
							</Form.Control.Feedback>
						)}
					</div>
				</Form.Group>
			)}
			name={name as TName}
		/>
	)
}

export default FormInputPassword
