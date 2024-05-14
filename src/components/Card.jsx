export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`../src/assets/${props.coverImg}`} className="card-img" alt="Katie Zaferes"/>
            <div className="card-stats">
                <img src={`../src/assets/${props.stats.star}`} className="card-star" alt="star icon"/>
                <span>{props.stats.rating}</span>
                <span className="card-rating">({props.stats.reviewCount}) •</span>
                <span className="card-rating">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="card-price">From ${props.price}</span> / person</p>
        </div>
    )
}