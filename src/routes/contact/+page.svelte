<script lang="ts">
	let send = false;
	const handleSubmit = () => {
		send = true;
	};
</script>

<div class="envelope {send ? 'send' : ''}" title="">
	<form class="letter" on:submit={handleSubmit}>
		<div class="flex flex-col">
			<label>Name:</label>
			<input type="text" name="name" />
		</div>
		<div class="flex flex-col">
			<label>Email:</label>
			<input type="text" name="name" />
		</div>
		<div class="flex flex-col">
			<label>Message:</label>
			<textarea />
		</div>
		<button class="self-center" type="submit">Verstuur</button>
	</form>
	<div class="left" />
	<div class="right" />
	<div class="bottom" />
	<div class="top" />
</div>

<style>
	.envelope {
		@apply bg-orange-100;
		width: 500px;
		height: 300px;
		margin: auto;
		position: relative;
		cursor: pointer;
		z-index: 0;
	}

	.top,
	.left,
	.right,
	.bottom {
		content: '';
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		position: absolute;
		border: solid transparent;
		border-width: 150px 250px;
		pointer-events: none;
	}

	.left {
		border-left: 250px solid red;
		@apply border-l-orange-200;
	}
	.right {
		border-right: 250px solid yellow;
		@apply border-r-orange-200;
	}
	.bottom {
		border-bottom: 170px solid greenyellow;
		top: -20px;
		@apply border-b-orange-300;
	}

	.top {
		border-top: 170px solid blueviolet;
		@apply border-t-orange-400;
		transform-origin: 250px 0px;
	}

	.letter {
		@apply px-5 py-2 gap-2 flex flex-col text-blue-600;
		position: relative;
		overflow: hidden;
		top: 10px;
		width: 480px;
		height: 280px;
		margin: auto;

		background-color: #f6f2ea;
		box-shadow: 0px 4px 8px #9d9d9d;
	}

	input,
	textarea {
		@apply outline-orange-400 px-2;
		background: rgba(255, 255, 255, 0.3);
	}

	/* Animation */
	.envelope {
		top: 140px;
		transition: transform 0.5s ease;
	}
	.envelope:not(.send):hover {
		transition-delay: 0.2s;
		transform: translateY(140px);
	}
	.envelope .letter {
		transition: transform 0.5s ease;
	}
	.envelope:not(.send):hover .letter {
		transition-delay: 0.2s;
		transform: translateY(-280px);
	}
	.envelope .top {
		transition: all 0.5s ease 0.3s;
		z-index: 0;
	}
	.envelope:not(.send):hover .top {
		transition-delay: 0s;
		transform: rotateX(180deg);
		z-index: -1;
	}

	.envelope.send {
		animation: send 0.5s forwards 0.5s cubic-bezier(0.9, -0.6, 1, 0.5);
	}

	@keyframes send {
		100% {
			transform: translateX(100vw);
		}
	}
</style>
