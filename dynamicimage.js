const olimImages = [
    {src: '../resources/List/Olimpiade Statistika List/1.png', startDate: '2023-08-01T00:00', endDate: '2023-09-16T23:59'},
    {src: '../resources/List/Olimpiade Statistika List/2.png', startDate: '2023-09-17T00:00', endDate: '2023-09-18T11:59'},
    {src: '../resources/List/Olimpiade Statistika List/3.png', startDate: '2023-09-18T12:00', endDate: '2023-09-18T23:59'},
    {src: '../resources/List/Olimpiade Statistika List/4.png', startDate: '2023-09-19T12:00', endDate: '2023-09-19T23:59'},
    {src: '../resources/List/Olimpiade Statistika List/5.png', startDate: '2023-09-20T00:00', endDate: '2023-09-22T13:59'},
    {src: '../resources/List/Olimpiade Statistika List/6.png', startDate: '2023-09-22T14:00', endDate: '2023-09-29T23:59'},
    {src: '../resources/List/Olimpiade Statistika List/7.png', startDate: '2023-09-30T00:00', endDate: '2023-09-30T12:04'},
    {src: '../resources/List/Olimpiade Statistika List/8.png', startDate: '2023-09-30T12:05', endDate: Infinity},
];

'2023-09-18T12:00'
const esaiImages = [
    {src: '../resources/List/Lomba Esai List/1.png', startDate: '2023-08-01T00:00', endDate: '2023-09-16T23:59'},
    {src: '../resources/List/Lomba Esai List/2.png', startDate: '2023-09-17T00:00', endDate: '2023-09-24T23:59'},
    {src: '../resources/List/Lomba Esai List/3.png', startDate: '2023-09-25T00:00', endDate: Infinity},
];

const infoImages = [
    {src: '../resources/List/Lomba Infografis List/1.png', startDate: '2023-08-01T00:00', endDate: '2023-09-16T23:59'},
    {src: '../resources/List/Lomba Infografis List/2.png', startDate: '2023-09-17T00:00', endDate: '2023-09-24T23:59'},
    {src: '../resources/List/Lomba Infografis List/3.png', startDate: '2023-09-25T00:00', endDate: Infinity},
];

function changeImageByDate(imageElementId, imageSet){
    const currentDate = new Date();
    
    for(const image of imageSet){
        const startDate = new Date(image.startDate);
        const endDate = new Date(image.endDate);
        
        if(currentDate >= startDate && currentDate <= endDate){
            const dynamicImage = document.getElementById(imageElementId);
            dynamicImage.src = image.src;
            break; 
        }
    }
}

changeImageByDate('timeline-olim-image', olimImages);
changeImageByDate('timeline-esai-image', esaiImages);
changeImageByDate('timeline-info-image', infoImages);

setInterval(function(){
    changeImageByDate('timeline-olim-image', olimImages);
    changeImageByDate('timeline-esai-image', esaiImages);
    changeImageByDate('timeline-info-image', infoImages);
}, 60 * 60 * 1000); 
