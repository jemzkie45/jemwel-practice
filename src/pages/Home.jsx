import React, { Fragment } from 'react';
import SectionBanner from '../components/SectionBanner';
import SectionArchon from '../components/SectionArchon';
import SectionCoffe from '../components/SectionCoffee';

function Home() {
	return (
		<Fragment>
			<SectionBanner />
			<SectionArchon />
			<SectionCoffe />
		</Fragment>
	);
}

export default Home;
