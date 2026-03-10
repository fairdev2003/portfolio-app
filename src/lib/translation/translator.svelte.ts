import { languages } from './lang/i18n';

class Translator {
	constructor() {}
	current = $state<string>('pl');

	public t(key: keyof (typeof languages)['pl'], ...args: (string | number)[]): string {
		let text = languages['pl'][key] || key;

		args.forEach((arg) => {
			text = text.replace('%s', String(arg));
		});

		return text;
	}
}

export default Translator;
