import ArrowLink from '../../svg/arrow-link.svg';
import Homelajer from '../../images/home_layerzero.gif';

function zkLightClient(params) {
	return (
		<section className='zkLightClient'>
			<h2 className='second-title'>zkLightClient on LayerZero</h2>
			<ul className='zkLightClient-list'>
				<li className='zkLightClient-img-item'></li>
				<li className='zkLightClient-info'>
					<p>
						zkBridge uses zkSNARKs to enable a prover to efficiently convince
						the receiver chain that a certain state transition happened on the
						sender chain. zkBridge consists of a block header relay network and
						an updater contract.
					</p>
					<p>
						The block header relay network retrieves the block headers from the
						sender chain, generates proofs of the validity of the block headers,
						and sends the headers along with the proofs to the updater contract
						(set up on the receiver chain).
					</p>
					<p>
						The updater contract maintains a light-client state. It
						automatically adds block headers of the sender chain once the
						associated proofs are verified, and updates the current main chain
						of the sender chain.
					</p>

					<div className='zkLightClient-links'>
						<a href='' className='zkLightClient-link'>
							Learn more <img src={ArrowLink} alt='' />
						</a>
					</div>
				</li>
			</ul>
		</section>
	);
}

export default zkLightClient;
