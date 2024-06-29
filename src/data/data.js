const data = [
    {
        userId: 1,
        data: {
            "my-day": [
                {
                    id: 1,
                    priority: 'high',
                    deadline: '6/20/2024',
                    status: 'done',
                    description: 'Learn React'
                },
                {
                    id: 2,
                    priority: 'normal',
                    deadline: '6/20/2024',
                    status: 'inprogress',
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
                    status: 'done',
                    description: 'Learn TypeScript'
                },
                {
                    id: 5,
                    priority: 'normal',
                    deadline: '6/22/2024',
                    status: 'inprogress',
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
                    status: 'done',
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
                            status: 'inprogress',
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
                            status: 'done',
                            description: 'Learn Dagger'
                        },
                        {
                            id: 5,
                            priority: 'low',
                            deadline: '6/22/2024',
                            status: 'inprogress',
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
                            status: 'done',
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
                            status: 'inprogress',
                            description: 'Learn HTML'
                        },
                        {
                            id: 2,
                            priority: 'normal',
                            deadline: '6/20/2024',
                            status: 'done',
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
                            status: 'done',
                            description: 'Learn Vue.js'
                        },
                        {
                            id: 6,
                            priority: 'high',
                            deadline: '6/25/2024',
                            status: 'inprogress',
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
                            status: 'done',
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
                            status: 'inprogress',
                            description: 'Learn XSS'
                        },
                        {
                            id: 3,
                            priority: 'low',
                            deadline: '6/20/2024',
                            status: 'done',
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
                            status: 'inprogress',
                            description: 'Learn OAuth'
                        },
                        {
                            id: 6,
                            priority: 'high',
                            deadline: '6/27/2024',
                            status: 'done',
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
                            status: 'inprogress',
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
                            status: 'inprogress',
                            description: 'Learn Pandas'
                        },
                        {
                            id: 3,
                            priority: 'low',
                            deadline: '6/29/2024',
                            status: 'done',
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
                            deadline: '7/01/2024',
                            status: 'inprogress',
                            description: 'Learn Data Visualization'
                        },
                        {
                            id: 6,
                            priority: 'high',
                            deadline: '7/02/2024',
                            status: 'done',
                            description: 'Learn TensorFlow'
                        }
                    ]
                }
            ]
        }
    },
    {
        userId: 2,
        data: {
            "my-day": [
                {
                    id: 1,
                    priority: 'high',
                    deadline: '6/20/2024',
                    status: 'todo',
                    description: 'Complete project report'
                },
                {
                    id: 2,
                    priority: 'normal',
                    deadline: '6/21/2024',
                    status: 'inprogress',
                    description: 'Prepare for meeting'
                },
                {
                    id: 3,
                    priority: 'low',
                    deadline: '6/22/2024',
                    status: 'done',
                    description: 'Organize workspace'
                },
                {
                    id: 4,
                    priority: 'high',
                    deadline: '6/23/2024',
                    status: 'inprogress',
                    description: 'Update software'
                }
            ],
            "custom": [
                {
                    id: 1,
                    name: "Fitness Goals",
                    tasks: [
                        {
                            id: 1,
                            priority: 'high',
                            deadline: '6/20/2024',
                            status: 'todo',
                            description: 'Morning run'
                        },
                        {
                            id: 2,
                            priority: 'normal',
                            deadline: '6/21/2024',
                            status: 'done',
                            description: 'Yoga session'
                        },
                        {
                            id: 3,
                            priority: 'low',
                            deadline: '6/22/2024',
                            status: 'inprogress',
                            description: 'Strength training'
                        },
                        {
                            id: 4,
                            priority: 'high',
                            deadline: '6/23/2024',
                            status: 'todo',
                            description: 'Swim practice'
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Cooking Recipes",
                    tasks: [
                        {
                            id: 1,
                            priority: 'high',
                            deadline: '6/20/2024',
                            status: 'done',
                            description: 'Bake a cake'
                        },
                        {
                            id: 2,
                            priority: 'normal',
                            deadline: '6/21/2024',
                            status: 'inprogress',
                            description: 'Cook pasta'
                        },
                        {
                            id: 3,
                            priority: 'low',
                            deadline: '6/22/2024',
                            status: 'todo',
                            description: 'Make salad'
                        },
                        {
                            id: 4,
                            priority: 'high',
                            deadline: '6/23/2024',
                            status: 'done',
                            description: 'Grill chicken'
                        }
                    ]
                }
            ]
        }
    }
];

export default data;
