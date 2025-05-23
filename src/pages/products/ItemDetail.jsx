import { useParams } from 'react-router-dom';
import{Link} from 'react-router-dom'
function Productview() {
  const { id } = useParams();

  return (
    <div>
      <Link to="/products" className="backButton">Back to Products</Link>
      <h1>Item Detail</h1>
      <p>This is item with ID: {id}</p>
    </div>
  );
}

export default Productview;
