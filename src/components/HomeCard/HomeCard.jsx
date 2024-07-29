function HomeCard({ img, title, description}) {
    return (

        <div className="feature-item">
          <img src={img} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>{description}</p>
        </div>
    )
}

export default HomeCard