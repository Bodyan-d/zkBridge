import VideoPc from '../../video/video-pc-homepage.mp4';
import { Link } from 'react-router-dom';

function VideoSection(params) {
	return (
		<section className='main-section'>
			<video
				preload='auto'
				autoplay=''
				loop='loop'
				playsinline=''
				id='h-video'
				src={VideoPc}
				className='main-video'
			></video>
			<div className='main-desc'>
				<h1>Trustless Cross-chain Bridges Made Practical</h1>
				<p className='main-paragraph'>
					The first trustless, efficient, and secure cross-chain
					interoperability protocol with zero-knowledge proofs
				</p>
				<ul className='main-list'>
					<li className='main-navigation-item navigation-item_rainbow'>
						<Link to='/zknft' className='rainbow-link'>
							zkBridge NFT
						</Link>
					</li>
					<li className='main-navigation-item'>
						<Link to='/zkmessenger' className='main-link'>
							zkBridge Messenger
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default VideoSection;
