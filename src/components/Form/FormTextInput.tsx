import {
	Controller,
	type FieldPath,
	type FieldValues,
	type PathValue,
} from 'react-hook-form'
import type { FormInputProps } from '../types'
import { Form, FormControlProps } from 'react-bootstrap'

const FormInput = <
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
	type,
	noValidate,
	...other
}: FormInputProps<TFieldValues> & FormControlProps) => {
	return (
		<Controller<TFieldValues, TName>
			name={name as TName}
			control={control}
			defaultValue={'' as PathValue<TFieldValues, TName>}
			render={({ field, fieldState }) => (
				<Form.Group className={containerClass}>
					{label && <Form.Label className={labelClassName}>{label}</Form.Label>}
					<Form.Control
						className={className}
						id={id ?? name}
						type={type}
						placeholder={placeholder}
						isInvalid={!noValidate && fieldState.error != null}
						{...other}
						{...field}
					/>
					{!noValidate && fieldState.error?.message && (
						<Form.Control.Feedback type="invalid" className="text-danger">
							{fieldState.error?.message}
						</Form.Control.Feedback>
					)}
				</Form.Group>
			)}
		/>
	)
}

export default FormInput
