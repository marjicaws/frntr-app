export const sortAZ = (arr) =>
  arr.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });

export const sortZA = (arr) =>
  arr
    .sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    })
    .reverse();

export const priceLH = (arr) =>
  arr.sort((a, b) => parseInt(a.price.slice(1)) - parseInt(b.price.slice(1)));

export const priceHL = (arr) =>
  arr.sort((a, b) => parseInt(b.price.slice(1)) - parseInt(a.price.slice(1)));
