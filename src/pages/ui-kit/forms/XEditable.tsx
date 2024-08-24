import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import Editable from 'react-x-editable'

const XEditable = () => {
	return (
		<>
			<PageBreadcrumb2 title="X Editable" appName="Forms" />
			<ComponentContainerCard
				title="Inline Example"
				description="This library allows you to create editable elements on your page. It can be used with any engine (bootstrap, jquery-ui, jquery only) and includes both popup and inline modes. Please try out demo to see how it works."
			>
				<table className="table table-striped mb-0">
					<thead>
						<tr>
							<th className="w-50">Inline</th>
							<th>Examples</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Simple text field</td>
							<td>
								<Editable
									name="username"
									dataType="text"
									mode="popup"
									title="Please enter username"
									value={'ni3galave'}
									placement="right"
									showButtons={true}
								/>
							</td>
						</tr>
						<tr>
							<td>Empty text field, required</td>
							<td>
								<Editable
									name="username"
									dataType="text"
									mode={'popup'}
									title="Enter username"
									placement="right"
									showButtons={true}
									validate={(value: any) => {
										if (!value) {
											return 'Required'
										}
									}}
								/>
							</td>
						</tr>
						<tr>
							<td>Simple textarea</td>
							<td>
								<Editable
									name="description"
									dataType="textarea"
									mode={'popup'}
									title="Enter description"
									placement="right"
									showButtons={true}
								/>
							</td>
						</tr>

						<tr>
							<td>Simple checkbox list</td>
							<td>
								<Editable
									name="check"
									dataType="checklist"
									title="Please select city"
									mode={'popup'}
									optionsInline={false}
									value={['Nashik', 'Mumbai']}
									options={[
										{ value: 1, text: 'Mumbai' },
										{ value: 2, text: 'Pune' },
										{ value: 3, text: 'Nashik' },
									]}
								/>
							</td>
						</tr>
						<tr>
							<td>Simple text field with disable</td>
							<td>
								<Editable
									name="username"
									dataType="text"
									mode={'inline'}
									value="ni3galave"
									disabled={true}
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</ComponentContainerCard>
		</>
	)
}

export default XEditable
