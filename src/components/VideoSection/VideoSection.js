import VideoPc from '../../video/video-pc-homepage.mp4';

function VideoSection(params) {
	return (
		<section className='main-section'>
			<video autoplay muted preload className='main-video'>
				<source src={VideoPc} type='video/mp4' />
			</video>
		</section>
	);
}

export default VideoSection;
