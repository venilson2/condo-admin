import clsx from 'clsx'
import 'regenerator-runtime/runtime'
import { forwardRef, useEffect, useRef, useState, type ReactNode } from 'react'
import {
	type Column,
	type FilterValue,
	type Row,
	useAsyncDebounce,
	useExpanded,
	useGlobalFilter,
	usePagination,
	useRowSelect,
	useSortBy,
	useTable,
} from 'react-table'
import { PageSize, Pagination } from './Pagination'

export type CellFormatter<T extends object> = {
	row: Row<T>
}

type GlobalFilterProps = {
	preGlobalFilteredRows: any
	globalFilter: any
	setGlobalFilter: (filterValue: FilterValue) => void
	searchBoxClass?: string
}

const GlobalFilter = ({
	preGlobalFilteredRows,
	globalFilter,
	setGlobalFilter,
	searchBoxClass,
}: GlobalFilterProps) => {
	const count = preGlobalFilteredRows.length
	const [value, setValue] = useState<any>(globalFilter)
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined)
	}, 200)

	return (
		<div className={clsx(searchBoxClass)}>
			<span className="d-flex align-items-center">
				Search :{' '}
				<input
					value={value || ''}
					onChange={(e) => {
						setValue(e.target.value)
						onChange(e.target.value)
					}}
					placeholder={`${count} records...`}
					className="form-control w-auto ms-1"
				/>
			</span>
		</div>
	)
}

type IndeterminateCheckboxProps = {
	indeterminate: any
	children?: ReactNode
}

const IndeterminateCheckbox = forwardRef<
	HTMLInputElement,
	IndeterminateCheckboxProps
>(({ indeterminate, ...rest }, ref) => {
	const defaultRef = useRef()
	const resolvedRef: any = ref || defaultRef

	useEffect(() => {
		resolvedRef.current.indeterminate = indeterminate
	}, [resolvedRef, indeterminate])

	return (
		<div className="form-check">
			<input
				type="checkbox"
				className="form-check-input"
				ref={resolvedRef}
				{...rest}
			/>
			<label htmlFor="form-check-input" className="form-check-label"></label>
		</div>
	)
})

type TableProps<TableValues> = {
	isSearchable?: boolean
	isSortable?: boolean
	pagination?: boolean
	isSelectable?: boolean
	isExpandable?: boolean
	sizePerPageList?: PageSize[]
	columns: ReadonlyArray<Column>
	data: TableValues[]
	pageSize?: number
	searchBoxClass?: string
	tableClass?: string
	theadClass?: string
}

const Table = <TableValues extends object>(props: TableProps<TableValues>) => {
	const isSearchable = props['isSearchable'] || false
	const isSortable = props['isSortable'] || false
	const pagination = props['pagination'] || false
	const isSelectable = props['isSelectable'] || false
	const isExpandable = props['isExpandable'] || false
	const sizePerPageList = props['sizePerPageList'] || []

	const otherProps: any = {}

	if (isSearchable) {
		otherProps['useGlobalFilter'] = useGlobalFilter
	}
	if (isSortable) {
		otherProps['useSortBy'] = useSortBy
	}
	if (isExpandable) {
		otherProps['useExpanded'] = useExpanded
	}
	if (pagination) {
		otherProps['usePagination'] = usePagination
	}
	if (isSelectable) {
		otherProps['useRowSelect'] = useRowSelect
	}

	const dataTable = useTable(
		{
			columns: props['columns'],
			data: props['data'],
			initialState: { pageSize: props['pageSize'] || 10 },
		},

		'useGlobalFilter' in otherProps && otherProps['useGlobalFilter'],
		'useSortBy' in otherProps && otherProps['useSortBy'],
		'useExpanded' in otherProps && otherProps['useExpanded'],
		'usePagination' in otherProps && otherProps['usePagination'],
		'useRowSelect' in otherProps && otherProps['useRowSelect'],

		(hooks) => {
			isSelectable &&
				hooks.visibleColumns.push((columns) => [
					// Let's make a column for selection
					{
						id: 'selection',
						// The header can use the table's getToggleAllRowsSelectedProps method
						// to render a checkbox
						Header: ({ getToggleAllPageRowsSelectedProps }: any) => (
							<div>
								<IndeterminateCheckbox
									{...getToggleAllPageRowsSelectedProps()}
								/>
							</div>
						),
						// The cell can use the individual row's getToggleRowSelectedProps method
						// to the render a checkbox
						Cell: ({ row }: any) => (
							<div>
								<IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
							</div>
						),
					},
					...columns,
				])

			isExpandable &&
				hooks.visibleColumns.push((columns) => [
					// Let's make a column for selection
					{
						// Build our expander column
						id: 'expander', // Make sure it has an ID
						Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
							<span {...getToggleAllRowsExpandedProps()}>
								{isAllRowsExpanded ? '-' : '+'}
							</span>
						),
						Cell: ({ row }) =>
							// Use the row.canExpand and row.getToggleRowExpandedProps prop getter
							// to build the toggle for expanding a row
							row.canExpand ? (
								<span
									{...row.getToggleRowExpandedProps({
										style: {
											// We can even use the row.depth property
											// and paddingLeft to indicate the depth
											// of the row
											paddingLeft: `${row.depth * 2}rem`,
										},
									})}
								>
									{row.isExpanded ? '-' : '+'}
								</span>
							) : null,
					},
					...columns,
				])
		}
	)

	const rows = pagination ? dataTable.page : dataTable.rows

	return (
		<>
			{isSearchable && (
				<GlobalFilter
					preGlobalFilteredRows={dataTable.preGlobalFilteredRows}
					globalFilter={dataTable.state.globalFilter}
					setGlobalFilter={dataTable.setGlobalFilter}
					searchBoxClass={props['searchBoxClass']}
				/>
			)}

			<div className="table-responsive">
				<table
					{...dataTable.getTableProps()}
					className={clsx(
						'table table-centered react-table',
						props['tableClass']
					)}
				>
					<thead className={props['theadClass']}>
						{dataTable.headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column: any) => (
									<th
										{...column.getHeaderProps(
											column.defaultCanSort && column.getSortByToggleProps()
										)}
										className={clsx({
											sorting_desc: column.isSortedDesc === true,
											sorting_asc: column.isSortedDesc === false,
											sortable: column.defaultCanSort === true,
										})}
									>
										{column.render('Header')}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...dataTable.getTableBodyProps()}>
						{(rows || []).map((row) => {
							dataTable.prepareRow(row)
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
										)
									})}
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>

			{pagination && (
				<Pagination tableProps={dataTable} sizePerPageList={sizePerPageList} />
			)}
		</>
	)
}

export { Table }
