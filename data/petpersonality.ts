interface Input {
  type: string
  name: string
  placeholder: string
  options: string[]
}

export type Personality = Record<string, Input>

const personality: Personality = {
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
        'Busy', 'Lazy', 'Goofy', 'Gorgeous', 'Brat', 'Loyal', 'Playful', 'Adventurous', 'Foodie', 'Snorer', 'Crazy', 'Smarty pants', 'Main character', 'Floofy',
      ],
    },
}

export default personality