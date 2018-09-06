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
  description: string,
  value: number,
  used: number,
  balance: number,
  claimed: number
}

export interface Claim {
  id: string,
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
