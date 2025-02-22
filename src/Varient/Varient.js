export const FadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            x: direction === 'right' ? 100 : direction === 'left' ? -100 : 0,
            opacity: 0, // Make sure it's hidden

        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'tween',
                duration: 0.8,
                delay: delay,  // Fixed typo here
            }
            
        }
    };
};
