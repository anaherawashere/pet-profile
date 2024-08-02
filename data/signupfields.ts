interface Input {
  type: string
  name: string
  options: string[]
}

export type Fields = Record<string, Input>

const fields: Fields = {
    'Pet Name': {
      type: 'text',
      name: 'petName',
      options: ['']
    },
    Age: {
      type: 'text',
      name: 'age',
      options: ['']
    },
    Sex: {
      type: 'radio',
      name: 'sex',
      options: ['Female', 'Male', 'Other']
    },
    Breed: {
      type: 'text',
      name: 'breed',
      options: ['']
    },
    Species: {
      type: 'text',
      name: 'species',
      options: ['']
    },
    Traits: {
      type: 'checkbox',
      name: 'traits',
      options: [
        'Busy', 'Lazy', 'Goofy', 'Gorgeous', 'Independent', 'Loyal', 'Playful',
      ],
    },
    Bio: {
      type: 'textarea',
      name: 'bio',
      options: ['']
    },
    'Favourite food': {
      type: 'text',
      name: 'faveFood',
      options: ['']
    },
}

export default fields