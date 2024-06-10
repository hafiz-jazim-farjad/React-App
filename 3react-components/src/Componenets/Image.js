function Image({ width, height, imageUrls }) {
    let urls = imageUrls.split(',')
    return (
        <>
            {urls.map((e) => (
                <img width={width} height={height} src={e.trim()} style={{ objectFit: "cover" }} />
            ))}
            {/* trim() sy spacing khatam hoti hy urls me sy */}
        </>
    );
}

export default Image;