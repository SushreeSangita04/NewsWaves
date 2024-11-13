import "./style.css";
import image from '../assets/download.jpeg';
const NewsItem = ({title,description,src,url}) => {
  return (
    
    <div className="card bg-dark text-light mb-3 d-inline-block mx-4 my-3 text-justify col-md-4 xx" style={{maxWidth:"345px"}}>
    <img src={src?src:image} style={{height:"200px",width:"100%"}} className="card-img-top" alt="Unavailable"/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):""}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  </div>
 
  )
}

export default NewsItem 
