import { createSlice } from "@reduxjs/toolkit";


const pushdataSLice = createSlice({
    name :'Push',
    initialState:{
        showData:[
            {
                id:1,
                name:"Asus-ROG XG49VQ",
                price: "$1,169",
                onstock: "Yes",
                img: "https://dlcdnwebimgs.asus.com/gain/EA5F4487-87F4-47AC-B06F-EC1C95C0E59E/w717/h525",
                specifications:"this is a product",
                product:"Monitor"
            },
            {
                id:2,
                name:"MSI G255F",
                price: "$195",
                onstock: "Out of Stock",
                img: "https://mudita.com.np/media/catalog/product/cache/036aa47742df3225beb764097d8b4fe8/m/s/msi-g255f-monitor-price-in-nepal.webp",
                specifications:"this is a product",
                product:"Monitor"
            },
            {
                id:3,
                name:"Sansui es-27x3 ",
                price: "$90",
                onstock: "Yes",
                img: "https://m.media-amazon.com/images/I/71KYyiUlMPL.jpg",
                specifications:"this is a product",
                product:"Monitor"
            },
            {
                id:4,
                name:"Asus-ROG Strix Scar 15",
                price: "$1950",
                onstock: "Yes",
                img: "https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/a/s/asus-rog-strix-scar-15-price-in-nepal.webp",
                specifications:"this is a product",
                product:"Laptop"
            },
            {
                id:5,
                name:"Acer-Nitro V 15",
                price: "$915",
                onstock: "Yes",
                img: "https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/a/c/acer-nitro-v-15-i5-4060-price-in-nepal.webp",
                specifications:"this is a product",
                product:"Laptop"
            },
            {
                id:6,
                name:"Lenovo Legion 5",
                price: "$1220",
                onstock: "1 left",
                img: "https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/l/e/lenovo-legion-16irx9-price-in-nepal_1.webp",
                specifications:"this is a product",
                product:"Laptop"
            },            
            {
                id:7,
                name:"Fantech WGC1 Venom",
                price: "$15",
                onstock: "2 Left",
                img: "https://fantech.ph/wp-content/uploads/2019/11/fantech-wgc1.jpg",
                specifications:"this is a product",
                product:"mouse"
            },            
            {
                id:8,
                name:"Red Magic Nubia",
                price: "$20",
                onstock: "Yes",
                img: "https://cdn.gadgetbytenepal.com/wp-content/uploads/2022/07/Nubia-RedMagic-Gaming-Keyboard.jpg",
                specifications:"this is a product",
                product:"mouse"
            },           
            {
                id:9,
                name:"Red Dragon Dagger-2",
                price: "$25",
                onstock: "No",
                img: "https://redragonadria.com/wp-content/uploads/2021/03/M715-1%E2%95%95%E2%96%92%E2%96%92%E2%95%9B.jpg",
                specifications:"this is a product",
                product:"mouse"
            },
            {
                id:10,
                name:"Ajazz AK820 MAX",
                price: "$90",
                onstock: "no",
                img: "https://backseatgaming.b-cdn.net/wp-content/uploads/2024/08/34.webp",
                specifications:"this is a product",
                product: "keyboard"
            },
            {
                id:11,
                name:"Fantech Maxfit-61 Frost",
                price: "$75",
                onstock: "yes",
                img: "https://gadgethousenepal.com/wp-content/uploads/2022/09/fc8d0299.png",
                specifications:"this is a product",
                product: "keyboard"
            },
            {
                id:12,
                name:"RedDragon K552",
                price: "$60",
                onstock: "no",
                img: "https://m.media-amazon.com/images/I/71FSIp+tDNL._AC_UF894,1000_QL80_.jpg",
                specifications:"this is a product",
                product: "keyboard"
            },

            
        ],
        
        searchedData:[]
    },
    reducers:{
        searched:(state,actions)=>{
            console.log(actions.payload)
            state.searchedData.push(actions.payload)
        }
    }

})
export const {searched}=pushdataSLice.actions
export default pushdataSLice.reducer