const { faker } = require('@faker-js/faker');

const carTypes = [
    {
        brand: 'Hyundai',
        model: 'Tucson',
        type: 'SUV',
        passengers: 7,
        pricePerDay: 180.00,
        image: "https://w7.pngwing.com/pngs/1003/115/png-transparent-hyundai-motor-company-sport-utility-vehicle-hyundai-tucson-car-suv-cars-thumbnail.png"
    },
    {
        brand: 'Mercedes Benz',
        model: 'ML 350',
        type: 'SUV',
        passengers: 8,
        pricePerDay: 210.00,
        image: "https://w7.pngwing.com/pngs/38/708/png-transparent-car-mercedes-car-love-compact-car-vehicle-thumbnail.png"
    },
    {
        brand: 'Mercedes Benz',
        model: 'A-Class',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 205.00,
        image: "https://w7.pngwing.com/pngs/994/935/png-transparent-mercedes-benz-a-class-car-mercedes-benz-e-class-mercedes-benz-r-class-mercedes-compact-car-sedan-car-thumbnail.png"
    },
    {
        brand: 'Toyota',
        model: 'Hilux',
        type: 'pickup',
        passengers: 4,
        pricePerDay: 180.00,
        image: "https://w7.pngwing.com/pngs/1011/424/png-transparent-toyota-hilux-car-pickup-truck-ute-toyota-truck-car-pickup-truck-thumbnail.png"
    },
    {
        brand: 'Chevrolet',
        model: 'Camaro',
        type: 'sport',
        passengers: 2,
        pricePerDay: 240.00,
        image: "https://w7.pngwing.com/pngs/637/293/png-transparent-chevrolet-camaro-car-general-motors-chevrolet-tahoe-yellow-car-car-performance-car-vehicle-thumbnail.png"
    },
    {
        brand: 'Jeep',
        model: 'Grand Cherokee',
        type: 'SUV',
        passengers: 6,
        pricePerDay: 205.00,
        image: "https://w7.pngwing.com/pngs/295/665/png-transparent-black-jeep-grand-cherokee-suv-2017-jeep-grand-cherokee-2018-jeep-grand-cherokee-trackhawk-sport-utility-vehicle-black-jeep-grand-cherokee-car-vehicle-transport-rim-thumbnail.png"
    },
    {
        brand: 'Chevrolet',
        model: 'Prisma',
        type: 'compact',
        passengers: 4,
        pricePerDay: 142.00,
        image: "https://w7.pngwing.com/pngs/131/765/png-transparent-hyundai-car-chevrolet-prisma-sport-utility-vehicle-hyundai-compact-car-sedan-car-thumbnail.png"
    },
    {
        brand: 'Volkswagen',
        model: 'Gol',
        type: 'compact',
        passengers: 4,
        pricePerDay: 155.00,
        image: "https://w7.pngwing.com/pngs/522/870/png-transparent-volkswagen-gol-car-vw-saveiro-volkswagen-up-volkswagen-compact-car-sedan-car-thumbnail.png"
    },
    {
        brand: 'Honda',
        model: 'Civic',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 160.00,
        image: "https://w7.pngwing.com/pngs/801/997/png-transparent-2017-honda-civic-2018-honda-civic-honda-city-honda-today-honda-compact-car-glass-sedan-thumbnail.png"
    },
    {
        brand: 'Volkswagen',
        model: 'Polo',
        type: 'compact',
        passengers: 4,
        pricePerDay: 158.00,
        image: "https://w7.pngwing.com/pngs/74/513/png-transparent-volkswagen-polo-car-renault-symbol-price-volkswagen-compact-car-sedan-car-thumbnail.png"
    },
    {
        brand: 'Tesla',
        model: 'Model S',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 260.00,
        image: "https://w7.pngwing.com/pngs/113/493/png-transparent-2018-tesla-model-s-2017-tesla-model-s-tesla-model-3-2018-tesla-model-x-tesla-compact-car-sedan-car-thumbnail.png"
    },
    {
        brand: 'Fiat',
        model: 'Argo',
        type: 'compact',
        passengers: 4,
        pricePerDay: 136.00,
        image: "https://w7.pngwing.com/pngs/756/875/png-transparent-fiat-automobiles-car-fiat-strada-fiat-argo-fiat-mobi-car-compact-car-sedan-car-thumbnail.png"
    },
    {
        brand: 'Mercedes Benz',
        model: 'S 550',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 194.00,
        image: "https://w7.pngwing.com/pngs/223/220/png-transparent-mercedes-benz-e-class-luxury-vehicle-car-2014-mercedes-benz-s-class-mercedes-compact-car-sedan-car-thumbnail.png"
    },
    {
        brand: 'Ford',
        model: 'Ka',
        type: 'compact',
        passengers: 4,
        pricePerDay: 130.00,
        image: "https://w7.pngwing.com/pngs/429/827/png-transparent-ford-ka-ford-ranger-car-ford-focus-ford-compact-car-sedan-car-thumbnail.png"
    },
    {
        brand: 'Audi',
        model: 'A7',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 212.00,
        image: "https://w7.pngwing.com/pngs/884/336/png-transparent-audi-car-icon-audi-compact-car-sedan-image-file-formats-thumbnail.png"
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        type: 'sport',
        passengers: 4,
        pricePerDay: 238.00,
        image: "https://w7.pngwing.com/pngs/200/815/png-transparent-red-ford-mustang-coupe-2017-ford-mustang-2015-ford-mustang-2018-ford-mustang-car-ford-mustang-red-car-computer-wallpaper-car-performance-car-thumbnail.png"
    },
    {
        brand: 'Mercedes Benz',
        model: 'C-Class',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 198.00,
        image: "https://w7.pngwing.com/pngs/951/225/png-transparent-2017-mercedes-benz-c-class-car-mercedes-benz-e-class-mercedes-benz-c-300-at-mercedes-compact-car-sedan-convertible-thumbnail.png"
    },
    {
        brand: 'Volkswagen',
        model: 'Passat',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 170.00,
        image: "https://w7.pngwing.com/pngs/997/266/png-transparent-2018-volkswagen-passat-2016-volkswagen-passat-1-8t-se-car-volkswagen-jetta-2018-compact-car-sedan-volkswagen-thumbnail.png"
    },
    {
        brand: 'Audi',
        model: 'A6',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 175.00,
        image: "https://w7.pngwing.com/pngs/54/324/png-transparent-2018-audi-a6-mid-size-car-2017-audi-a4-audi-compact-car-sedan-car-thumbnail.png"
    },
    {
        brand: 'Nissan',
        model: 'Kicks',
        type: 'compact',
        passengers: 4,
        pricePerDay: 152.00,
        image: "https://w7.pngwing.com/pngs/1017/990/png-transparent-nissan-micra-car-2018-nissan-kicks-2018-nissan-sentra-nissan-compact-car-car-vehicle-thumbnail.png"
    },
    {
        brand: 'Toyota',
        model: 'Yaris',
        type: 'compact',
        passengers: 4,
        pricePerDay: 140.00,
        image: "https://w7.pngwing.com/pngs/451/127/png-transparent-2018-toyota-yaris-subcompact-car-2015-toyota-yaris-toyota-compact-car-sedan-car-thumbnail.png"
    },
    {
        brand: 'Toyota',
        model: 'Yaris',
        type: 'compact',
        passengers: 4,
        pricePerDay: 140.00,
        image: "https://w7.pngwing.com/pngs/451/127/png-transparent-2018-toyota-yaris-subcompact-car-2015-toyota-yaris-toyota-compact-car-sedan-car-thumbnail.png"
    },
]

const years = [2021, 2022, 2023] 
const transmissions = ['manual', 'automatic']
const fuels = ['gas', 'diesel']

const loadCars = ''