module.exports = {
	roots: ['<rootDir>/src/tests'],
	collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**'],
	coverageDirectory: 'coverage',
	coverageProvider: 'babel',
	testEnvironment: 'node',
	transform: {
		'.+\\.ts$': 'ts-jest',
	},
	moduleNameMapper: {
		'@/tests/(.*)': '<rootDir>/tests/$1',
		'@/(.*)': '<rootDir>/src/$1',
	},
	moduleDirectories: ['node_modules', 'src'],
};
