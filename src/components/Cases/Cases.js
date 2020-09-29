import React from 'react';

import { ReactComponent as CaseNext } from '../../assets/arrow-right.svg';
import { ReactComponent as CasePrev } from '../../assets/arrow-left.svg';

const caseStudies = [
	{
		id: 1,
		subtitle: 'Curology',
		title: 'A custom formula for your skin’s unique needs',
		img: 'curology-min',
	},
	{
		id: 2,
		subtitle: 'Yourspace',
		title: 'Open space floor plans for you next venture',
		img: 'yourspace-min',
	},
	{
		id: 3,
		subtitle: 'Lumin',
		title: 'For your best look ever',
		img: 'lumin-min',
	},
];

const Cases = () => {
	return (
		<section className='cases'>
			<div className='container-fluid'>
				<div className='cases-navigation'>
					<div className='cases-arrow prev disabled'>
						<CasePrev />
					</div>
					<div className='cases-arrow next'>
						<CaseNext />
					</div>
				</div>

				<div className='row'>
					{caseStudies.map((caseStudy) => (
						<div className='case' key={caseStudy.id}>
							<div className='case-details'>
								<span>{caseStudy.subtitle}</span>
								<h2>{caseStudy.title}</h2>
							</div>

							<div className='case-image'>
								<img
									src={require(`../../assets/${caseStudy.img}.png`)}
									alt={caseStudy.title}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Cases;
