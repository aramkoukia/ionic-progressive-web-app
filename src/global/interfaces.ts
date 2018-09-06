export interface Beer {
  name: string,
  abv: string,
  ibu: string,
  description: string,
  id: string,
  labels: Labels
}

export interface Coverage {
  id: string,
  name: string,
  contract: string,
  plan: string,
  coverage: string,
  payment: string,
  expiration: string,
  issuingDealer: string,
  claimed: number
}

export interface Claim {
  id: number,
  coverageId: string,
  claimNumber: string,
  components: string,
  totalCost: number,
  date: string
}

export interface Labels {
  medium: string,
  large: string
}

export interface Bar {
  name: string,
  vicinity: string,
  id: string
  rating: number;
}
