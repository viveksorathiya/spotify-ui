import RESOURCES from './resources'

export const MENU_ITEMS = [
	{
		name: "Accueil",
		display: "Accueil",
        icon: RESOURCES.H,
        route: '/'
	},
	{
		name: "Rechercher",
		display: "Rechercher",
        icon: RESOURCES.BACK,
        route: '/search'
	},
	{
		name: "Bibliothèque",
		display: "Bibliothèque",
        icon: RESOURCES.BACK,
        route: '/favorite'
	},
];
