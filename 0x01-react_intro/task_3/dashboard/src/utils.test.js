// impot utils from './utils'
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

// Write a test to check that the function getFullYear returns the correct year (be careful to not create a time bomb)
test('returns current year', () => {
	expect(getFullYear()).toBe(2021);
});

// Write a test to check that getFooterCopy returns the correct string when the argument is true or false
test('correct footer copy', () => {
	expect(getFooterCopy(true)).toBe('Holberton School');
	expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

//Write a test checking the returned string for getLatestNotification

test('returns right notification', () => {
	expect(getLatestNotification()).toBe(
		'<strong>Urgent Requirement</strong> - complete by EOD'
	);
});
