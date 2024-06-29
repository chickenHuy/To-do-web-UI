const data = [
    {
        userId: 1,
        data: {
            "my-day": [
                {
                    id: 1,
                    priority: 'high',
                    deadline: '6/20/2024',
                    status: 'todo',
                    description: 'Learn React'
                },
                {
                    id: 2,
                    priority: 'normal',
                    deadline: '6/20/2024',
                    status: 'todo',
                    description: 'Learn Redux'
                },
                {
                    id: 3,
                    priority: 'low',
                    deadline: '6/20/2024',
                    status: 'todo',
                    description: 'Learn Node.js'
                },
                {
                    id: 4,
                    priority: 'high',
                    deadline: '6/21/2024',
                    status: 'todo',
                    description: 'Learn TypeScript'
                },
                {
                    id: 5,
                    priority: 'normal',
                    deadline: '6/22/2024',
                    status: 'todo',
                    description: 'Learn GraphQL'
                },
                {
                    id: 6,
                    priority: 'low',
                    deadline: '6/23/2024',
                    status: 'todo',
                    description: 'Learn MongoDB'
                },
                {
                    id: 7,
                    priority: 'high',
                    deadline: '6/24/2024',
                    status: 'inprogress',
                    description: 'Build a new feature'
                },
                {
                    id: 8,
                    priority: 'normal',
                    deadline: '6/25/2024',
                    status: 'todo',
                    description: 'Write unit tests'
                },
                {
                    id: 9,
                    priority: 'low',
                    deadline: '6/26/2024',
                    status: 'todo',
                    description: 'Refactor codebase'
                },
                {
                    id: 10,
                    priority: 'high',
                    deadline: '6/27/2024',
                    status: 'todo',
                    description: 'Deploy to production'
                }
            ],
            "custom": [
                {
                    id: 1,
                    name: "Android Development",
                    tasks: [
                        {
                            id: 1,
                            priority: 'high',
                            deadline: '6/20/2024',
                            status: 'done',
                            description: 'Learn Java'
                        },
                        {
                            id: 2,
                            priority: 'normal',
                            deadline: '6/20/2024',
                            status: 'todo',
                            description: 'Learn Kotlin'
                        },
                        {
                            id: 3,
                            priority: 'low',
                            deadline: '6/20/2024',
                            status: 'todo',
                            description: 'Learn Android Studio'
                        },
                        {
                            id: 4,
                            priority: 'normal',
                            deadline: '6/21/2024',
                            status: 'todo',
                            description: 'Learn Dagger'
                        },
                        {
                            id: 5,
                            priority: 'low',
                            deadline: '6/22/2024',
                            status: 'todo',
                            description: 'Learn Jetpack Compose'
                        },
                        {
                            id: 6,
                            priority: 'high',
                            deadline: '6/23/2024',
                            status: 'inprogress',
                            description: 'Implement authentication'
                        },
                        {
                            id: 7,
                            priority: 'normal',
                            deadline: '6/24/2024',
                            status: 'todo',
                            description: 'Integrate Google Maps'
                        },
                        {
                            id: 8,
                            priority: 'low',
                            deadline: '6/25/2024',
                            status: 'todo',
                            description: 'Optimize performance'
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Web Development",
                    tasks: [
                        {
                            id: 1,
                            priority: 'high',
                            deadline: '6/20/2024',
                            status: 'todo',
                            description: 'Learn HTML'
                        },
                        {
                            id: 2,
                            priority: 'normal',
                            deadline: '6/20/2024',
                            status: 'todo',
                            description: 'Learn CSS'
                        },
                        {
                            id: 3,
                            priority: 'low',
                            deadline: '6/20/2024',
                            status: 'todo',
                            description: 'Learn JavaScript'
                        },
                        {
                            id: 4,
                            priority: 'high',
                            deadline: '6/23/2024',
                            status: 'todo',
                            description: 'Learn Angular'
                        },
                        {
                            id: 5,
                            priority: 'normal',
                            deadline: '6/24/2024',
                            status: 'todo',
                            description: 'Learn Vue.js'
                        },
                        {
                            id: 6,
                            priority: 'high',
                            deadline: '6/25/2024',
                            status: 'todo',
                            description: 'Learn Next.js'
                        },
                        {
                            id: 7,
                            priority: 'normal',
                            deadline: '6/26/2024',
                            status: 'todo',
                            description: 'Learn Tailwind CSS'
                        },
                        {
                            id: 8,
                            priority: 'low',
                            deadline: '6/27/2024',
                            status: 'todo',
                            description: 'Learn Sass'
                        }
                    ]
                },
                {
                    id: 3,
                    name: "Web Security",
                    tasks: [
                        {
                            id: 1,
                            priority: 'high',
                            deadline: '6/20/2024',
                            status: 'todo',
                            description: 'Learn SQL Injection'
                        },
                        {
                            id: 2,
                            priority: 'normal',
                            deadline: '6/20/2024',
                            status: 'todo',
                            description: 'Learn XSS'
                        },
                        {
                            id: 3,
                            priority: 'low',
                            deadline: '6/20/2024',
                            status: 'todo',
                            description: 'Learn CSRF'
                        },
                        {
                            id: 4,
                            priority: 'high',
                            deadline: '6/25/2024',
                            status: 'todo',
                            description: 'Learn HTTPS'
                        },
                        {
                            id: 5,
                            priority: 'normal',
                            deadline: '6/26/2024',
                            status: 'todo',
                            description: 'Learn OAuth'
                        },
                        {
                            id: 6,
                            priority: 'high',
                            deadline: '6/27/2024',
                            status: 'todo',
                            description: 'Learn JWT'
                        },
                        {
                            id: 7,
                            priority: 'normal',
                            deadline: '6/28/2024',
                            status: 'todo',
                            description: 'Learn SAML'
                        },
                        {
                            id: 8,
                            priority: 'low',
                            deadline: '6/29/2024',
                            status: 'todo',
                            description: 'Learn OpenID Connect'
                        }
                    ]
                },
                {
                    id: 4,
                    name: "Data Science",
                    tasks: [
                        {
                            id: 1,
                            priority: 'high',
                            deadline: '6/27/2024',
                            status: 'todo',
                            description: 'Learn Python'
                        },
                        {
                            id: 2,
                            priority: 'normal',
                            deadline: '6/28/2024',
                            status: 'todo',
                            description: 'Learn Pandas'
                        },
                        {
                            id: 3,
                            priority: 'low',
                            deadline: '6/29/2024',
                            status: 'todo',
                            description: 'Learn NumPy'
                        },
                        {
                            id: 4,
                            priority: 'high',
                            deadline: '6/30/2024',
                            status: 'todo',
                            description: 'Learn Machine Learning'
                        },
                        {
                            id: 5,
                            priority: 'normal',
                            deadline: '6/01/2024',
                            status: 'todo',
                            description: 'Learn Data Visualization'
                        },
                        {
                            id: 6,
                            priority: 'high',
                            deadline: '7/02/2024',
                            status: 'todo',
                            description: 'Learn TensorFlow'
                        },
                    ],
                },
            ],
        }
    },
    {
        userId: 2,
        data: {
            "my-day": [

            ],
            "custom": [

            ]
        }
    }
];

export default data;