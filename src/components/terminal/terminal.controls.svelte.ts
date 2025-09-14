import { tick } from 'svelte';
import gsap from 'gsap';

class _TerminalContext {
	constructor() {}

	public terminalOpenState = $state<boolean>(false);
	public TerminalReference: HTMLDivElement | undefined = $state();
	public TerminalContent: HTMLDivElement | undefined = $state();

	public async OpenTerminal() {
		TerminalContext.terminalOpenState = true;
		document.body.style.overflow = 'hidden';
		await tick();
		if (this.TerminalReference && this.TerminalContent) {
			gsap.fromTo(
				this.TerminalReference,
				{ scaleY: 0, transformOrigin: 'top' },
				{ scaleY: 1, duration: 0.4, delay: 0.1, ease: 'power2.out' }
			);
			gsap.to(this.TerminalContent, {
				opacity: 1,
				delay: 0.4
			});
		}
	}

	public async CloseTerminal() {
		await tick();
		if (this.TerminalReference && this.TerminalContent) {
			gsap.to(this.TerminalContent, {
				opacity: 0
			});

			gsap.to(this.TerminalReference, {
				scaleY: 0,
				duration: 0.4,
				delay: 0.4,
				transformOrigin: 'top',
				onComplete: () => {
					this.terminalOpenState = false;
					document.body.style.overflow = '';
				}
			});
		}
	}

	public InvertTerminalState() {
		this.terminalOpenState = !this.terminalOpenState;
	}
}

const TerminalContext = new _TerminalContext();
export { TerminalContext };
