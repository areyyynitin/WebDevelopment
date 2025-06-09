let currentClock;

function searchBackend() {
  console.log("request sent to backend");
  // fetch()
}

function debouncedSearchBackend() {
  clearTimeout(currentClock);
  currentClock = setTimeout(searchBackend, 30); // start a cloick
}

debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();