export const FadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,   // Start with opacity 0 (invisible)
            scale: 0.8,   // Start smaller (scaled down)
        },
        show: {
            opacity: 1,   // Fade to full opacity
            scale: 1,     // Scale to normal size (zoom in)
            transition: {
                type: 'spring',   // Use spring for smoothness
                duration: 5.5,     // Adjust duration for smooth zoom   // Add delay for when the animation starts
                stiffness: 300,    // Adjust stiffness for smooth bounce
                damping: 25,       // Adjust damping for bounce effect
            }
        }
    };
};
