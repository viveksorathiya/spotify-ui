import RESOURCES from './resources'

export const MENU_ITEMS = [
	{
		name: "Accueil",
		display: "Accueil",
        icon: RESOURCES.HOME,
        route: '/'
	},
	{
		name: "Rechercher",
		display: "Rechercher",
        icon: RESOURCES.SEARCH,
        route: '/search'
	},
	{
		name: "Bibliothèque",
		display: "Bibliothèque",
        icon: RESOURCES.BACK,
        route: '/favorite'
	},
];
