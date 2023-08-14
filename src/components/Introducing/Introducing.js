import ProtocolImage from '../../images/protocol-img.gif';
import ArrowLink from '../../svg/arrow-link.svg';

function Introducing(params) {
	return (
		<section className='introducing'>
			<h2 className='introd-title'>Introducing zkBridge Protocol</h2>
			<ul className='introducing-list'>
				<li className='introducing-info'>
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

					<div className='introducing-links'>
						<a href={ArrowLink} className='introducing-link'>
							Read Doc <img src='' alt='' />
						</a>
						<a href={ArrowLink} className='introducing-link'>
							Tech paper
						</a>
						<img src='' alt='' />
					</div>
				</li>
				<li className='introducing-img-item'>
					<img
						src={ProtocolImage}
						alt='ProtocolImage'
						className='introducing-img'
					/>
				</li>
			</ul>
		</section>
	);
}

export default Introducing;
