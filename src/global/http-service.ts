import { set, get } from 'idb-keyval';

const fetchCoverages = () => {
  return [
    {id: "2", name: "Mechanical Breakdown Protection", contract: "95456", plan: "5 Star", coverage: "60 Months, 130,000 km", payment: "Monthly, $65.00", expiration: "2 Oct 2018", issuingDealer: "Abbotsford KIA", claimed: 500},
    //{id: "2", name: "Appearance Protection", contract: "95232", plan: "3 Star", coverage: "48 Months, 100,000 km", payment: "Monthly, $55.00", expiration: "23 Sept 2018", issuingDealer: "Abbotsford KIA", claimed: 700},
  ];
}

const fetchClaims = () => {
  return [
    {id: 1, coverageId: "1", claimNumber: "449675", components: "Roadside for Appearance, Curb scuff - wheel", date: "20 Jun 2018", totalCost: 500},
    {id: 2, coverageId: "2", claimNumber: "449683", components: "Roadside for Appearance, Curb scuff - wheel", date: "17 May 2018", totalCost: 500},
    {id: 3, coverageId: "2", claimNumber: "449687", components: "Sykes roadside", date: "3 Jan 2018", totalCost: 200}
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

export { fetchBeers, doSearch, getBeerDetail, fetchStyles, fetchCoverages, fetchClaims };