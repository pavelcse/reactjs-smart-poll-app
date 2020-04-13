const polls = [
    {
        id: '45184',
        title: 'What is Your Favorite Programming Language',
        description: 'There are lot of popular programming languages available. ' +
            'Among them what is your favorite?',
        options: [
            { id: '12345', value: 'C Programming', vote: 0 },
            { id: '12346', value: 'Java', vote: 0 },
            { id: '12347', value: 'JavaScript', vote: 0 },
            { id: '12348', value: 'PHP', vote: 0 }
        ],
        created: new Date(),
        totalVote: 0,
        opinions: []
    },
    {
        id: '45114',
        title: 'Which Frontend Framework Do You Prefer?',
        description: 'There are lot of popular programming languages available. ' +
            'Among them what is your favorite?',
        options: [
            { id: '12344', value: 'Angular', vote: 0 },
            { id: '12340', value: 'React', vote: 0 },
            { id: '12341', value: 'Vue', vote: 0 }
        ],
        created: new Date(),
        totalVote: 0,
        opinions: []
    }
];

export default polls;