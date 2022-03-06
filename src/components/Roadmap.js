import {Card} from 'react-bootstrap';
import img5 from './img5.png';
// import Navbar1 from './components/Navbar1';
// import Roadmap from './components/Roadmap';

// const Container = styled("div")`
//     width: 100vw;
//     height: auto;
//     margin-top: 100px;
//     padding: 20px;
//     background-color: #283c34;

//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `

// const ListItem = styled("li")`
//     margin: 10px;
// `

const Roadmap = () => {
    return (
        
           <div className='App-footer'>
  <Card style={{ width: '100%',textAlign: 'center', backgroundColor: ' #282c34'}}>
    <Card.Img variant="top" src={img5} />
    <Card.Body>
      <Card.Text>
        copyrights @ 2022-Allright reserved 
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
        
    )
}

export default Roadmap;