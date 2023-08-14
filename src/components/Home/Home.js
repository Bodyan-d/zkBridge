import VideoSection from '../VideoSection/VideoSection';
import Introducing from '../Introducing/Introducing';
import ZkLightClient from '../zkLightClient/zkLightClient';
import Advantages from '../Advantages/Advantages';

function Home(params) {
	return (
		<>
			<VideoSection />
			<Introducing />
			<ZkLightClient />
			<Advantages />
		</>
	);
}

export default Home;
