function Introducing(params) {
	return (
		<section className='introducing'>
			<h2>Introducing zkBridge Protocol</h2>
			<ul>
				<li>
					<p>
						zkBridge uses zkSNARKs to enable a prover to efficiently convince
						the receiver chain that a certain state transition happened on the
						sender chain. zkBridge consists of a block header relay network and
						an updater contract. The block header relay network retrieves the
						block headers from the sender chain, generates proofs of the
						validity of the block headers, and sends the headers along with the
						proofs to the updater contract (set up on the receiver chain). The
						updater contract maintains a light-client state. It automatically
						adds block headers of the sender chain once the associated proofs
						are verified, and updates the current main chain of the sender
						chain.
					</p>
				</li>
				<li></li>
			</ul>
		</section>
	);
}

export default Introducing;
