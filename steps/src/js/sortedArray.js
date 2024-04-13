export function sortedArray(array) {

  array.sort(function (a, b) {
    if (a.date.split('.').join() > b.date.split('.').join() ) {
      return 1;
    }
    if (a.date.split('.').join() < b.date.split('.').join()) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });
}