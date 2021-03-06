const { dependencies, devDependencies } = require('./deps.js');

const getDependencyStr = () => {
  const commands = [];
  if (dependencies.length > 0) {
    commands.push(`yarn add ${dependencies.join(' ')}`);
  }

  if (devDependencies.length > 0) {
    commands.push(`yarn add --dev ${devDependencies.join(' ')}`);
  }
  return commands.join(' && ');
};

const transformContent = (content, filePath) => {
  if (!filePath.includes('package.json')) {
    return content;
  }

  const data = JSON.parse(content);
  data.main = 'dist/index.js';
  data.scripts.build = 'webpack';
  return JSON.stringify(data, null, 2);
};

module.exports = { getDependencyStr, transformContent };
