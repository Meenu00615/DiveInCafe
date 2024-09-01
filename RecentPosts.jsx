import React from 'react';

const BlogCard = ({ imgSrc, tag, description }) => (
  <div className="blog-card">
    <figure className="card-banner img-holder" style={{ '--width': 550, '--height': 660 }}>
      <img src={imgSrc} alt={tag} className="img-cover" loading="lazy" />
    </figure>
    <div className="card-content">
      <ul className="card-meta-list">
        <li>
          <a href="#" className="card-tag">{tag}</a>
        </li>
      </ul>
      <p className="card-text">
        {description}
      </p>
    </div>
  </div>
);

const RecentPosts = () => (
  <section className="section recent" aria-label="recent post">
    <div className="container">
      <div className="title-wrapper">
        <h4 className="h2 section-title">
          Ice Cream<strong className="strong"></strong>
        </h4>
      </div>

      <ul className="grid-list">
        <li>
          <BlogCard
            imgSrc="./Ice Cream/Vanila Ice Cream.png"
            tag="Vanilla Ice Cream"
            description="In a saucepan, heat 2 cups heavy cream and 1 cup whole milk with 1 vanilla bean (split and seeds scraped) until warm.
            In a bowl, whisk 4 egg yolks with ¾ cup sugar until pale.
            Slowly add the warm cream mixture to the eggs, then return to the saucepan and cook until thickened.
            Strain the mixture, chill, then churn in an ice cream maker."
          />
        </li>
        <li>
          <BlogCard
            imgSrc="./Ice Cream/Mango Ice Cream.png"
            tag="Mango"
            description="Puree 2 ripe mangoes with ½ cup sugar until smooth.
            Mix the mango puree with 2 cups heavy cream and 1 cup whole milk.
            Churn in an ice cream maker until creamy.
            Freeze for several hours before serving."
          />
        </li>
        <li>
          <BlogCard
            imgSrc="./Ice Cream/Chocolate Ice Cream.png"
            tag="Chocolate Ice Cream"
            description="In a saucepan, heat 2 cups heavy cream, 1 cup whole milk, and ½ cup sugar until warm.
            Whisk in ½ cup cocoa powder and 4 oz chopped dark chocolate until melted and smooth.
            In a separate bowl, whisk 4 egg yolks with ½ cup sugar until pale.
            Slowly add the warm chocolate mixture to the eggs, then return to the saucepan and cook until thickened.
            Strain the mixture, chill, then churn in an ice cream maker.
            Freeze for a few hours before serving."
          />
        </li>
      </ul>
    </div>
  </section>
);

export default RecentPosts;
