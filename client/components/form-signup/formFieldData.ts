export interface Fields {
  type: string
  name: string
  placeholder: string
  options: string[]
}

export type Step = Record<string, Fields>

export type Form = Record<string, Step>

const formFields: Form = {
  'Step 1': {
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
  },
  'Step 2': {
    Bio: {
      type: 'textarea',
      name: 'bio',
      placeholder: 'Share what makes your pet unique',
      options: ['5']
    },
    'Favourite food': {
      type: 'text',
      name: 'faveFood',
      placeholder: 'Anything!',
      options: ['']
    },
    Traits: {
      type: 'checkbox',
      name: 'traits',
      placeholder: '',
      options: [
        'Busy', 'Lazy', 'Goofy', 'Gorgeous', 'Brat', 'Loyal', 'Playful', 'Adventurous', 'Foodie', 'Snorer', 'Crazy', 'Floofy',
      ],
    },
  },
}

export default formFields
