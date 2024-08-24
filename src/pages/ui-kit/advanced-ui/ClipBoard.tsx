import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import { useClipboard } from '@/hooks'
import { useRef, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { toast } from 'sonner'

const ClipboardExample = () => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [inputText, setText] = useState<string>('Welcome to Dastone!')
	const [, copy] = useClipboard()

	const onCopy = (text: string) => {
		copy(text).then((copied) => {
			if (copied) {
				toast.success('Copy To Clipboard', {
					position: 'top-right',
					duration: 2000,
				})
			}
		})
	}
	const onCut = (text: string) => {
		copy(text).then((copied) => {
			if (copied) {
				toast.success('Cut', { position: 'top-right', duration: 2000 })
			}
		})
		setText('')
	}
	return (
		<ComponentContainerCard
			title="Clipboard Examples"
			description="Input example of clipboard"
		>
			<div className="input-group">
				<input
					ref={inputRef}
					name="clipboard"
					type="text"
					onChange={(e) => setText(e.target.value)}
					value={inputText}
					className="form-control"
					id="clipboardInput"
					aria-label="Recipient's username"
					aria-describedby="button-addon2"
				/>
				<Button
					variant="outline-secondary"
					onClick={() => onCopy(inputRef.current?.value ?? '')}
				>
					<i className="far fa-copy me-2" />
					Copy
				</Button>
				<Button
					variant="outline-primary"
					onClick={() => onCut(inputRef.current?.value ?? '')}
				>
					<i className="fas fa-cut me-2" />
					Cut
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const TextAreaClipboard = () => {
	const inputRef = useRef<HTMLTextAreaElement>(null)
	const [inputText, setText] = useState<string>('Welcome to Dastone!')
	const [, copy] = useClipboard()

	const onCopy = (text: string) => {
		copy(text).then((copied) => {
			if (copied) {
				toast.success('Copy To Clipboard', {
					position: 'top-right',
					duration: 2000,
				})
			}
		})
	}
	const onCut = (text: string) => {
		copy(text).then((copied) => {
			if (copied) {
				toast.success('Cut', { position: 'top-right', duration: 2000 })
			}
		})
		setText('')
	}
	return (
		<ComponentContainerCard
			title="Clipboard Examples Of Textarea"
			description="Textarea example of clipboard"
		>
			<textarea
				ref={inputRef}
				onChange={(e) => setText(e.target.value)}
				value={inputText}
				className="form-control"
				rows={3}
			/>
			<div className="mt-3">
				<Button
					variant="outline-secondary"
					size="sm"
					className="btn-clipboard me-1"
					onClick={() => onCopy(inputRef.current?.value ?? '')}
				>
					<i className="far fa-copy me-2" />
					Copy
				</Button>
				<Button
					variant="outline-primary"
					size="sm"
					className="btn-clipboard"
					onClick={() => onCut(inputRef.current?.value ?? '')}
				>
					<i className="fas fa-cut me-2" />
					Cut
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const ParagraphClipboardExample = () => {
	const [, copy] = useClipboard()

	const onCopy = (text: string) => {
		copy(text).then((copied) => {
			if (copied) {
				toast.success('Copy To Clipboard', {
					position: 'top-right',
					duration: 2000,
				})
			}
		})
	}

	return (
		<ComponentContainerCard
			title="Clipboard Examples of Paragraph"
			description="Paragraph example of clipboard<"
		>
			<p id="clipboardParagraph" className="border p-3">
				Contrary to popular belief, Lorem Ipsum is not simply random text. It
				has roots in a piece of classical Latin literature from 45 BC, making it
				over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked
			</p>
			<div className="mt-3">
				<Button
					variant="outline-secondary"
					size="sm"
					className="btn-clipboard"
					onClick={() =>
						onCopy(
							'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked'
						)
					}
				>
					<i className="far fa-copy me-2" />
					Copy
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const ClipBoard = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Advanced UI" title="Clip Board" />
			<Row>
				<Col lg={6}>
					<ClipboardExample />
					<ParagraphClipboardExample />
				</Col>
				<Col lg={6}>
					<TextAreaClipboard />
				</Col>
			</Row>
		</>
	)
}

export default ClipBoard
