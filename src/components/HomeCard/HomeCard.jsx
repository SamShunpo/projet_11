function HomeCard({ img, title, description}) {
    return (

        <div class="feature-item">
          <img src={img} alt="Chat Icon" class="feature-icon" />
          <h3 class="feature-item-title">{title}</h3>
          <p>{description}</p>
        </div>
    )
}

export default HomeCard