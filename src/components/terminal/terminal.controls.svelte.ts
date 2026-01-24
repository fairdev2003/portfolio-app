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
				{ scale: 0.9 },
				{ scale: 1, duration: 0.4, delay: 0.1, ease: 'power2.out' }
			);
			gsap.to(this.TerminalContent, {
				opacity: 1,
				delay: 0.2
			});
		}
	}

	public async CloseTerminal() {
		await tick();
		if (this.TerminalReference && this.TerminalContent) {
			gsap.to(this.TerminalContent, {
				opacity: 0
			});

			gsap.fromTo(
				this.TerminalReference,
				{ scale: 1 },
				{
					scale: 0.9,
					duration: 0.4,
					onComplete: () => {
						this.terminalOpenState = false;
						document.body.style.overflow = '';
					}
				}
			);
		}
	}

	public InvertTerminalState() {
		this.terminalOpenState = !this.terminalOpenState;
	}
}

const TerminalContext = new _TerminalContext();
export { TerminalContext };
