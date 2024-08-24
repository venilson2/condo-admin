import { ComponentContainerCard } from '@/components'
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem,
} from 'react-bootstrap'

const Faqs = () => {
	return (
		<ComponentContainerCard
			title="Most Commonly Asked Questions"
			description="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid."
		>
			<Accordion defaultActiveKey="0">
				<AccordionItem eventKey="0">
					<AccordionHeader as="h2" className="mt-0" id="headingOne">
						What is Dastone?
					</AccordionHeader>
					<AccordionBody>
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
						terry richardson ad squid. 3 wolf moon officia aute, 3 wolf moon
						officia aute, non cupidatat life accusamus terry richardson ad
						squid. skateboard dolor brunch. Food truck quinoa nesciunt laborum
						eiusmod.
					</AccordionBody>
				</AccordionItem>
				<AccordionItem eventKey="1">
					<AccordionHeader as="h2" className="mt-0" id="headingTwo">
						How buy Dastone on coin?
					</AccordionHeader>
					<AccordionBody>
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
						terry richardson ad squid. 3 wolf moon officia aute, 3 wolf moon
						officia aute, non cupidatat life accusamus terry richardson ad
						squid. skateboard dolor brunch. Food truck quinoa nesciunt laborum
						eiusmod.
					</AccordionBody>
				</AccordionItem>
				<AccordionItem eventKey="2">
					<AccordionHeader as="h2" className="mt-0" id="headingThree">
						What cryptocurrency can i use to buy Dastone?
					</AccordionHeader>
					<AccordionBody className="accordion-body">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
						terry richardson ad squid. 3 wolf moon officia aute, 3 wolf moon
						officia aute, non cupidatat life accusamus terry richardson ad
						squid. skateboard dolor brunch. Food truck quinoa nesciunt laborum
						eiusmod.
					</AccordionBody>
				</AccordionItem>
			</Accordion>
		</ComponentContainerCard>
	)
}

export default Faqs
