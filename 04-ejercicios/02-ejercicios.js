/*
| Nombre                | Resolución | Relación |
| --------------------- | ---------- | -------- |
| HD (720p)             | 1280×720   | 16:9     |
| FHD (1080p)           | 1920×1080  | 16:9     |
| QHD / 1440p           | 2560×1440  | 16:9     |
| 4K UHD                | 3840×2160  | 16:9     |
| 8K UHD                | 7680×4320  | 16:9     |
*/

function resolucion(ancho, alto){

    if((ancho > 1280 && ancho < 1920) && (alto > 720 && alto < 1080)){
        console.log('HD')
    }else if((ancho > 1920 && ancho < 2560) && (alto > 1080 && alto < 1440)){
        console.log('FHD')
    }else if((ancho > 2560 && ancho < 3840) && (alto > 1440 && alto < 2160 )){
        console.log('QHD')
    }else if((ancho > 3840 && ancho < 7680) && (alto > 2160 && alto < 4320 )){
        console.log('4K UHD')
    }else if(ancho > 7680 && alto > 4320 ){
        console.log('8K UHD')
    }else{
        console.log('resolución invalida')
    }
}

resolucion(2000,1090);

