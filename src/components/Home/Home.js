import VideoSection from '../VideoSection/VideoSection';
import Introducing from '../Introducing/Introducing';
import ZkLightClient from '../zkLightClient/zkLightClient';

function Home(params) {
	return (
		<>
			<VideoSection />
			<Introducing />
			<ZkLightClient />
		</>
	);
}

export default Home;
