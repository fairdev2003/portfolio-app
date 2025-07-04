const SyntaxHighlighterColors: Record<string, string> = {
	NAME: 'pink',
	EVERY: 'pink'
};

class SFMCompiler {
	public version: string = '4.22.0';
	public file_extension: string = '.sfm';

	constructor(file_path: string) {
		this.getFileContent(file_path);
		this.Make();
	}

	public getFileContent(path: string) {}

	public CommentKeyword() {
		// -- comment
	}

	public NameKeyword() {
		// You cant place nothing before name except comments
		// NAME "My Simple Program"...
	}

	public EveryKeyword() {
		// EVERY 20 TICKS DO
		// EVERY REDSTONE PULSE DO
	}

	public InputKeyword() {
		// INPUT FROM a
	}

	public OutputKeyword() {
		// OUTPUT TO b
	}

	public IfKeyword() {
		// IF a HAS 20 stone THEN..
	}

	public LinesManager() {}

	// returning table of contents
	public Make() {}
}
