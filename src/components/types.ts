import { Control, type FieldPath, type FieldValues } from 'react-hook-form'

export type FormInputProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	control: Control<TFieldValues>
	id?: string
	label?: string
	name: TName
	placeholder?: string
	containerClass?: string
	labelClassName?: string
	className?: string
	type?: string
	noValidate?: boolean
}
