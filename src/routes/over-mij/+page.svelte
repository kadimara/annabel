<script lang="ts">
</script>

<div class="flex flex-col items-center flex-wrap gap-4 sm:flex-row">
	<div class="flex-1 flex justify-center">
		<div class="frame">
			<img src="/images/about-me.jpg" alt="" />
		</div>
	</div>
	<div class="space-y-4 flex-1 min-w-[50%] text-center sm:text-left">
		<h1>OVER MIJ</h1>
		<p>
			Vrolijk gekleurde werken met een verhaal, iets leerzaams of allebei. Bestaande uit portretten,
			beestjes, hier en daar wat ingewanden en nog veel meer.
		</p>
		<p>
			Bij het krijgen van een opdracht bedenkt ik graag samen met de opdrachtgever een passend en
			creatief werk. Om dit vervolgens uit te werken tot iets bijzonders en unieks. Mijn
			vaardigheden strekken zich uit van illustraties voor digitaal en print gebruik, 2D animaties,
			tot live tekenen tijdens een evenement en grote muur schilderingen. Kortom, ik ben er voor al
			uw illustratieve vormgeving.
		</p>
		<p>
			In mijn eigen werk combineer ik graag thema's uit de Biologie met mijn skills om informatie om
			te zetten in een verhalend en visueel interessant beeld.
		</p>
	</div>
	<div class="timeline">
		<div class="item">
			<div class="text-sm text-gray-400">2019-2020</div>
			<div>Cum Laude propedeuse vormgeving aan de kunstacademie Minerva in Groningen.</div>
		</div>
		<div class="item">
			<div class="text-sm text-gray-400">2020-2023</div>
			<div>
				Cum Laude bachelor Illustratie en Animatie aan de kunstacademie Minerva in Groningen.
			</div>
		</div>
		<div class="item">
			<div class="text-sm text-gray-400">2021-heden</div>
			<div>
				Bachelor Biologie aan de Rijks Universiteit Groningen, specialisatie in gedrag en
				neurobiologie.
			</div>
		</div>
		<div class="item">
			<div class="text-sm text-gray-400">Oktober 2021</div>
			<div>
				Officiële inschrijving bij de KVK als illustrator en animator onder de naam Annabel Adema.
			</div>
		</div>
		<div class="item">
			<div class="text-sm text-gray-400">2022</div>
			<div>Fonds BROEI (onder Arcadia Friesland).</div>
		</div>
	</div>
</div>

<style>
	.timeline {
		@apply flex flex-col gap-2;
		width: 100%;
		position: relative;
	}

	.timeline::after {
		border: 2px dashed;
		@apply border-blue-500;
		content: '';
		position: absolute;
		/* width: 6px; */
		height: 100%;
		/* background: white; */
		top: 0;
		left: 50%;
		/* margin-left: -3px; */
	}

	.timeline .item {
		@apply p-2;
		position: relative;
		width: calc(50% - 16px);

		background: white;
		padding: 8px;
		border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
		box-shadow: 0px 0px 0px;
		text-align: right;
	}
	.timeline .item:nth-child(even) {
		margin-left: calc(50% + 16px);
		text-align: left;
	}

	.timeline .item:nth-child(odd):before {
		content: '';
		position: absolute;
		border-top: 16px solid transparent;
		border-bottom: 16px solid transparent;
		border-left: 16px solid white;
		right: -12px;
		top: 8px;
	}
	.timeline .item:nth-child(even)::before {
		content: '';
		position: absolute;
		border-top: 16px solid transparent;
		border-bottom: 16px solid transparent;
		border-right: 16px solid white;
		left: -12px;
		top: 8px;
	}

	.frame {
		@apply w-64 border-orange-400;
		overflow: hidden;
		border-width: 4px 8px;
		border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
	}
</style>
