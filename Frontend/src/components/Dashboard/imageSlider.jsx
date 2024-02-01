import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="image-slider">
            <Carousel>
                {images.map((image, index) => (
                    <div key={index} onClick={() => openModal(index)}>
                        <img src={image} alt={`Image ${index}`} />
                    </div>
                ))}
            </Carousel>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="image-modal"
                overlayClassName="image-modal-overlay"
            >
                <img src={images[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} />
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default ImageSlider;
