import React, { Fragment } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		paddingTop: 90,
		paddingBottom: 90,
	},
	h2: {
		marginBottom: 25,
	},
	textLead: {
		marginBottom: 20,
		fontWeight: 700,
	},
});

function SectionArchon() {
	const classes = useStyles();

	return (
		<Fragment>
			<Container className={classes.root} maxWidth="lg">
				<Grid container spacing={6}>
					<Grid item xs={12} md={9}>
						<Typography className={classes.h2} variant="h2">
							Anchor Icon
						</Typography>
						<Typography className={classes.textLead} color="secondary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Aenean accumsan, augue et mattis feugiat. Aenean accumsan, augue et mattis
							feugiat
						</Typography>
						<Typography color="secondary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. augue et mattis feugiatLorem ipsum
							dolor sit amet, consectetur adipiscing elit. Aenean accumsan, augue et mattis feugiat Aenean
							accumsan, augue et mattis feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Aenean accumsan, augue et mattis feugiatLorem ipsum dolor sit amet, consectetur adipiscing elit.
							Aenean accumsan, augue et mattis feugiat
						</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Grid container justifyContent="center" alignItems="center">
							<Typography variant="h2">Archon ICON</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
}

export default SectionArchon;
