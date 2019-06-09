const { defaults } = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transform:{
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
    moduleNameMapper: {
        '^core/(.*)$': '<rootDir>/jest/test/$1',
    }
};