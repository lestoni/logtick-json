// SAMPLE OUTPUT FROM logtick-parser

module.exports = {
  info:[ '2caf52e4167f1fb9349a7030b993840270175cb7',
    'Tony Mutai <tonnimutai@gmail.com>',
    'Wed Feb 12 13:59:06 2017 +0300',
    'Tony Mutai <tonnimutai@gmail.com>',
    'Wed Feb 12 13:59:06 2017 +0300' ],
  commit:[ 'more stuff',
    [ 'app.js', '2 ++' ],
    [ 'index.js', '1 +' ],
    '2 files changed, 3 insertions(+)' ],
  diff:
      [ [ '@@ -0,0 +1,2 @@', '+console.log(\'shebang bang!\');', '+' ],
        [ '@@ -0,0 +1 @@', '+console.log(\'test!\')' ] ]
};
