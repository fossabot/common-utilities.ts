import * as functors from '../functors';

test('UniversalFunctor1', () => {
	// Arrange
	const expectedValue: number[] = [4, 6, 10];

	// Act
	const fnMapElement = (n: number) => 2 * n;
	const actualValue: number[] = new functors.UniversalFunctor<number[]>([2, 3, 5])
		.map((array: number[]) => array.map(fnMapElement))
		.getValue();

	// Assert
	expect(actualValue).toEqual(expectedValue);
});
