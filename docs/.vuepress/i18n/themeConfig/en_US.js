module.exports = {
	label: "English",
	ariaLabel: "Select language",
	selectText: "🌐︎",
	editLinkText: "Edit this page on GitHub",

	serviceWorker: {
		updatePopup: {
			message: "New content is available.",
			buttonText: "Refresh"
		}
	},

	nav: [
		{
			text: "SD Card Setup",
			link: "sd-card-setup"
		},
		{
			text: "Troubleshooting",
			link: "troubleshooting"
		},
		{
			text: "FAQ",
			link: "faq"
		},
		{
			text: "Backups",
			items: [
				{
					text: "DSiWare Backups",
					link: "dsiware-backups"
				},
				{
					text: "Dumping Game Cards",
					link: "dumping-game-cards"
				},
				{
					text: "Dumping NAND",
					link: "dumping-nand"
				}
			]
		},
		{
			text: "Uninstalling Unlaunch",
			link: "uninstalling-unlaunch"
		}
	],

	sidebar: {
		"/en_US/": [
			"",
			{
				title: "Guide",
				children: [
					"launching-the-exploit",
					"dumping-nand",
					"installing-unlaunch"
				]
			},
			{
				title: "Extras",
				children: [
					"dsiware-backups",
					"dumping-game-cards",
					"file-extensions-(windows)",
					"restoring-nand",
					"sd-card-setup",
					"uninstalling-unlaunch"
				]
			},
			{
				title: "Other",
				children: [
					"faq",
					"troubleshooting",
					"credits",
					"site-navigation"
				]
			}
		]
	}
};
