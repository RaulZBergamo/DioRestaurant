const Image = ( {className, src, width, height} ) => {
    return(
        <img 
            className={className}
            src={src}
            width={width}
            height={height}
        >
        
        </img>
    );
}

export default Image;