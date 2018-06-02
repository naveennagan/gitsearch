import getPackageJsonFromGithub from 'get-package-json-from-github';

var packageParser = {
  fetchFile: function (location) {
    return new Promise((resolve, reject) => {
      getPackageJsonFromGithub(location)
        .then(packageJson => {
          resolve(packageJson)
        }, err => {
          reject(err)
        });
    })
  }
}

module.exports = packageParser;