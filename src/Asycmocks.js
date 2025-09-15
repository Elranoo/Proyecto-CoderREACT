const misProductos = [
    {id: "1", nombre: "Shot 8016 RGB", precio: 40, img:"../public/img/shot8016.jpg", idCat: "gabinetes", stock: 5},
    {id: "2", nombre: "MSI MAG Forge M100A", precio: 65, img:"../public/img/msimagforge.jpg", idCat: "gabinetes", stock: 7},
    {id: "3", nombre: "Antec AX20", precio: 70, img:"../public/img/antecax20.png", idCat: "gabinetes", stock: 11},
    {id: "4", nombre: "Antec CX800", precio: 120, img:"../public/img/anteccx800.png", idCat: "gabinetes", stock: 4},
    {id: "5", nombre: "Cooler Master MasterBox 520", precio: 90, img:"../public/img/coolermaster520.jpg", idCat: "gabinetes", stock: 25},
    {id: "6", nombre: "Cougar Archon", precio: 95, img:"../public/img/cougararchon.jpg", idCat: "gabinetes", stock: 18},
    {id: "7", nombre: "Cougar Duo Face", precio: 105, img:"../public/img/cougarduoface.jpg", idCat: "gabinetes", stock: 14},
    {id: "8", nombre: "Intel i3 14100f", precio: 169, img:"../public/img/i3.jpg", idCat: "procesadores", stock: 20},
    {id: "9", nombre: "Intel i5 14400f", precio: 199, img:"../public/img/i5.jpeg", idCat: "procesadores", stock: 13},
    {id: "10", nombre: "Intel i7 14700f", precio: 310, img:"../public/img/i7.jpg", idCat: "procesadores", stock: 10},
    {id: "11", nombre: "Intel i9 14900f", precio: 499, img:"../public/img/i9.jpg", idCat: "procesadores", stock: 7},
    {id: "12", nombre: "Intel Ultra 5 245kf", precio: 249, img:"../public/img/ultra5.jpg", idCat: "procesadores", stock: 15},
    {id: "13", nombre: "Intel Ultra 7 265kf", precio: 349, img:"../public/img/ultra7.jpg", idCat: "procesadores", stock: 12},
    {id: "14", nombre: "Intel Ultra 9 285kf", precio: 499, img:"../public/img/ultra9.jpg", idCat: "procesadores", stock: 8},
    {id: "15", nombre: "ASUS PRIME H510M-F R", precio: 85, img:"../public/img/asusprimeh510mfr.jpg", idCat: "motherboards", stock: 8},
    {id: "16", nombre: "GIGABYTE H610M", precio: 110, img:"../public/img/gigabyteh610m.png", idCat: "motherboards", stock: 6},
    {id: "17", nombre: "MSI PRO B760M-E", precio: 150, img:"../public/img/msiprob760me.jpg", idCat: "motherboards", stock: 12},
    {id: "18", nombre: "GIGABYTE B760M K", precio: 155, img:"../public/img/gigabyteb760mk.jpg", idCat: "motherboards", stock: 30},
    {id: "19", nombre: "ASUS PRIME Z790-P", precio: 170, img:"../public/img/asusprimez790p.jpg", idCat: "motherboards", stock: 22},
    {id: "20", nombre: "GIGABYTE Z790 S", precio: 185, img:"../public/img/gigabytez790s.jpg", idCat: "motherboards", stock: 16},
    {id: "21", nombre: "GIGABYTE B860M K", precio: 199, img:"../public/img/gigabyteb860mk.jpg", idCat: "motherboards", stock: 19},
    {id: "22", nombre: "Hiksemi 8gb", precio: 45, img:"../public/img/hiksemi16gb.png", idCat: "memorias", stock: 40},
    {id: "23", nombre: "Hiksemi ARMOR 8gb", precio: 50, img:"../public/img/hiksemihsarmor8gb.jpg", idCat: "memorias", stock: 35},
    {id: "24", nombre: "Kingston Fury Beast 8gb", precio: 65, img:"../public/img/kingstonefurybeast8gb.jpg", idCat: "memorias", stock: 28},
    {id: "25", nombre: "Kingston Fury Beast RGB 8gb", precio: 95, img:"../public/img/kingstonefurybeastrgb8gb2.jpg", idCat: "memorias", stock: 24},
    {id: "26", nombre: "Hiksemi FUTURE RGB 8gb", precio: 99, img:"../public/img/hiksemifuturergb8gb.jpg", idCat: "memorias", stock: 15},
    {id: "27", nombre: "Kingston Fury Beast RGB 8gb", precio: 105, img:"../public/img/kingstonefurybeastrgb8gb.jpg", idCat: "memorias", stock: 10},
    {id: "28", nombre: "Kingston Renegade RGB 8gb", precio: 115, img:"../public/img/kingstonefuryrenegadergb8gb.jpg", idCat: "memorias", stock: 12},
    {id: "29", nombre: "MSI RTX 3050 LP", precio: 465, img:"../public/img/msirtx3050.jpg", idCat: "graficas", stock: 15},
    {id: "30", nombre: "MSI RTX 5050", precio: 525, img:"../public/img/msirtx5050.png", idCat: "graficas", stock: 9},
    {id: "31", nombre: "MSI RTX 4060", precio: 550, img:"../public/img/msirtx4060.jpg", idCat: "graficas", stock: 7},
    {id: "32", nombre: "GIGABYTE RTX 5060", precio: 720, img:"../public/img/gigabytertx5060.jpg", idCat: "graficas", stock: 5},
    {id: "33", nombre: "MSI RTX 4070", precio: 775, img:"../public/img/msirtx4070.png", idCat: "graficas", stock: 4},
    {id: "34", nombre: "Palit RTX 5070", precio: 950, img:"../public/img/palitrtx5070.jpg", idCat: "graficas", stock: 3},
    {id: "35", nombre: "GIGABYTE RTX 5080", precio: 1150, img:"../public/img/gigabytertx5080.jpg", idCat: "graficas", stock: 2},


]

export const getProductos = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        },2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const producto = misProductos.find(item=> item.id === id)
            resolve(producto)
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        }, 100)
    })
}