import ReactDom from 'react-dom';

const PortalModal = ({ children }) => {
    const Portal = document.getElementById('modal-root');

    return ReactDom.createPortal(children, Portal);
};

export default PortalModal; 