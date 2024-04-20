/* eslint-disable prettier/prettier */
export type categoryProps = {
    image: string;
    name: string;
    label?: string;
}

export type CityProps = {
    name: string;
    label: string;
}

export const category: categoryProps[] = [
    {
        image: 'https://imgtr.ee/images/2024/04/16/af26ac42259d5adaa12df45c741b07d2.png',
        name: 'Motors',
        label: 'Motors',
    },
    {
        image: 'https://imgtr.ee/images/2024/04/16/369038e60b7f5b49f4125d8af79ae06b.png',
        name: 'Motorbicks',
        label: 'Motorbikes',
    },
    {
        image: 'https://imgtr.ee/images/2024/04/16/988d35a6e7e214a0eb68f205919ecffc.png',
        name: 'Showrooms',
        label: 'Showrooms',
    },
    {
        image: 'https://imgtr.ee/images/2024/04/16/c2750812c026480f04e061586b225b1e.png',
        name: 'Parts & Accessories',
        label: 'Parts & Accessories',
    },
    {
        image: 'https://imgtr.ee/images/2024/04/16/693ab0928354627194c24bdb305dcec8.png',
        name: 'Numbers Plates',
        label: 'Numbers Plates',
    },
    {
        image: 'https://imgtr.ee/images/2024/04/16/7811e72ca8eeaa6483f83360d985a0e0.png',
        name: 'Car Service',
        label: 'Car Service',
    },
    {
        image: 'https://imgtr.ee/images/2024/04/16/27a320bbbf6d481ba2330d9d4c1c0877.png',
        name: 'Car Wash',
        label: 'Car Wash',
    },
    {
        image: 'https://imgtr.ee/images/2024/04/16/c80127caae09d97f738a46c908809392.png',
        name: 'Car Recovery',
        label: 'Car Recovery',
    },
    {
        image: 'https://imgtr.ee/images/2024/04/16/9b02b9b0420482bda2f8f27412387c31.png',
        name: 'Boats',
        label: 'Boats',
    },
];

export const city:CityProps[] = [
    { label: 'Dubai', name: 'dubai' },
    { label: 'Abu Dhabi', name: 'abuDhabi' },
    { label: 'Sharjah', name: 'sharjah' },
    { label: 'Ajman', name: 'ajman' },
    { label: 'Fujairah', name: 'fujairah' },
    { label: 'Ras Al Khaimah', name: 'rasAlKhaimah' },
    { label: 'Umm Al Qaiwain', name: 'qaiwain' },
  ];

export const cardData = Array.from({ length: 5 }, (_, index) => ({
    key: index, // Use index as the key
    image: '../images/ToyotaPic.png',
    heading: 'Toyota Motors',
    description: '1.2 km away',
  }));
