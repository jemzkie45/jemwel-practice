import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LinkTwo from '../pages/LinkTwo';
import Home from '../pages/Home';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#f44336',
		boxShadow: '0px 11px 9px -8px rgba(0,0,0,0.18)',
		zIndex: 10,
		position: 'relative',
	},
}));

const Navigation = (props) => {
	const { match, history } = props;
	const { params } = match;
	const { page } = params;

	const tabNameIndex = {
		0: 'home',
		1: 'about',
	};

	const indexToTabName = {
		home: 0,
		about: 1,
	};

	const classes = useStyles();
	const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);
	const handleChange = (event, newValue) => {
		history.push(`/${tabNameIndex[newValue]}`);
		setSelectedTab(newValue);
	};

	return (
		<Fragment>
			<AppBar className={classes.root} position="static">
				<Tabs className={classes.Tabs} value={selectedTab} onChange={handleChange}>
					<Tab className={classes.Tabss} label="Home" />
					<Tab className={classes.Tabss} label="Link 1" />
					<Tab className={classes.Tabss} label="Link 2" />
				</Tabs>
			</AppBar>
			{selectedTab === 0 && <Home />}
			{selectedTab === 1 && <LinkTwo />}
		</Fragment>
	);
};

export default Navigation;
