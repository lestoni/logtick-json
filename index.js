const os = require('os');

module.exports = function transform(tokens) {
  let output = {};
  let info = tokens.info;
  let commit = tokens.commit;
  let diff = tokens.diff;

  setInfo(output, info);

  let filePaths = setCommit(output, commit);

  setDiff(output, diff, filePaths);

  return output;
};


function setInfo(output, info) {
  // Info
  output.commit = info[0];
  output.author = info[1];
  output.author_date = info[2];
  output.committer = info[3];
  output.commiter_date = info[4];
}


function setCommit(output, commit) {
  output.message = commit[0];
  output.change_stats = commit[commit.length - 1];
  output.changed_files = [];

  let changes = commit.slice(1, commit.length - 1);
  let paths = [];

  for(let change of changes) {
    paths.push(change[0]);
    output.changed_files.push({
      path: change[0],
      changes: change[1]
    });
  }

  return paths;
}

function setDiff(output, diff, filePaths) {
  output.diffs = [];

  filePaths.forEach(function (path, index) {
    output.diffs.push({
      path: path,
      raw: diff[index].join(os.EOL)
    });
  });
}
