import {
	Controller,
	type FieldPath,
	type FieldValues,
	type PathValue,
} from 'react-hook-form'
import type { FormInputProps } from '../types'
import { Form, type FormControlProps } from 'react-bootstrap'

type TextAreaProps = {
	rows?: number
}
const TextAreaInput = <
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
	rows,
	...other
}: FormInputProps<TFieldValues> & FormControlProps & TextAreaProps) => {
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
						{...other}
						{...field}
						as={'textarea'}
						rows={rows ?? 3}
						type={type}
						placeholder={placeholder}
						isInvalid={fieldState.error != null}
					/>
					{fieldState.error?.message && (
						<Form.Control.Feedback type="invalid" className="text-danger">
							{fieldState.error?.message}
						</Form.Control.Feedback>
					)}
				</Form.Group>
			)}
		/>
	)
}

export default TextAreaInput
