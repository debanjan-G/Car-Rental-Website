const CARS = [
  {
    name: "Maruti Suzuki Alto",
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-ddb3a1ff6bf7fd5edf57a8e11d9ba010",
    seatingCapacity: "4",
    mileage: "22 km/l",
    modelYear: "2022",
    modelType: "Compact Car",
    hourlyRate: 150, // Approximate rate in INR
  },
  {
    name: "Maruti Suzuki WagonR",
    image:
      "https://www.varunmaruti.com/uploads/products/colors/wagonr-midnight-black.png",
    seatingCapacity: "5",
    mileage: "21 km/l",
    modelYear: "2023",
    modelType: "Compact Car",
    hourlyRate: 160, // Approximate rate in INR
  },
  {
    name: "Maruti Suzuki Swift",
    image: "https://pngimg.com/d/suzuki_PNG12294.png",
    seatingCapacity: "5",
    mileage: "23 km/l",
    modelYear: "2021",
    modelType: "Compact Car",
    hourlyRate: 170, // Approximate rate in INR
  },
  {
    name: "Maruti Suzuki Baleno",
    image:
      "https://images.carandbike.com/car-images/colors/maruti-suzuki/baleno/maruti-suzuki-baleno-celestial-blue.png?v=1645703898",
    seatingCapacity: "5",
    mileage: "22 km/l",
    modelYear: "2022",
    modelType: "Compact Car",
    hourlyRate: 180, // Approximate rate in INR
  },
  {
    name: "Hyundai i20",
    image: "https://pngimg.com/d/hyundai_PNG11239.png",
    seatingCapacity: "5",
    mileage: "20 km/l",
    modelYear: "2021",
    modelType: "Compact Car",
    hourlyRate: 190, // Approximate rate in INR
  },
  {
    name: "Hyundai Creta",
    image:
      "https://www.hyundai.com/content/dam/hyundai/id/id/images/local/hyundai-hadir-untukmu/creta.png",
    seatingCapacity: "5",
    mileage: "19 km/l",
    modelYear: "2023",
    modelType: "SUV",
    hourlyRate: 350, // Approximate rate in INR
  },
  {
    name: "Hyundai Verna",
    image: "https://www.pngmart.com/files/22/Hyundai-Verna-PNG-File.png",
    seatingCapacity: "5",
    mileage: "21 km/l",
    modelYear: "2022",
    modelType: "Sedan",
    hourlyRate: 300, // Approximate rate in INR
  },
  {
    name: "Tata Nexon",
    image:
      "https://tazaduniya.in/wp-content/uploads/2024/02/image-53-removebg-preview.png",
    seatingCapacity: "5",
    mileage: "17 km/l",
    modelYear: "2023",
    modelType: "SUV",
    hourlyRate: 320, // Approximate rate in INR
  },
  {
    name: "Tata Tiago",
    image: "https://ackodrive-assets.s3.amazonaws.com/media/test_pmag9TZ.png",
    seatingCapacity: "5",
    mileage: "23 km/l",
    modelYear: "2020",
    modelType: "Compact Car",
    hourlyRate: 140, // Approximate rate in INR
  },
  {
    name: "Tata Punch",
    image: "https://ackodrive-assets.s3.amazonaws.com/media/test_C9jRoZl.png",
    seatingCapacity: "5",
    mileage: "18 km/l",
    modelYear: "2022",
    modelType: "SUV",
    hourlyRate: 310, // Approximate rate in INR
  },
  {
    name: "Mahindra Scorpio",
    image:
      "https://www.pngkey.com/png/full/249-2499637_mahindra-scorpio-4x4-scorpio-car-black-colour-price.png ",
    seatingCapacity: "7",
    mileage: "15 km/l",
    modelYear: "2023",
    modelType: "SUV",
    hourlyRate: 400, // Approximate rate in INR
  },
  {
    name: "Mahindra Bolero",
    image:
      "https://5.imimg.com/data5/ND/HH/GLADMIN-64213965/mahindra-bolero-slx.png",
    seatingCapacity: "7",
    mileage: "15 km/l",
    modelYear: "2021",
    modelType: "SUV",
    hourlyRate: 380, // Approximate rate in INR
  },
  {
    name: "Mahindra XUV500",
    image:
      "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fcolors%2Fmahindra%2Fxuv500%2Fmahindra-xuv500-pearl-white.png%3Fv%3D1&w=750&q=75",
    seatingCapacity: "7",
    mileage: "14 km/l",
    modelYear: "2022",
    modelType: "SUV",
    hourlyRate: 420, // Approximate rate in INR
  },
  {
    name: "Honda City",
    image: "https://pngimg.com/d/honda_PNG10355.png",
    seatingCapacity: "5",
    mileage: "17 km/l",
    modelYear: "2023",
    modelType: "Sedan",
    hourlyRate: 280, // Approximate rate in INR
  },
  {
    name: "Honda Amaze",
    image:
      "https://www.pngarts.com/files/4/Honda-Amaze-Transparent-Background-PNG.png",
    seatingCapacity: "5",
    mileage: "18 km/l",
    modelYear: "2021",
    modelType: "Sedan",
    hourlyRate: 260, // Approximate rate in INR
  },
  {
    name: "Honda Civic",
    image:
      "https://freepngimg.com/save/31957-honda-civic-transparent-picture/550x450",
    seatingCapacity: "5",
    mileage: "17 km/l",
    modelYear: "2020",
    modelType: "Sedan",
    hourlyRate: 290, // Approximate rate in INR
  },
  {
    name: "Ford EcoSport",
    image:
      "https://www.vdm.ford.com/content/dam/vdm_ford/live/en_us/ford/nameplate/ecosport/2022/collections/cyp/assetChoosePathLeft.png",
    seatingCapacity: "5",
    mileage: "15 km/l",
    modelYear: "2022",
    modelType: "SUV",
    hourlyRate: 330, // Approximate rate in INR
  },
  {
    name: "Ford Endeavour",
    image:
      "https://static.vecteezy.com/system/resources/previews/017/281/530/original/ford-endeavour-top-model-1996cc-automatic-transmission-turbo-engine-10-speed-gear-free-png.png",
    seatingCapacity: "7",
    mileage: "12 km/l",
    modelYear: "2023",
    modelType: "SUV",
    hourlyRate: 500, // Approximate rate in INR
  },
];

export default CARS;
