import { Link } from 'react-router-dom'
import { EmailsType } from '../data'

const CategoriesType = ({ cate }: { cate: string }) => {
	switch (cate) {
		case 'Freelance':
			return <span className="badge-soft-warning badge me-2">{cate}</span>
		case 'Support':
			return <span className="badge-soft-info badge me-2">{cate}</span>
		case 'Social':
			return <span className="badge-soft-purple badge me-2">{cate}</span>
		case 'Family':
			return <span className="badge-soft-success badge me-2">{cate}</span>
		case 'Friends':
			return <span className="badge-soft-pink badge me-2">{cate}</span>
		default:
			return
	}
}

const EmailCard = ({ emails }: { emails: EmailsType }) => {
	const { id, title, subject, teaser, category, date, checked } = emails
	return (
		<li>
			<div className="col-mail col-mail-1">
				<div className="checkbox-wrapper-mail">
					<input type="checkbox" id={`chk ${id}`} defaultChecked={checked} />
					<label htmlFor={`chk ${id}`} className="toggle" />
				</div>
				<Link to="#">
					<p className="title">{title}</p>
					{checked ? (
						<span className="star-toggle fas fa-star text-warning" />
					) : (
						<span className={`star-toggle far fa-star`} />
					)}
				</Link>
			</div>
			<div className="col-mail col-mail-2">
				<Link to="#" className="subject">
					{category && <CategoriesType cate={category} />}
					{subject} &nbsp;–&nbsp; <span className="teaser">{teaser}</span>
				</Link>
				<div className="date">{date}</div>
			</div>
		</li>
	)
}

export default EmailCard
