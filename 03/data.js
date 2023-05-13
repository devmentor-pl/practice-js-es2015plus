export const files = [
    {
        'name': 'img1.jpg',
        'size': {
            length: 215,
        }
    },
    {
        'name': 'img2.jpg',
        'size': {
            length: 145,
            unit: 'KB',
        }
    },
    {
        'name': 'img3.jpg',
        'size': {
            length: 14,
            unit: 'MB',
        }
    },
    {
        'name': 'img4.jpg',
        'size': {
            length: 0.9,
            unit: 'GB',
        }
    }
];

export const onBytes = [
    {
        unit: 'B',
        conversionFactor: 1,
    },
    {
        unit: 'KB',
        conversionFactor: 1024,
    },
    {
        unit: 'MB',
        conversionFactor: 1048576,
    },
    {
        unit: 'GB',
        conversionFactor: 1073741824,
    },
    
]