import { MediaType } from "../enums/media-type.enum";


export const BRANDS = [
    {
        name: 'Nike',
        logo: 'nike.png',
        products: [
            {
                name: 'Nike Air Max 90',
                price: 120,
                description: 'The Nike Air Max 90 stays true to its OG roots with its iconic Waffle outsole, stitched overlays and classic, color-accented TPU plates. Fresh colors give a modern look while Max Air cushioning adds comfort to your journey.',
                variants: [40, 41, 42, 43, 44, 45],
                medias: [
                    {
                        path: 'nike-air-max-90-1.png',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'nike-air-max-90-2.jpg',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'nike-air-max-90-3.webp',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'nike-air-max-90-4.jpg',
                        type: MediaType.IMAGE
                    }
                ]
            },
            {
                name: 'Nike Air Force 1',
                price: 90,
                description: 'The Nike Air Force 1 is a classic sneaker. The shoe features a leather upper and a rubber sole. The shoe is available in a wide range of colors.',
                variants: [40, 42, 45],
                medias: [
                    {
                        path: 'nike-air-force-1-1.png',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'nike-air-force-1-2.webp',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'nike-air-force-1-3.jpg',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'nike-air-force-1-4.png',
                        type: MediaType.IMAGE
                    },
                ]
            }
        ]
    },
    {
        name: 'Adidas',
        logo: 'adidas.png',
        products: [
            {
                name: 'Adidas EQT Support 93/17',
                price: 120,
                description: 'The adidas EQT Support 93/17 is a modern reinterpretation of the classic EQT Support running shoes from the early 90s. The shoe features a boost sole for maximum comfort and a knit upper for a premium look.',
                variants: [40, 43, 45],
                medias: [
                    {
                        path: 'adidas-1.png',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'adidas-2.jpg',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'adidas-3.jpg',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'adidas-4.webp',
                        type: MediaType.IMAGE
                    }
                ]
            }, 
            {
                name: 'Adidas Japan R1',
                price: 80,
                description: 'The adidas Japan R1 is a modern reinterpretation of the classic NMD R1 running shoes. The shoe features a boost sole for maximum comfort and a knit upper for a premium look.',
                variants: [40, 42, 45],
                medias: [
                    {
                        path: 'adidas-superstar-1.png',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'adidas-superstar-2.jpg',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'adidas-superstar-3.jpg',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'adidas-superstar-4.webp',
                        type: MediaType.IMAGE
                    },
                ]
            }
        ]
    },
    {
        name: 'New Balance',
        logo: 'new-balance.png',
        products: [
            {
                name: 'New Balance Hanzo S',
                price: 60,
                description: 'The New Balance Hanzo S is a lightweight running shoe. The shoe features a breathable upper and a cushioned sole for maximum comfort. The shoe is available in a wide range of colors.',
                variants: [40, 42, 45],
                medias: [
                    {
                        path: 'nb-1.png',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'nb-2.jpg',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'nb-3.jpg',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'nb-4.jpeg',
                        type: MediaType.IMAGE
                    }
                ]
            },
            {
                name: 'New Balance 574',
                price: 80,
                description: 'The New Balance 574 is a classic sneaker. The shoe features a suede and mesh upper and a rubber sole. The shoe is available in a wide range of colors.',
                variants: [40, 42, 45],
                medias: [
                    {
                        path: 'new-balance-1.png',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'new-balance-2.jpg',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'new-balance-3.jpg',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'new-balance-4.webp',
                        type: MediaType.IMAGE
                    },
                ]
            }
        ]
    },
    {
        name: 'Converse',
        logo: 'converse.png',
        products: [
            {
                name: 'Converse Jack Purcell',
                price: 60,
                description: 'The Converse Jack Purcell is a classic sneaker. The shoe features a canvas upper and a rubber sole. The shoe is available in a wide range of colors.',
                variants: [40, 42, 45],
                medias: [
                    {
                        path: 'converse-1.png',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'converse-2.webp',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'converse-3.webp',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'converse-4.jpg',
                        type: MediaType.IMAGE
                    }
                ]
            },
            {
                name: 'Converse Chuck Taylor',
                price: 50,
                description: 'The Converse Chuck Taylor is a classic sneaker. The shoe features a canvas upper and a rubber sole. The shoe is available in a wide range of colors.',
                variants: [40, 42, 45],
                medias: [
                    {
                        path: 'converse-chuck-taylor-1.png',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'converse-chuck-taylor-2.jpg',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'converse-chuck-taylor-3.jpg',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'converse-chuck-taylor-4.jpg',
                        type: MediaType.IMAGE
                    }
                ]
            }
        ]
    },
    {
        name: 'Vans',
        logo: 'vans.png',
        products: [
            {
                name: 'Vans Old Skool',
                price: 60,
                description: 'The Vans Old Skool is a classic skate shoe. The shoe features a canvas upper and a rubber sole. The shoe is available in a wide range of colors.',
                variants: [39, 40, 42, 45],
                medias: [
                    {
                        path: 'vans-1.png',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'vans-2.webp',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'vans-3.webp',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'vans-4.webp',
                        type: MediaType.IMAGE
                    }
                ]
            },
            {
                name: 'Vans LPE',
                price: 50,
                description: 'The Vans LPE is a classic skate shoe. The shoe features a canvas upper and a rubber sole. The shoe is available in a wide range of colors.',
                variants: [40, 42, 45],
                medias: [
                    {
                        path: 'vans-lpe-1.png',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'vans-lpe-2.jpg',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'vans-lpe-3.webp',
                        type: MediaType.IMAGE
                    },
                    {
                        path: 'vans-lpe-4.webp',
                        type: MediaType.IMAGE
                    },
                ]
            }
        ]
    }
];