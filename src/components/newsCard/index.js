import React from 'react';
import './styles.css';
import { StaticImage } from 'gatsby-plugin-image';
import Tag from '../tag';

const getTime = date => {
  return 'Il y a une semaine';
};

const NewsCard = ({ title, tags, author, image, date }) => {
  return (
    <div className='news-card'>
      <StaticImage height={170} className='news-card-image' src='../../images/news/image1.png' alt={image + title} />
      <div className='news-content'>
        <div>
          <div className='news-tags'>
            {tags.map((tag, i) => (
              <Tag {...tag} />
            ))}
          </div>
          <h4>{title}</h4>
        </div>
        <div className='news-footer'>
          <div className='news-author'>
            <StaticImage src='../../images/avatar.png' />
            <div className='news-author-info'>
              <p className='tag'>{author.name}</p>
              <small>{author.role}</small>
            </div>
          </div>
          <div className='news-date'>
            <div />
            <small>{getTime(date)}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
