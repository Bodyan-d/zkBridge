import { Link, Outlet } from 'react-router-dom';
import LigoText from '../../images/logo-with-text.svg';

function Layout(params) {
	return (
		<>
			<header>
				<Link to='/'>
					<img src={LigoText} alt='Logo' />
				</Link>
				<Link to='/zknft'>zkNFT</Link>
				<Link to='/zkmessenger'>zkMsg</Link>
				<Link to='/zklightclient'>zkClient</Link>
				<Link to='/loyalty'>Loyalty</Link>
				<Link to='/news'>News</Link>
			</header>
			<Outlet />
		</>
	);
}

export default Layout;
