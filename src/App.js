import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home/Home';
import NFTPage from './components/NFTPage/NFTPage';
import Messages from './components/Messages/Messages';
import Clients from './components/Clients/Clients';
import Loyalty from './components/Loyalty/Loyalty';
import News from './components/News/News';
import Layout from './components/Layout/Layout';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='zknft' element={<NFTPage />} />
					<Route path='zkmessenger' element={<Messages />} />
					<Route path='zklightclient' element={<Clients />} />
					<Route path='loyalty' element={<Loyalty />} />
					<Route path='news' element={<News />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
