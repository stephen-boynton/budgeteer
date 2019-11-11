import { faShoppingBag, faWineBottle, faLightbulb, faGasPump, faPhone, faQuestion, faHome, faShoppingCart, faBolt, faTicketAlt, faFilm, faAsterisk } from '@fortawesome/free-solid-svg-icons';

import { IconButton } from '../IconButton'
import { Container } from './styles';

export const fakeData = {
	budgets: [
		{
			section: 'groceries',
			total: 500,
			amount: 355,
			history: [{ action: 'add', amount: 10 }]
		},
		{
			section: 'gas',
			total: 120,
			amount: 89,
			history: [{ action: 'subtract', amount: 10 }]
		},
		{
			section: 'entertainment',
			total: 200,
			amount: 187,
			history: [{ action: 'add', amount: 10 }]
		},
		{
			section: 'power',
			total: 120,
			amount: 89,
			history: [{ action: 'subtract', amount: 10 }]
		},
		{
			section: 'rent',
			total: 120,
			amount: 89,
			history: [{ action: 'subtract', amount: 10 }]
		},
		{
			section: 'phone',
			total: 120,
			amount: 89,
			history: [{ action: 'subtract', amount: 10 }]
		},
		{
			section: 'unexpected',
			total: 120,
			amount: 89,
			history: [{ action: 'subtract', amount: 10 }]
		}
	]
}

const config = {
	all: {
		link: {
			pathname: '/',
		},
		icon: faAsterisk
	},
	groceries: {
		link: {
			pathname: '/budget?type=groceries'
		},
		icon: faShoppingCart
	},
	entertainment: {
		link: {
			pathname: '/budget?type=entertainment'
		},
		icon: faFilm
	},
	power: {
		link: {
			pathname: '/budget?type=power'
		},
		icon: faBolt
	},
	gas: {
		link: {
			pathname: '/budget?type=gas'
		},
		icon: faGasPump
	},
	phone: {
		link: {
			pathname: '/budget?type=phone'
		},
		icon: faPhone
	},
	unexpected: {
		link: {
			pathname: '/budget?type=unexpected'
		},
		icon: faQuestion
	},
	rent: {
		link: {
			pathname: '/budget?type=rent'
		},
		icon: faHome
	},
}

export const NavSection = ({ activeLink }) => {
	const acitve = (link) => (name) => link === name;
	const isActive = acitve(activeLink);
	return (
		<Container>
			{Object.keys(config).map((c, i) => <IconButton active={isActive(c)} link={config[c].link} icon={config[c].icon} size='3x' key={i} />)}
		</Container>
	);
};
