import { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { messages, type ChatMessage, type ChatUser } from '../data'
import { FormTextInput } from '@/components'

import avatar4 from '@/assets/images/users/user-4.jpg'

import 'simplebar-react/dist/simplebar.min.css'

const UserMessage = ({
	message,
	toUser,
}: {
	message: ChatMessage
	toUser: ChatUser
}) => {
	return (
		<div className="media">
			{message.from.id == toUser.id ? (
				<>
					<div className="media-body reverse">
						<div className="chat-msg">
							<p>Good Morning !</p>
						</div>
						<div className="chat-msg">
							<p>{message.message.value}</p>
						</div>
					</div>
					<div className="media-img">
						<Image
							src={message.from.avatar}
							alt={message.from.name}
							className="rounded-circle thumb-md"
						/>
					</div>
				</>
			) : (
				<>
					<div className="media-img">
						<Image
							src={message.from.avatar}
							alt={message.from.name}
							className="rounded-circle thumb-md"
						/>
					</div>
					<div className={'media-body'}>
						{/* <div className="chat-msg">
              <p>Good Morning !</p>
            </div> */}
						<div className="chat-msg">
							<p>{message.message.value}</p>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

type ChatAreaProps = {
	selectedUser: ChatUser
}
const ChatArea = ({ selectedUser }: ChatAreaProps) => {
	const [userMessages, setUserMessages] = useState<ChatMessage[]>([])

	const [toUser] = useState<ChatUser>({
		id: 9,
		name: 'Tosha Minner',
		avatar: avatar4,
	})

	/*
	 *  Fetches the messages for selected user
	 */
	const getMessagesForUser = useCallback(() => {
		if (selectedUser) {
			setUserMessages(
				[...messages].filter(
					(m) =>
						(m.to.id === toUser.id && m.from.id === selectedUser.id) ||
						(toUser.id === m.from.id && m.to.id === selectedUser.id)
				)
			)
		}
	}, [selectedUser, toUser])

	useEffect(() => {
		getMessagesForUser()
	}, [getMessagesForUser])

	/*
	 * form validation schema
	 */
	const schemaResolver = yup.object({
		newMessage: yup.string().required('Please enter your messsage'),
	})

	const { control, handleSubmit, reset } = useForm({
		resolver: yupResolver(schemaResolver),
	})

	/**
	 * sends the chat message
	 */
	const sendChatMessage = (values: { newMessage?: string }) => {
		const newUserMessages = [...userMessages]
		newUserMessages.push({
			id: userMessages.length + 1,
			from: toUser,
			to: selectedUser,
			message: { value: values.newMessage },
			sendOn: new Date().getHours() + ':' + new Date().getMinutes(),
		})
		setTimeout(() => {
			const otherNewMessages = [...newUserMessages]
			otherNewMessages.push({
				id: userMessages.length + 1,
				from: selectedUser,
				to: toUser,
				message: { value: values.newMessage },
				sendOn: new Date().getHours() + ':' + new Date().getMinutes(),
			})
			setUserMessages(otherNewMessages)
		}, 1000)
		setUserMessages(newUserMessages)
		reset()
	}

	const AlwaysScrollToBottom = () => {
		const elementRef = useRef<HTMLDivElement>(null)
		useEffect(() => {
			if (
				elementRef &&
				elementRef.current &&
				elementRef.current.scrollIntoView
			) {
				elementRef.current.scrollIntoView({ behavior: 'smooth' })
			}
		})
		return <div ref={elementRef} />
	}

	return (
		<div className="chat-box-right">
			<div className="chat-header">
				<Link to="" className="media">
					<div className="media-left">
						<Image
							src={selectedUser.avatar}
							alt={selectedUser.name}
							className="rounded-circle thumb-md"
						/>
					</div>
					<div className="media-body">
						<div>
							<h6 className="m-0">{selectedUser.name}</h6>
							<p className="mb-0">Last seen: 2 hours ago</p>
						</div>
					</div>
				</Link>
				<div className="chat-features">
					<div className="d-none d-sm-inline-block">
						<Link to="">
							<i className="fas fa-phone" />
						</Link>
						<Link to="">
							<i className="fas fa-video" />
						</Link>
						<Link to="">
							<i className="fas fa-trash-alt" />
						</Link>
						<Link to="">
							<i className="fas fa-ellipsis-v" />
						</Link>
					</div>
				</div>
			</div>
			<SimpleBar className="chat-body">
				<div className="chat-detail">
					{(userMessages || []).map((message, idx) => {
						return <UserMessage key={idx} message={message} toUser={toUser} />
					})}
					<AlwaysScrollToBottom />
				</div>
			</SimpleBar>
			<div className="chat-footer">
				<form onSubmit={handleSubmit(sendChatMessage)} className="row">
					<Col xs={12} md={9}>
						<FormTextInput
							name="newMessage"
							placeholder="Type something here..."
							control={control}
							noValidate
						/>
					</Col>
					<Col xs={3} className="text-end">
						<div className="d-none d-sm-inline-block chat-features">
							<Button type="submit">
								<i className="la la-send" />
							</Button>
							<Link to="">
								<i className="la la-camera" />
							</Link>
							<Link to="">
								<i className="la la-paperclip" />
							</Link>
							<Link to="">
								<i className="la la-microphone" />
							</Link>
						</div>
					</Col>
				</form>
			</div>
		</div>
	)
}

export default ChatArea
