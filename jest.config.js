module.exports = {
    preset: "ts-jest",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js"],
    testPathIgnorePatterns: ["/node_modules/", "/.yarn/"],
    modulePathIgnorePatterns: ["/.yarn/"],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.ts", "main.ts"],
    coverageDirectory: "coverage/",
    coverageReporters: ["html", "text-summary", "lcov"],
    coveragePathIgnorePatterns: ["/node_modules/"],
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
    },
    coverageThreshold: {
        global: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90,
        },
    },
};
