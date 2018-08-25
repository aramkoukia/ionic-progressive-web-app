import { set, get } from 'idb-keyval';

const fetchCoverages = () => {
  return [
    {id: "1", name: "coverage 1", description: "", value:0, balance:0, used:0},
    {id: "2", name: "coverage 2", description: "", value:0, balance:0, used:0},
  ];
}

const fetchBeers = async (page: number, style: number = 1) => {
  const key = '0ebd6396901832ee0176a008410ef5d9';
  const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers?key=${key}&p=${page}&styleId=${style}`;

  // return cached data first
  const cachedData = await get('cachedBeerData');
  if (cachedData) {
    return cachedData;
  }

  const response = await fetch(url);
  const data = await response.json();
  await set('cachedBeerData', data.data);

  return data.data;
}

const fetchStyles = () => {
  const key = '0ebd6396901832ee0176a008410ef5d9';
  const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/styles?key=${key}`;

  return fetch(url).then((res) => {
    return res.json()
  }).then((data) => {
    return data.data;
  })
}

const doSearch = (searchTerm: string) => {
  const key = '0ebd6396901832ee0176a008410ef5d9';
  const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?key=${key}&q=${searchTerm}&type=beer`;

  return fetch(url).then((res) => {
    return res.json()
  }).then((data) => {
    return data.data;
  })
}

const getBeerDetail = (id: string) => {
  const key = '0ebd6396901832ee0176a008410ef5d9';
  const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/${id}?key=${key}`;

  return fetch(url).then((res) => {
    return res.json()
  }).then((data) => {
    return data.data;
  })
}

export { fetchBeers, doSearch, getBeerDetail, fetchStyles, fetchCoverages };