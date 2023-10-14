export function getSessionProductIndex(arr, id) {
  let repeatedIndex;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element.id === id) {
      repeatedIndex = i;
    }
  }

  return repeatedIndex;
}

