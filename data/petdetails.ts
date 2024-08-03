interface Input {
  type: string
  name: string
  placeholder: string
  options: string[]
}

export type Details = Record<string, Input>

const details: Details = {
  'Pet name': {
    type: 'text',
    name: 'petName',
    placeholder: 'Pet name',
    options: [''],
  },
  'Date of birth': {
    type: 'date',
    name: 'dateOfBirth',
    placeholder: 'Age in years e.g. 2',
    options: [''],
  },
  Sex: {
    type: 'select',
    name: 'sex',
    placeholder: '',
    options: ['Female', 'Male', 'Other'],
  },
  Breed: {
    type: 'text',
    name: 'breed',
    placeholder: 'Gold fish',
    options: [''],
  },
  Species: {
    type: 'text',
    name: 'species',
    placeholder: 'Fish',
    options: [''],
  },
}

export default details
