import React, { useEffect, useState } from 'react';
import { Box, Typography, TypographyProps } from '@mui/material';
import { motion } from 'framer-motion';
import { letterAnimation, staggerFast } from '../../lib/animations';

interface AnimatedTextProps extends Omit<TypographyProps, 'children'> {
  text: string;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 0, ...props }) => {
  const words = text.split(' ');

  return (
    <Typography
      component={motion.div}
      variants={staggerFast}
      initial="initial"
      animate="animate"
      {...props}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.3em',
        ...props.sx,
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          style={{ display: 'inline-block' }}
          custom={index}
        >
          {word}
        </motion.span>
      ))}
    </Typography>
  );
};

interface TypewriterProps extends Omit<TypographyProps, 'children'> {
  texts: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typeSpeed = 80,
  deleteSpeed = 50,
  pauseDuration = 2000,
  ...props
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts, typeSpeed, deleteSpeed, pauseDuration]);

  return (
    <Typography {...props}>
      {displayText}
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          width: '2px',
          height: '1em',
          backgroundColor: 'primary.main',
          ml: 0.5,
          animation: 'blink 1s step-end infinite',
          '@keyframes blink': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
        }}
      />
    </Typography>
  );
};
