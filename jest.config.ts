/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
   roots: ['<rootDir>/src'],
   collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
   collectCoverage: true,
   coverageDirectory: "coverage",
   testEnvironment:"node",
    transform:{
        '.+\\.ts$': 'ts-jest'
    },
   coverageProvider: "v8",
};

export default config;
