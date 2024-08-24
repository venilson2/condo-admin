import { PageBreadcrumb2 } from '@/components'
import {
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
} from 'react-bootstrap'
import { useState } from 'react'
import {
	DragDropContext,
	Draggable,
	DropResult,
	Droppable,
} from '@hello-pangea/dnd'
import { tasks, type TaskTypes } from './data'
import TaskItem from './components/TaskItem'

type StateType = {
	todoTasks: TaskTypes[]
	inprogressTasks: TaskTypes[]
	codeReviewTasks: TaskTypes[]
	doneTasks: TaskTypes[]
	newProjectTasks: TaskTypes[]
}

const KanbanBoard = () => {
	const [state, setState] = useState<StateType>({
		todoTasks: tasks.filter((t) => t.status === 'Todo'),
		inprogressTasks: tasks.filter((t) => t.status === 'Inprogress'),
		codeReviewTasks: tasks.filter((t) => t.status === 'CodeReview'),
		doneTasks: tasks.filter((t) => t.status === 'Done'),
		newProjectTasks: tasks.filter((t) => t.status === 'NewProject'),
	})

	// a little function to help us with reordering the result
	const reorder = (list: any[], startIndex: number, endIndex: number) => {
		const result = Array.from(list)
		const [removed] = result.splice(startIndex, 1)
		result.splice(endIndex, 0, removed)

		return result
	}

	/**
	 * Moves an item from one list to another list.
	 */
	const move = (
		source: Iterable<unknown> | ArrayLike<unknown>,
		destination: Iterable<unknown> | ArrayLike<unknown>,
		droppableSource: { index: number; droppableId: string | number },
		droppableDestination: { index: number; droppableId: string | number }
	) => {
		const sourceClone = Array.from(source)
		const destClone = Array.from(destination)
		const [removed] = sourceClone.splice(droppableSource.index, 1)
		destClone.splice(droppableDestination.index, 0, removed)
		const result: any = {}
		result[droppableSource.droppableId] = sourceClone
		result[droppableDestination.droppableId] = destClone

		return result
	}

	const getList = (id: string) => {
		const modifiedState: any = { ...state }
		const stateTasks: any = modifiedState[id] && modifiedState[id]
		return stateTasks
	}

	const onDragEnd = (result: DropResult) => {
		const { source, destination } = result

		// dropped outside the list
		if (!destination) {
			return
		}
		if (source.droppableId === destination.droppableId) {
			const items = reorder(
				getList(source.droppableId),
				source.index,
				destination.index
			)
			const localState: any = { ...state }
			localState[source.droppableId] = items
			setState(localState)
		} else {
			const result = move(
				getList(source.droppableId),
				getList(destination.droppableId),
				source,
				destination
			)
			const localState = { ...state, ...result }
			setState(localState)
		}
	}
	return (
		<>
			<PageBreadcrumb2 title="Kanban Board" appName="Projects" />
			<Row>
				<Col xs={12}>
					<DragDropContext onDragEnd={onDragEnd}>
						<div className="kanban-board">
							<Droppable droppableId="newProjectTasks">
								{(provided: any) => (
									<div ref={provided.innerRef} className="kanban-col">
										<div className="kanban-main-card">
											<div className="kanban-box-title">
												<h5 className="font-14 mt-0 mb-3">New Projects</h5>
												<Dropdown className="kanban-main-dropdown">
													<DropdownToggle
														as="a"
														className="arrow-none"
														id="drop1"
														data-bs-toggle="dropdown"
														role="button"
														aria-haspopup="false"
														aria-expanded="false"
													>
														<i className="las la-ellipsis-v font-24 text-muted" />
													</DropdownToggle>
													<DropdownMenu align="end">
														<DropdownItem href="#">Create Project</DropdownItem>
														<DropdownItem href="#">Open Project</DropdownItem>
														<DropdownItem href="#">Tasks Details</DropdownItem>
													</DropdownMenu>
												</Dropdown>
											</div>
											<div id="project-list-left" className="pb-1">
												{state.newProjectTasks.map((item, idx) => (
													<Draggable
														draggableId={item.id + ''}
														index={idx}
														key={item.id}
													>
														{(provided: any) => (
															<div
																className="card"
																ref={provided.innerRef}
																{...provided.draggableProps}
																{...provided.dragHandleProps}
															>
																<TaskItem task={item} />
															</div>
														)}
													</Draggable>
												))}
												{provided.placeholder}
											</div>
											<button
												type="button"
												className="btn w-100 btn-soft-primary btn-sm"
											>
												Add Task
											</button>
										</div>
									</div>
								)}
							</Droppable>

							<Droppable droppableId="todoTasks">
								{(provided: any) => (
									<div ref={provided.innerRef} className="kanban-col">
										<div className="kanban-main-card">
											<div className="kanban-box-title">
												<h5 className="font-14 mt-0 mb-3">To Do</h5>
												<Dropdown className="kanban-main-dropdown">
													<DropdownToggle
														as="a"
														className="arrow-none"
														id="drop1"
														data-bs-toggle="dropdown"
														role="button"
														aria-haspopup="false"
														aria-expanded="false"
													>
														<i className="las la-ellipsis-v font-24 text-muted" />
													</DropdownToggle>
													<DropdownMenu align="end">
														<DropdownItem href="#">Create Project</DropdownItem>
														<DropdownItem href="#">Open Project</DropdownItem>
														<DropdownItem href="#">Tasks Details</DropdownItem>
													</DropdownMenu>
												</Dropdown>
											</div>
											<div id="project-list-left" className="pb-1">
												{state.todoTasks.map((item, idx) => (
													<Draggable
														draggableId={item.id + ''}
														index={idx}
														key={item.id}
													>
														{(provided: any) => (
															<div
																className="card"
																ref={provided.innerRef}
																{...provided.draggableProps}
																{...provided.dragHandleProps}
															>
																<TaskItem task={item} />
															</div>
														)}
													</Draggable>
												))}
												{provided.placeholder}
											</div>
											<button
												type="button"
												className="btn w-100 btn-soft-primary btn-sm"
											>
												Add Task
											</button>
										</div>
									</div>
								)}
							</Droppable>

							<Droppable droppableId="inprogressTasks">
								{(provided: any) => (
									<div ref={provided.innerRef} className="kanban-col">
										<div className="kanban-main-card">
											<div className="kanban-box-title">
												<h5 className="font-14 mt-0 mb-3">In Progress</h5>
												<Dropdown className="kanban-main-dropdown">
													<DropdownToggle
														as="a"
														className="arrow-none"
														id="drop1"
														data-bs-toggle="dropdown"
														role="button"
														aria-haspopup="false"
														aria-expanded="false"
													>
														<i className="las la-ellipsis-v font-24 text-muted" />
													</DropdownToggle>
													<DropdownMenu align="end">
														<DropdownItem href="#">Create Project</DropdownItem>
														<DropdownItem href="#">Open Project</DropdownItem>
														<DropdownItem href="#">Tasks Details</DropdownItem>
													</DropdownMenu>
												</Dropdown>
											</div>
											<div id="project-list-left" className="pb-1">
												{state.inprogressTasks.map((item, idx) => (
													<Draggable
														draggableId={item.id + ''}
														index={idx}
														key={item.id}
													>
														{(provided: any) => (
															<div
																className="card"
																ref={provided.innerRef}
																{...provided.draggableProps}
																{...provided.dragHandleProps}
															>
																<TaskItem task={item} />
															</div>
														)}
													</Draggable>
												))}
												{provided.placeholder}
											</div>
											<button
												type="button"
												className="btn w-100 btn-soft-primary btn-sm"
											>
												Add Task
											</button>
										</div>
									</div>
								)}
							</Droppable>

							<Droppable droppableId="codeReviewTasks">
								{(provided: any) => (
									<div ref={provided.innerRef} className="kanban-col">
										<div className="kanban-main-card">
											<div className="kanban-box-title">
												<h5 className="font-14 mt-0 mb-3">Code Review</h5>
												<Dropdown className="kanban-main-dropdown">
													<DropdownToggle
														as="a"
														className="arrow-none"
														id="drop1"
														data-bs-toggle="dropdown"
														role="button"
														aria-haspopup="false"
														aria-expanded="false"
													>
														<i className="las la-ellipsis-v font-24 text-muted" />
													</DropdownToggle>
													<DropdownMenu align="end">
														<DropdownItem href="#">Create Project</DropdownItem>
														<DropdownItem href="#">Open Project</DropdownItem>
														<DropdownItem href="#">Tasks Details</DropdownItem>
													</DropdownMenu>
												</Dropdown>
											</div>
											<div id="project-list-left" className="pb-1">
												{state.codeReviewTasks.map((item, idx) => (
													<Draggable
														draggableId={item.id + ''}
														index={idx}
														key={item.id}
													>
														{(provided: any) => (
															<div
																className="card"
																ref={provided.innerRef}
																{...provided.draggableProps}
																{...provided.dragHandleProps}
															>
																<TaskItem task={item} />
															</div>
														)}
													</Draggable>
												))}
												{provided.placeholder}
											</div>
											<button
												type="button"
												className="btn w-100 btn-soft-primary btn-sm"
											>
												Add Task
											</button>
										</div>
									</div>
								)}
							</Droppable>

							<Droppable droppableId="doneTasks">
								{(provided: any) => (
									<div ref={provided.innerRef} className="kanban-col">
										<div className="kanban-main-card">
											<div className="kanban-box-title">
												<h5 className="font-14 mt-0 mb-3">Done</h5>
												<Dropdown className="kanban-main-dropdown">
													<DropdownToggle
														as="a"
														className="arrow-none"
														id="drop1"
														data-bs-toggle="dropdown"
														role="button"
														aria-haspopup="false"
														aria-expanded="false"
													>
														<i className="las la-ellipsis-v font-24 text-muted" />
													</DropdownToggle>
													<DropdownMenu align="end">
														<DropdownItem href="#">Create Project</DropdownItem>
														<DropdownItem href="#">Open Project</DropdownItem>
														<DropdownItem href="#">Tasks Details</DropdownItem>
													</DropdownMenu>
												</Dropdown>
											</div>
											<div id="project-list-left" className="pb-1">
												{state.doneTasks.map((item, idx) => (
													<Draggable
														draggableId={item.id + ''}
														index={idx}
														key={item.id}
													>
														{(provided: any) => (
															<div
																className="card"
																ref={provided.innerRef}
																{...provided.draggableProps}
																{...provided.dragHandleProps}
															>
																<TaskItem task={item} />
															</div>
														)}
													</Draggable>
												))}
												{provided.placeholder}
											</div>
											<button
												type="button"
												className="btn w-100 btn-soft-primary btn-sm"
											>
												Add Task
											</button>
										</div>
									</div>
								)}
							</Droppable>
						</div>
					</DragDropContext>
				</Col>
			</Row>
		</>
	)
}

export default KanbanBoard
