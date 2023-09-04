const { faker } = require('@faker-js/faker');
const axios = require('axios')

const carTypes = [
    {
        brand: 'Hyundai',
        model: 'Tucson',
        type: 'SUV',
        passengers: 7,
        pricePerDay: 180.00,
        image: "https://th.bing.com/th/id/R.5ed33ef2a931b94674e48544ea9dfa0d?rik=jf2PHaELGho%2bcA&pid=ImgRaw&r=0"
    },
    {
        brand: 'Mercedes Benz',
        model: 'ML 350',
        type: 'SUV',
        passengers: 8,
        pricePerDay: 210.00,
        image: "https://res.cloudinary.com/daiztctac/image/upload/v1693829158/g2f6vvrw1d86tqjonr70.png"
    },
    {
        brand: 'Mercedes Benz',
        model: 'A-Class',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 205.00,
        image: "https://res.cloudinary.com/daiztctac/image/upload/v1693828820/svlnibspwjirmfgg1cgc.png"
    },
    {
        brand: 'Toyota',
        model: 'Hilux',
        type: 'pickup',
        passengers: 4,
        pricePerDay: 180.00,
        image: "https://res.cloudinary.com/daiztctac/image/upload/v1693828678/apuuaeahl2oi13o8yojk.png"
    },
    {
        brand: 'Chevrolet',
        model: 'Camaro',
        type: 'sport',
        passengers: 2,
        pricePerDay: 240.00,
        image: "https://freepngimg.com/thumb/chevrolet/32550-4-chevrolet-camaro-transparent.png"
    },
    {
        brand: 'Jeep',
        model: 'Grand Cherokee',
        type: 'SUV',
        passengers: 6,
        pricePerDay: 205.00,
        image: "https://th.bing.com/th/id/R.bf5fd5a4b04fe359494885e5cfbbebc1?rik=1E4hdPBrMfy4mg&pid=ImgRaw&r=0"
    },
    {
        brand: 'Chevrolet',
        model: 'Prisma',
        type: 'compact',
        passengers: 4,
        pricePerDay: 142.00,
        image: "https://res.cloudinary.com/daiztctac/image/upload/v1693835070/bjvci3s6cyqxmsexoptr.png"
    },
    {
        brand: 'Volkswagen',
        model: 'Gol',
        type: 'compact',
        passengers: 4,
        pricePerDay: 155.00,
        image: "https://freewayservicos.com/wp-content/uploads/2016/08/3.png"
    },
    {
        brand: 'Honda',
        model: 'Civic',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 160.00,
        image: "https://th.bing.com/th/id/R.e71327056a0b3fd72772d82185a7161c?rik=fh9bNZmRZZFA8Q&pid=ImgRaw&r=0"
    },
    {
        brand: 'Volkswagen',
        model: 'Polo',
        type: 'compact',
        passengers: 4,
        pricePerDay: 158.00,
        image: "https://res.cloudinary.com/daiztctac/image/upload/v1693827462/tscc0cmxzezedxggxkvy.png"
    },
    {
        brand: 'Tesla',
        model: 'Model S',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 260.00,
        image: "https://www.vippng.com/png/full/44-440423_model-png.png"
    },
    {
        brand: 'Fiat',
        model: 'Argo',
        type: 'compact',
        passengers: 4,
        pricePerDay: 136.00,
        image: "https://motormania.com.mx/wp-content/uploads/2021/08/fiat-trekking-2021-cover_rojo.png"
    },
    {
        brand: 'Mercedes Benz',
        model: 'S 550',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 194.00,
        image: "https://www.pikpng.com/pngl/b/31-313751_2017-mercedes-benz-s-class-s550-sedan-cover.png"
    },
    {
        brand: 'Ford',
        model: 'Ka',
        type: 'compact',
        passengers: 4,
        pricePerDay: 130.00,
        image: "https://res.cloudinary.com/daiztctac/image/upload/v1693826529/vrq2ujlylie6gecixr0b.png"
    },
    {
        brand: 'Audi',
        model: 'A7',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 212.00,
        image: "https://res.cloudinary.com/daiztctac/image/upload/v1693826124/ipctogghnbilgx4yuwau.png"
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        type: 'sport',
        passengers: 4,
        pricePerDay: 238.00,
        image: "https://res.cloudinary.com/daiztctac/image/upload/v1693825965/athm36fjdzbjjut6t9r1.png"
    },
    {
        brand: 'Mercedes Benz',
        model: 'C-Class',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 198.00,
        image: "https://www.motortrend.com/uploads/sites/10/2019/10/2020-mercedes-benz-c-class-c300-sedan-angular-front.png"
    },
    {
        brand: 'Volkswagen',
        model: 'Passat',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 170.00,
        image: "https://www.motortrend.com/uploads/sites/10/2016/10/2017-volkswagen-passat-sel-premium-auto-sedan-angular-front.png"
    },
    {
        brand: 'Audi',
        model: 'A6',
        type: 'sedan',
        passengers: 4,
        pricePerDay: 175.00,
        image: "https://res.cloudinary.com/daiztctac/image/upload/v1693825167/p4gyfhmy4cpikskrhsvs.png"
    },
    {
        brand: 'Nissan',
        model: 'Kicks',
        type: 'compact',
        passengers: 4,
        pricePerDay: 152.00,
        image: "https://inventory-dmg.assets-cdk.com/ChromeColorMatch/us/TRANSPARENT_cc_2020NIS260017_01_1280_XAH.png"
    },
    {
        brand: 'Toyota',
        model: 'Yaris',
        type: 'compact',
        passengers: 4,
        pricePerDay: 140.00,
        image: "https://www.motortrend.com/uploads/sites/10/2016/12/2017-toyota-yaris-se-5-door-hatchback-angular-front.png"
    },
]

const years = [2021, 2022, 2023] 
const transmissions = ['manual', 'automatic']
const fuels = ['gas', 'diesel']

const loadCars = async (nCars) => {
    const load = []
    while (load.length < nCars) {
        const carTypeIndex = Math.floor(Math.random()*carTypes.length)
        const newCar = { ...carTypes[carTypeIndex] }
        newCar.domain = faker.vehicle.vrm()
        newCar.year = years[Math.floor(Math.random()*years.length)]
        newCar.transmission = transmissions[Math.floor(Math.random()*transmissions.length)]
        if (newCar.brand === 'Tesla') {
            newCar.fuel = 'electric'
        } else if (newCar.model === 'Camaro' || newCar.model === 'Mustang') {
            newCar.fuel = 'gas'
        } else {
            newCar.fuel = fuels[Math.floor(Math.random()*fuels.length)]
        }
        newCar.availability = true
        load.push(newCar)
    }
    const { data } = await axios.post('http://localhost:3001/vehicles', load)
    if (data.length) {
        console.log(data[0])
    }
}
// execution of load(nCars)
loadCars(200)
////////////

//module.exports = loadCars;