import { faGasPump, faPhone, faQuestion, faHome, faShoppingCart, faBolt, faTicketAlt, faFilm, faAsterisk } from '@fortawesome/free-solid-svg-icons';

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

const config = [
	{
		type: 'overview',
		icon: faAsterisk
	},
	{
		type: 'groceries',
		icon: faShoppingCart
	},
	{
		type: 'entertainment',
		icon: faFilm
	},
	{
		type: 'power',
		icon: faBolt
	},
	{
		type: 'gas',
		icon: faGasPump
	},
	{
		type: 'phone',
		icon: faPhone
	},
	{
		type: 'unexpected',
		icon: faQuestion
	},
	{
		type: 'rent',
		icon: faHome
	},
]

export const NavSection = ({ activeLink, handleSelection }) => {
	const acitve = (link) => (name) => link === name;
	const isActive = acitve(activeLink);

	return (
		<Container>
			{config.map((c, i) => <IconButton onClick={handleSelection(c.type)} active={isActive(c.type)} icon={c.icon} size='3x' key={i} />)}
		</Container>
	);
};
