function index(array, n){
    if (array.length <= n) {
      return -1;
    } else {
      return array[n] ** n;
    }
  }