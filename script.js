document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const modal = document.querySelector('.overlay');
    const modalImg = document.querySelector('.hd-image');
    const captionText = document.querySelector('.caption');
    const closeBtn = document.querySelector('.close');

    const images = [
        { src: 'Images/D1.jpg', hdSrc: 'Images/hd/D1.jpg', caption: 'Image 1' },
        { src: 'Images/D2.jpg', hdSrc: 'Images/hd/D2.jpg', caption: 'Image 2' },
        { src: 'Images/D3.jpg', hdSrc: 'Images/hd/D3.jpg', caption: 'Image 3' },
        { src: 'Images/D4.jpg', hdSrc: 'Images/hd/D4.jpg', caption: 'Image 4' },
        { src: 'Images/D5.jpeg', hdSrc: 'Images/hd/D5.jpeg', caption: 'Image 5' },
        { src: 'Images/D6.jpg', hdSrc: 'Images/hd/D6.jpg', caption: 'Image 6' },
        { src: 'Images/D7.jpg', hdSrc: 'Images/hd/D7.jpg', caption: 'Image 7' },
        { src: 'Images/D8.jpg', hdSrc: 'Images/hd/D8.jpg', caption: 'Image 8' },
        { src: 'Images/D9.jpg', hdSrc: 'Images/hd/D9.jpg', caption: 'Image 9' },
        { src: 'Images/D10.jpg', hdSrc: 'Images/hd/D10.jpg', caption: 'Image 10' },
        { src: 'Images/D11.jpg', hdSrc: 'Images/hd/D11.jpg', caption: 'Image 11' },
        { src: 'Images/D12.jpg', hdSrc: 'Images/hd/D12.jpg', caption: 'Image 12' },
        { src: 'Images/D13.jpeg', hdSrc: 'Images/hd/D13.jpeg', caption: 'Image 13' },
        { src: 'Images/D14.jpg', hdSrc: 'Images/hd/D14.jpg', caption: 'Image 14' },
        { src: 'Images/D15.jpeg', hdSrc: 'Images/hd/D15.jpeg', caption: 'Image 15' },
        { src: 'Images/D16.jpeg', hdSrc: 'Images/hd/D16.jpeg', caption: 'Image 16' },
        { src: 'Images/D17.jpg', hdSrc: 'Images/hd/D17.jpg', caption: 'Image 17' },
        { src: 'Images/D18.jpeg', hdSrc: 'Images/hd/D18.jpeg', caption: 'Image 18' },
        { src: 'Images/D19.jpg', hdSrc: 'Images/hd/D19.jpg', caption: 'Image 19' },
        { src: 'Images/D20.jpg', hdSrc: 'Images/hd/D20.jpg', caption: 'Image 20' },
        { src: 'Images/D21.jpg', hdSrc: 'Images/hd/D21.jpg', caption: 'Image 21' },
        { src: 'Images/D22.jpeg', hdSrc: 'Images/hd/D22.jpeg', caption: 'Image 22' },
        { src: 'Images/D23.jpg', hdSrc: 'Images/hd/D23.jpg', caption: 'Image 23' }
    ];

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.dataset.hdSrc = image.hdSrc;
        imgElement.alt = image.caption;
        galleryContainer.appendChild(imgElement);
    });

    galleryContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            modal.style.display = 'flex';
            modalImg.src = event.target.dataset.hdSrc;
            captionText.innerText = event.target.alt;
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
