import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '400px',
		backgroundColor: '#f44336',
		backgroundSize: 'cover',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '4rem',
		borderRadius: '0',
	},
	title: {
		fontSize: '4rem',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		color: '#fff',
	},
	bodyMessage: {
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		color: '#fff',
	},
	BtnStarted: {
		backgroundColor: '#000',
		marginTop: '10px',
		color: '#fff',
		borderRadius: '0px',
	},
}));

function SectionBanner() {
	const classes = useStyles();
	return (
		<Fragment>
			<Card className={classes.root}>
				<CardContent>
					<Typography className={classes.title}>FRONTEND DEVELOPER</Typography>
					<Typography className={classes.bodyMessage} variant="body2" component="p">
						well meaning and kindly.
					</Typography>
					<Typography className={classes.bodyMessage} variant="body2" component="p">
						<Button variant="contained" className={classes.BtnStarted}>
							Get Started
						</Button>
					</Typography>
				</CardContent>
			</Card>
			;
		</Fragment>
	);
}

export default SectionBanner;
