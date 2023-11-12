import imageOne from '../assets/home-1.png';
import imageTwo from '../assets/home-2.png';

export const featured = [
    {
        id: 1,
        image: imageOne,
        title: 'Google DevFest',
        description: 'Google DevFest is a community-led, Google supported, conference series for developers.',
        location: 'Online',
        date: '2023-05-12'
    },
    {
        id: 2,
        image: imageTwo,
        title: 'New Year Party',
        description: 'No better way to celebrate the new year than a fun party with friends and families at the beach',
        location: 'Lagos, Nigeria',
        date: '2024-01-01'
    },
    {
        id: 3,
        image: '../src/assets/home-1.png',
        title: 'Met Gala',
        description: 'The Met Gala, formally called the Costume Institute Gala or the Costume Institute Benefit and also known as the Met Ball, is an annual fundraising gala for the benefit of the Metropolitan Museum of Art',
        location: 'New York, USA',
        date: '2023-05-12'
    },
    {
        id: 4,
        image: '../src/assets/home-2.png',
        title: 'New Year Party',
        description: 'No better way to celebrate the new year than a fun party with friends and families at the beach',
        location: 'Lagos, Nigeria',
        date: '2024-01-01'
    },
    {
        id: 5,
        image: '../src/assets/home-2.png',
        title: 'New Year Party',
        description: 'No better way to celebrate the new year than a fun party with friends and families at the beach',
        location: 'Lagos, Nigeria',
        date: '2024-01-01'
    },
]

export const category = [
    {
        id: 1,
        type: 'music',
        icon: ''
    },
    {
        id: 2,
        type: 'sports',
        icon: ''
    },
    {
        id: 3,
        type: 'party',
        icon: ''
    },
    {
        id: 4,
        type: 'conference',
        icon: ''
    },
    {
        id: 5,
        type: 'festival',
        icon: ''
    },
    {
        id: 6,
        type: 'food',
        icon: ''
    },
    {
        id: 7,
        type: 'art',
        icon: ''
    },
    {
        id: 8,
        type: 'tech',
        icon: ''
    },
    {
        id: 9,
        type: 'others',
        icon: ''
    },

]

const myEvents = [];

function addEvent(event) {
    myEvents.push(event);
}

export { myEvents, addEvent };
