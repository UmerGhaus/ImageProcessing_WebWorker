// worker.js

self.onmessage = function (event) {
    const { imageData, filterType } = event.data;
    
    if (filterType === 'grayscale') {
        applyGrayscaleFilter(imageData);
    } else if (filterType === 'invert') {
        applyInvertFilter(imageData);
    }

    self.postMessage({ imageData: imageData });
};

function applyGrayscaleFilter(imageData) {
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const average = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = data[i + 1] = data[i + 2] = average;
    }
}

function applyInvertFilter(imageData) {
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
}
