import type {Config} from 'jest';

const config: Config = {
    preset: 'ts-jest',
    verbose: true,
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
};

export default config;