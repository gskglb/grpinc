EmpDetailsAttach = new FS.Collection('empDetailsAttach', {
  stores: [new FS.Store.FileSystem('empDetailsAttach', {})]
});

PreviousClaimsHistory = new FS.Collection('previousClaimsHistory', {
  stores: [new FS.Store.FileSystem('previousClaimsHistory', {})]
});