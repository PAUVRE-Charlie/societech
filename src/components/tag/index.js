import React from 'react';
import './styles.css';

const TAG_COLORS = {
  category1: '#0BFFB6',
  category2: '#F693BD',
  category3: '#c8a9f0',
};

export const TAGS = {
  TECH_FOR_GOOD: {
    name: 'TechForGood',
    color: TAG_COLORS.category3,
  },
  ECOLOGY: {
    name: 'Écologie',
    color: TAG_COLORS.category1,
  },
  SOCIAL: {
    name: 'Social',
    color: TAG_COLORS.category2,
  },
};

const Tag = ({ name, color }) => {
  return (
    <p className='tag-container tag' style={{ backgroundColor: color }}>
      #{name}
    </p>
  );
};

export default Tag;
