import React from 'react';
import Layout from '../layouts';
import { StaticImage } from 'gatsby-plugin-image';

import './styles.css';
import { TAGS } from '../components/tag';
import NewsCard from '../components/newsCard';

export default function Home() {
  return (
    <Layout>
      <div className='hero with-margin'>
        <div className='cube-medium green' style={{ transform: 'rotate(15deg)', top: '40%', left: '8%' }} />
        <div className='cube-medium purple' style={{ transform: 'rotate(15deg)', top: '44%', left: '18%' }} />
        <div className='cube-small red' style={{ transform: 'rotate(34deg)', top: '55%', left: '10%' }} />
        <div className='cube-small blue' style={{ transform: 'rotate(196deg)', top: '70%', left: '14%' }} />
        <div className='cube-big blue' style={{ transform: 'rotate(40deg)', bottom: '-0.5%', left: '11.5%' }} />
        <div className='cube-medium purple' style={{ transform: 'rotate(16deg)', top: '28%', right: '10%' }} />
        <div className='cube-small blue' style={{ transform: 'rotate(-20deg)', top: '34%', right: '7%' }} />
        <div className='cube-medium green' style={{ transform: 'rotate(-35deg)', top: '72%', right: '6%' }} />
        <StaticImage className='planet' src='../images/planet.svg' alt='rotating planet' />
        <div className='hero-text-container'>
          <h1>Une communauté de passionnés, unis pour répandre la techforgood</h1>
          <button>En savoir plus</button>
        </div>
      </div>
      <div className='news-container'>
        <div className='news-header with-margin'>
          <h2>Nos dernières actualités</h2>
          <button className='tertiary'>Voir tous</button>
        </div>
        <div className='news-scroller no-scrollbar'>
          {news.map((item, i) => (
            <NewsCard {...item} />
          ))}
          <div className='news-card news-see-other'>
            <button>Accéder aux autres articles</button>
          </div>
        </div>
      </div>
      <div className='presentation with-margin'>
        <div className='cube-small blue' style={{ transform: 'rotate(15deg)', top: '3%', left: '2%' }} />
        <div className='cube-small red' style={{ transform: 'rotate(-20deg)', top: '6%', left: '12%' }} />
        <div className='cube-medium purple' style={{ transform: 'rotate(34deg)', top: '11%', left: '6%' }} />
        <div className='cube-medium red' style={{ transform: 'rotate(196deg)', top: '9%', left: '73%' }} />
        <div className='cube-small blue' style={{ transform: 'rotate(40deg)', top: '5%', left: '85%' }} />
        <div className='cube-small green' style={{ transform: 'rotate(16deg)', top: '77%', right: '2%' }} />
        <div className='cube-medium red' style={{ transform: 'rotate(-20deg)', top: '92%', right: '8%' }} />
        <div className='presentation-text'>
          <h2>Societech c'est :</h2>
          <div className='presentation-content'>
            <div className='presentation-item'>
              <h3>Une communauté de jeunes engagés 🤝</h3>
              <p>
                Intéressés par les valeurs du techforgood et voulant entreprendre ou tout simplement s’informer et partager autour de cette
                problématiques
              </p>
            </div>
            <div className='presentation-item'>
              <h3>Des évènements réguliers 🎉</h3>
              <p>
                En ligne ou en présentiel afin de prendre part à des débats et ateliers autour de thèmes comme l’éco-conception,
                l’éco-développement, les bonnes pratiques écologiques etc.
              </p>
            </div>
            <div className='presentation-item'>
              <h3>Un média engagé 🌏</h3>
              <p>
                Présent sur le site societech et sur Instagram afin de vous partager toutes les dernières actualités techforgood et vous
                ouvrir la vision sur les entreprises 2.0
              </p>
            </div>
          </div>
        </div>
        <StaticImage height={453} width={384} src='../images/presentation.png' alt='presentation image' />
      </div>
      <div className='join-us with-margin'>
        <h2>Rejoins le mouvement societech !</h2>
        <div className='join-us-content'>
          <StaticImage className='head head2 small' src='../images/heads/head2.png' width={73} height={73} />
          <StaticImage className='head head3' src='../images/heads/head3.png' width={80} height={80} />
          <StaticImage className='head head5 small' src='../images/heads/head5.png' width={80} height={80} />
          <StaticImage className='head head6' src='../images/heads/head6.png' width={80} height={80} />
          <StaticImage className='head head8 small' src='../images/heads/head8.png' width={80} height={80} />
          <div className='join-us-card-background'>
            <StaticImage className='head head1 small' src='../images/heads/head1.png' width={73} height={73} />
            <StaticImage className='head head4' src='../images/heads/head4.png' width={80} height={80} />
            <StaticImage className='head head7' src='../images/heads/head7.png' width={80} height={80} />
            <StaticImage className='head head9' src='../images/heads/head9.png' width={80} height={80} />
            <div className='join-us-card-content'>
              <h4>Rejoins la communauté 👋🏼 </h4>
              <p>Afin de partager autour de la techforgood et de l’entreprenariat qui fait du bien à la planète !</p>
              <StaticImage className='heart' src='../images/heart.png' width={186} height={157} />
              <button className='with-icon' onClick={() => window.open('https://www.google.com', '_blank')}>
                <StaticImage objectFit='contain' src='../images/brands/discord.svg' alt='discord' />
                Rejoins-nous !
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='discover with-margin'>
        <div className='discover-text'>
          <h2>Découvre nos événements</h2>
          <p className='discover-intro'>
            Nous organisons régulièrement des ateliers, évènements ainsi que des débats avec des sujets bien variés autour de la techforgood
            comme :
          </p>
          <ul>
            <li className='semibold'>Lancer son business dans la techforgood 🚀</li>
            <li className='semibold'>Le Développement éco-responsable 🌏</li>
            <li className='semibold'>Débat : “Jusqu’où pouvons nous pousser les limites de l’éco-conception? 💡</li>
          </ul>
          <p className='semibold'>Et plein d’autres sujets... ✌🏻</p>
          <button>Nos prochains événements</button>
        </div>
        <StaticImage height={480} width={467} src='../images/discover.png' alt='discover image' />
        <div className='cube-medium red' style={{ transform: 'rotate(15deg)', top: '8%', left: '54%' }} />
        <div className='cube-small blue' style={{ transform: 'rotate(-20deg)', top: '23%', left: '58%' }} />
        <div className='cube-small green' style={{ transform: 'rotate(34deg)', top: '42%', left: '56%' }} />
        <div className='cube-medium purple' style={{ transform: 'rotate(196deg)', top: '35%', right: '6%' }} />
        <div className='cube-small blue' style={{ transform: 'rotate(40deg)', top: '40%', right: '8%' }} />
        <div className='cube-small green' style={{ transform: 'rotate(16deg)', top: '77%', right: '12%' }} />
        <div className='cube-medium red' style={{ transform: 'rotate(-20deg)', top: '84%', right: '18%' }} />
      </div>
      <div className='figures with-margin'>
        <h2>Et en chiffres, ça donne quoi? </h2>
        <div className='figures-cards'>
          {figures.map((card, i) => (
            <div className='figures-card'>
              <div>
                <p className='bigNumber' style={{ color: card.color }}>
                  {card.number}
                </p>
                <p className='title'>{card.title}</p>
                <p className='description'>{card.description}</p>
              </div>
              <button className='secondary' onClick={() => window.open(card.button.link)}>
                {card.button.text}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='partners with-margin'>
        <h2>Des partenaires engagés</h2>
        <p>
          Nos partenaires nous aident dans la mise en place d’ateliers et accompagnent les membres societech souhaitant entreprendre dans la
          techforgood.
        </p>
        <div className='partners-grid'>
          <div className='partner'>
            <StaticImage src='../images/partners/delta.png' alt='delta festival' />
          </div>
          <div className='partner'>
            <StaticImage src='../images/partners/devid.png' alt='dev-id' />
          </div>
          <div className='partner'>
            <StaticImage src='../images/partners/gojob.png' alt='go job' />
          </div>
          <div className='partner'>
            <StaticImage src='../images/partners/ekoha.png' alt='ekoha' />
          </div>
          <div className='partner'>
            <StaticImage src='../images/partners/teeneo.png' alt='teeneo' />
          </div>
          <div className='partner'>
            <StaticImage src='../images/partners/crocos.png' alt='crocos go digital' />
          </div>
        </div>
      </div>
    </Layout>
  );
}

const news = [
  {
    title: 'Les robots pour lutter contre la solitude des personnes âgées? Societech décrypte pour vous.',
    tags: [TAGS.TECH_FOR_GOOD, TAGS.ECOLOGY],
    image: '../../images/news/image1.png',
    author: {
      name: 'Samuel Trouchaud',
      role: 'Président Societech',
      avatar: '../../images/avatar.png',
    },
    date: '05/03/2022',
  },
  {
    title: 'Protéger les arbres tout en naviguant sur internet ? Découvrez Écosia ...',
    tags: [TAGS.TECH_FOR_GOOD, TAGS.ECOLOGY],
    image: '../../images/news/image2.png',
    author: {
      name: 'Samuel Trouchaud',
      role: 'Président Societech',
      avatar: '../../images/avatar.png',
    },
    date: '23/02/2022',
  },
  {
    title: 'Numérique responsable : l’Europe vote une résolution historique ',
    tags: [TAGS.TECH_FOR_GOOD, TAGS.ECOLOGY],
    image: '../../images/news/image3.png',
    author: {
      name: 'Samuel Trouchaud',
      role: 'Président Societech',
      avatar: '../../images/avatar.png',
    },
    date: '18/02/2022',
  },
  {
    title: 'Les robots pour lutter contre la solitude des personnes âgées? Societech décrypte pour vous.',
    tags: [TAGS.TECH_FOR_GOOD, TAGS.ECOLOGY],
    image: '../../images/news/image4.png',
    author: {
      name: 'Samuel Trouchaud',
      role: 'Président Societech',
      avatar: '../../images/avatar.png',
    },
    date: '18/01/2022',
  },
];

const figures = [
  {
    number: 52,
    color: '#93F6D9',
    title: 'Arbres plantés 🌳',
    description: 'Pour compenser l’empreinte de notre site, nous plantons un arbre pour 50 visites !',
    button: {
      text: 'Voir le site partenaire',
      link: '',
    },
  },
  {
    number: 200,
    color: '#FFADC1',
    title: 'Articles écrits 🚀',
    description: 'Nos bénévoles ont déjà écrit plus de 200 articles informatifs spécialement pour vous !',
    button: {
      text: 'Accéder au blog',
      link: '',
    },
  },
  {
    number: 12,
    color: '#F0D4A9',
    title: 'Partenaires 🤝',
    description: 'Actuellement, Societech dispose déjà de 12 partenaires : Entreprises, associations...',
    button: {
      text: 'Voir nos partenaires',
      link: '',
    },
  },
  {
    number: 128,
    color: '#C8A9F0',
    title: 'Membres ✨',
    description: 'Nous sommes déjà 128 membres sur notre communauté Discord, Rejoins nous !',
    button: {
      text: 'Rejoindre le Discord',
      link: '',
    },
  },
];
