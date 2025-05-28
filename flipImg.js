var flipAndInvertImage = function(image) {
    for(const img of image) {
        for(let i = 0; i < img.length / 2; i++) {
            let curVal = img[i];
            img[i] = img[img.length - 1 - i];
            if(img[i] == 0) {
                img[i] = 1;
            } else {
                img[i] = 0;
            }
            img[img.length - 1 - i] = curVal;
            if (img[img.length - 1 - i] == 0) {
                img[img.length - 1 - i] = 1;
            } else {
                img[img.length - 1 - i] = 0;
            }
        }
    } 
    return image
};
