import React from 'react';
import { Button } from '@material-tailwind/react';

const ProjectButton = ({ type, color, size, text, onClick }) => {
  return (
    <Button
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
