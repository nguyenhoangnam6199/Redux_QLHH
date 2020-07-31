var initialState = [
    {
        id: 1,
        name: 'Iphone 6s',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2020/1/7/637139916609041371_6s-pl-vang-1.png',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone 7s',
        image: 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-600x600.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 1000,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Iphone 8s',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600-600x600.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 1500,
        inventory: 20,
        rating: 5
    },
    {
        id: 4,
        name: 'SAMSUNG GALAXY A7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/111107/samsung-galaxy-a7-2018-blue-600x600.jpg',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 1500,
        inventory: 20,
        rating: 2
    },
    {
        id: 5,
        name: 'OPPO F1S',
        image: 'https://www.bachkhoashop.com/images/201703/goods_img/1510-g-dien-thoai-oppo-f1s-bachkhoashop.jpg',
        description: 'Sản phẩm do Oppo sản xuất',
        price: 1500,
        inventory: 20,
        rating: 1
    },
    {
        id: 6,
        name: 'REALME 3',
        image: 'https://media3.scdn.vn/img3/2019/7_22/e6yvNs_simg_de2fe0_500x500_maxb.jpg',
        description: 'Sản phẩm do RealMe sản xuất',
        price: 1500,
        inventory: 20,
        rating: 3
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
};

export default products;