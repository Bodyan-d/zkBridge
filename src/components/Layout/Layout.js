import { Link, Outlet } from 'react-router-dom';
import LigoText from '../../images/logo-with-text.svg';
import zkIcon from '../../svg/zk-icon.svg';
import secondBtn from '../../images/btn2.png';

function Layout(params) {
	return (
		<>
			<header className='main-header'>
				<nav className='navigation'>
					<ul className='navigation-list'>
						<li className=' navigation-logo'>
							<Link to='/' className='header-logo'>
								<img src={LigoText} alt='Logo' className='logo' />
							</Link>
						</li>
						<li className='navigation-item'>
							<Link to='/zknft' className='header-link'>
								zkNFT
							</Link>
						</li>
						<li className='navigation-item'>
							<Link to='/zkmessenger' className='header-link'>
								zkMsg
							</Link>
						</li>
						<li className='navigation-item'>
							<Link to='/zklightclient' className='header-link'>
								zkClient <img src={zkIcon} alt='icon' className='client-icon' />
							</Link>
						</li>
						<li className='navigation-item'>
							<Link to='/loyalty' className='header-link'>
								Loyalty
								<img src={secondBtn} alt='icon' className='teddy-icon' />
							</Link>
						</li>
						<li className='navigation-item'>
							<Link to='/news' className='header-link'>
								News
							</Link>
						</li>
					</ul>

					<button className='connect-wallet'>Connect Wallet</button>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default Layout;
