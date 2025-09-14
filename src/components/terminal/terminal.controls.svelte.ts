import { tick } from 'svelte';
import gsap from 'gsap';

class _TerminalContext {
	constructor() {}

	public terminalOpenState = $state<boolean>(false);
	public TerminalReference: HTMLDivElement | undefined = $state();

	public async OpenTerminal() {
		TerminalContext.terminalOpenState = true;
		await tick();
		if (TerminalContext.TerminalReference)
			gsap.fromTo(
				TerminalContext.TerminalReference,
				{ scaleY: 0, transformOrigin: 'top' },
				{ scaleY: 1, duration: 0.4, delay: 0.1, ease: 'power2.out' }
			);
	}

	public async CloseTerminal() {
		await tick();
		if (TerminalContext.TerminalReference)
			gsap.to(TerminalContext.TerminalReference, {
				scaleY: 0,
				duration: 0.4,
				transformOrigin: 'top',
				onComplete: () => {
					this.terminalOpenState = false;
				}
			});
	}

	public InvertTerminalState() {
		this.terminalOpenState = !this.terminalOpenState;
	}
}

const TerminalContext = new _TerminalContext();
export { TerminalContext };
