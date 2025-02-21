export const generatePhoneNumber = () => {
  const areaCode = Math.floor(100 + Math.random() * 900); // Random 3-digit area code
  const firstPart = Math.floor(100 + Math.random() * 900); // Random 3-digit first part
  const secondPart = Math.floor(1000 + Math.random() * 9000); // Random 4-digit second part
  return `+1-${areaCode}-${firstPart}-${secondPart}`; // Format: +1-XXX-XXX-XXXX
};
export const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    price: 25000,
    days: 5,
    state: "New",
    registered: true,
    exchangeable: false,
    image: "https://i.pravatar.cc/300",
    phone: generatePhoneNumber()
  },
  {
    id: 2,
    name: "Honda Civic",
    price: 22000,
    days: 10,
    state: "Used",
    registered: false,
    exchangeable: true,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 3,
    name: "Ford Mustang",
    price: 35000,
    days: 7,
    state: "New",
    registered: true,
    exchangeable: false,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 4,
    name: "Chevrolet Camaro",
    price: 38000,
    days: 15,
    state: "Used",
    registered: false,
    exchangeable: true,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 5,
    name: "Nissan Altima",
    price: 27000,
    days: 20,
    state: "New",
    registered: true,
    exchangeable: true,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 6,
    name: "BMW 3 Series",
    price: 45000,
    days: 3,
    state: "Used",
    registered: false,
    exchangeable: false,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 7,
    name: "Mercedes-Benz C-Class",
    price: 48000,
    days: 8,
    state: "New",
    registered: true,
    exchangeable: true,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 8,
    name: "Audi A4",
    price: 42000,
    days: 12,
    state: "Used",
    registered: false,
    exchangeable: false,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 9,
    name: "Tesla Model 3",
    price: 50000,
    days: 6,
    state: "New",
    registered: true,
    exchangeable: false,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 10,
    name: "Volkswagen Passat",
    price: 32000,
    days: 18,
    state: "Used",
    registered: false,
    exchangeable: true,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 11,
    name: "Hyundai Elantra",
    price: 23000,
    days: 2,
    state: "New",
    registered: true,
    exchangeable: true,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 12,
    name: "Kia Optima",
    price: 24000,
    days: 22,
    state: "Used",
    registered: false,
    exchangeable: false,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 13,
    name: "Subaru Outback",
    price: 34000,
    days: 14,
    state: "New",
    registered: true,
    exchangeable: true,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 14,
    name: "Mazda CX-5",
    price: 29000,
    days: 9,
    state: "Used",
    registered: false,
    exchangeable: false,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 15,
    name: "Lexus RX",
    price: 55000,
    days: 25,
    state: "New",
    registered: true,
    exchangeable: false,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 16,
    name: "Jeep Wrangler",
    price: 48000,
    days: 5,
    state: "Used",
    registered: false,
    exchangeable: true,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 17,
    name: "Dodge Charger",
    price: 37000,
    days: 7,
    state: "New",
    registered: true,
    exchangeable: false,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 18,
    name: "Chevrolet Tahoe",
    price: 58000,
    days: 11,
    state: "Used",
    registered: false,
    exchangeable: true,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 19,
    name: "Ford Explorer",
    price: 46000,
    days: 30,
    state: "New",
    registered: true,
    exchangeable: true,
    image: "https://i.pravatar.cc/300"
  },
  {
    id: 20,
    name: "Porsche 911",
    price: 120000,
    days: 16,
    state: "Used",
    registered: false,
    exchangeable: false,
    image: "https://i.pravatar.cc/300"
  }
];



