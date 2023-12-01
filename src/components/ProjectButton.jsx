import React from 'react';
import { Button } from '@material-tailwind/react';

const ProjectButton = ({ type, color, size, text, onClick, className }) => {
  return (
    <Button
      className={className}
      color={color}
      size={size}
      ripple={true}
      onClick={onClick}
      variant={type}
    >
      {text}
    </Button>
  );
};

export default ProjectButton;
