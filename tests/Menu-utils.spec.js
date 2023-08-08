import * as utils from '../src/menu/utils';
import { waitForTimeout } from './helpers/utils';


describe('Menu-utils - utils.matchQuery', () => {

	let buttons;

	beforeEach(async () => {
		buttons = [
			{ text: 'Button 1' },
			{ text: 'Button 2' },
			{ text: 'Button 3' },
			{ text: 'Another button' },
		];
		await waitForTimeout(301);
	});

	it('should return undefined if key starts with a non-word character', () => {
		const result = utils.matchQuery(buttons, '-');
		expect(result).toBeUndefined();
	});

	it('should return undefined if key ends with a non-word character', () => {
		const result = utils.matchQuery(buttons, 'Button%');
		expect(result).toBeUndefined();
	});

	it('should return undefined if key contains non-word characters in the middle', () => {
		const result = utils.matchQuery(buttons, 'Butt#n');
		expect(result).toBeUndefined();
	});

	it('should return undefined if no button text starts with the query', () => {
		const result = utils.matchQuery(buttons, 'xyz');
		expect(result).toBeUndefined();
	});

	it('should return the first button whose text starts with the query', () => {
		const result = utils.matchQuery(buttons, 'Butt');
		expect(result).toEqual(buttons[0]);
	});

	it('should return the first button whose text starts with the query, ignoring case', () => {
		const result = utils.matchQuery(buttons, 'bUtT');
		expect(result).toEqual(buttons[0]);
	});

	it('should return the first button whose text starts with the query, even if there are other buttons with similar text', () => {
		const result = utils.matchQuery(buttons, 'Ano');
		expect(result).toEqual(buttons[3]);
	});

});



describe('Menu-utils - utils.addArias', () => {
	let el;

	beforeEach(() => {
		el = document.createElement('button');
	});

	it('should return undefined if no element is provided', () => {
		const result = utils.addArias(null);
		expect(result).toBeUndefined();
	});

	it('should add the aria-haspopup attribute to the element', () => {
		utils.addArias(el);
		expect(el.getAttribute('aria-haspopup')).toEqual('true');
	});

	it('should add the aria-expanded attribute to the element', () => {
		utils.addArias(el);
		expect(el.getAttribute('aria-expanded')).toEqual('true');
	});

});



describe('Menu-utils - removeArias', () => {
	let el;

	beforeEach(() => {
		el = document.createElement('button');
		el.setAttribute('aria-expanded', 'true');
	});

	it('should return undefined if no element or selector is provided', () => {
		const result = utils.removeArias();
		expect(result).toBeUndefined();
	});

	it('should remove the aria-expanded attribute from the element', () => {
		utils.removeArias(el);
		expect(el.getAttribute('aria-expanded')).toEqual('false');
	});

	it('should remove the aria-expanded attribute from all elements matching the selector', () => {
		const el2 = document.createElement('button');
		el2.setAttribute('aria-expanded', 'true');
		document.body.appendChild(el);
		document.body.appendChild(el2);
		utils.removeArias('button');
		expect(el.getAttribute('aria-expanded')).toEqual('false');
		expect(el2.getAttribute('aria-expanded')).toEqual('false');
		document.body.removeChild(el);
		document.body.removeChild(el2);
	});

	it('should not remove other aria attributes from the element', () => {
		el.setAttribute('aria-haspopup', 'true');
		utils.removeArias(el);
		expect(el.getAttribute('aria-haspopup')).toEqual('true');
	});

});
