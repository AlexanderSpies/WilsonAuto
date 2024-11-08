import { useEffect } from 'react';
import { Fade,Image } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

const FadingImage = ({ src, height, width, alt, ...rest }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.0, // Trigger when the entire image is visible
  });

  useEffect(() => {
    if (inView) {
      // Optionally, you can perform actions when the image is in view
    }
  }, [inView]);

  return (
    <Fade in={inView}>
      <Image
        ref={ref}
        src={src}
        alt={alt || 'Image'}      // Set alt text, default to 'Image'
        {...rest}
      />
    </Fade>
  );
};

export default FadingImage;
