//import styled from "styled-components";
import './Navbar1.css';
// import Home from './components/page/Home'
import {Button, Card, Col, Row, Navbar,Container,CardGroup} from 'react-bootstrap';
import img4 from './img4.png';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img5 from './img5.png';
import img6 from './img6.png';


// const Container = styled("div")`
//     width: 100vw;
//     height: auto;
//     background-color: #af48ca;

//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;

//     position: relative;
// `

// const Title = styled("h1")`
//     margin: 0;
//     white-space: nowrap;
//     font-family: 'Bungee', cursive;
// `

// const Link = styled("a")`
//     font-size: 1.5rem;
//     margin: 1rem;
//     cursor: pointer;
//     color: initial;
//     text-decoration: none;

//     position: absolute;
//     right: 5%;

//     @media (max-width: 700px) {
//         position: initial;
//     }
// `

const Navbar1 = () => {
    return (
      
        
        <div >
     
     <div>
  <Navbar expand="lg" variant="dark" bg="dark">
    
    
      {/* <Navbar.Brand > <img
          alt=""
          src="data:image/png;base64,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"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{ '                   ' }  </Navbar.Brand> */}
      
      <Button  className='btn btn-success'>connect wallet</Button>
    
    
  </Navbar>
  </div>
 
  
  <div className='App-header'>
  <Container >
    <Row>
      <Col style={{paddingTop: '5%',paddingBottom: '10%'}}> 
      
      <Card style={{ width: '100%',textAlign: 'center',backgroundColor:' #282c34',paddingTop: '2%' }}>
  <Card.Body>
    <Card.Title>Discover, find,</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Sell extraordinary</Card.Subtitle>
   
    <h1>potato Nfts</h1>
    <Card.Text className="text-lg">
     
     Marketplace for potato character collections 
     non fungible token NFTs
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>
      </Col>

   <Col>
      <div className='App-header' >
    <div className='App-card'>
   
  <Card style={{ width: '20rem',display: 'flex',backgroundColor: '#234'}}    >
  <Card.Img variant="top" src={img6}/>
  <Card.Body>
    <Card.Title style={{textDecorationColor:'re#234'}}> Potato Devil</Card.Title>
    <Card.Text>
      
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
   </Card>
  </div>
  </div>
  </Col> 
  </Row>
  </Container>
  </div>
  <div className='App-header1'>
    <div className='App-card1'>
      <Container>
    <Card style={{ width: '100%',textAlign: 'center', backgroundColor: ' #282c34'}}>
  <Card.Body>
    <Card.Title className="mb-2 text-muted"> Collections</Card.Title>
    {/* <Card.Subtitle className="mb-2 text-muted">Sell extraordinary</Card.Subtitle> */}
    <h4>Are you curious to our</h4>
    <h1 > potato Nfts</h1>
    <Card.Text className="text-lg">
     
     Marketplace for potato character collections 
     non fungible token NFTs
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>
</Container>
    </div >
    </div>
    <div className='App-header1' >
      
  <CardGroup style={{marginBlock: '3% ',paddingLeft: '4%', paddingRight: '4%'}} >
  <Card style={{ width: '100%',textAlign: 'center', backgroundColor: ' #282c34',paddingLeft: '1%',paddingRight:'1%'}}> 
    <Card.Img variant="top" src={img4} />
    <Card.Body style={{backgroundColor:' #234'}}>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card  style={{ width: '100%',textAlign: 'center', backgroundColor: ' #282c34',paddingLeft: '1%',paddingRight:'1%'}}>
    <Card.Img variant="top" src={img1} />
    <Card.Body style={{backgroundColor:' #234'}}>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card  style={{ width: '100%',textAlign: 'center', backgroundColor: ' #282c34',paddingLeft: '1%',paddingRight:'1%'}}>
    <Card.Img variant="top" src={img2} />
    <Card.Body style={{backgroundColor:' #234'}}>
      <Card.Title style={{backgroundColor:' #234'}}>Card title</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card  style={{ width: '100%',textAlign: 'center', backgroundColor: ' #282c34',paddingLeft: '1%',paddingRight:'1%'}}>
    <Card.Img variant="top" src={img3} />
    <Card.Body style={{backgroundColor:' #234'}}>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
  </div>
   <div className='App-header1'>
     <div className='App-card1'>
  <Card style={{ width: '100%',textAlign: 'center',backgroundColor: '#282c34'}}>
  <Card.Body>
    <Card.Title>Benifits</Card.Title>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    {/* <Card.Link href="#">Card Link</Card.Link> */}
    <Card.Link href="#"><h1>What make us different?</h1></Card.Link>
  </Card.Body>
</Card>
<div className='App-header'>
  <Container >
    <Row>
      <Col>
      
      <Card style={{ width: '100%',textAlign: 'center',backgroundColor:' #282c34' }}>
  <Card.Body>
    <Card.Title >Explosive and rare tokens</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
   
    
    <Card.Text className="mb-2 text-muted">
     
     
     With a hard limit at 10,00 and all copyrights held by the buyer
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>
      </Col>

   <Col>
     
   
    <Card style={{ width: '100%',textAlign: 'center',backgroundColor:' #282c34' }}>
  <Card.Body>
    <Card.Title >Community</Card.Title>
    {/* <Card.Subtitle className="mb-2 text-muted">Sell extraordinary</Card.Subtitle>
   
    <h1>potato Nfts</h1> */}
    <Card.Text className="mb-2 text-muted">
     
     Join our community to trade, play and display your pets and arts
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>
  
  </Col> 
  <Col>
    
   
    <Card style={{ width: '100%',textAlign: 'center',backgroundColor:' #282c34' }}>
  <Card.Body>
    <Card.Title>Members only space</Card.Title>
    
    <Card.Text className="mb-2 text-muted">
     
      Discussion board where you can have a say in the future of nft
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>
  
  </Col> 
  </Row>
  </Container>
  </div>
  </div>
  <div className='App-header'>
  <Container >
    <Row>
      <Col>
      
      <Card style={{ width: '100%',textAlign: 'center', backgroundColor: ' #282c34'}}>
  <   Card.Body><h1>Introduce</h1></Card.Body>
     </Card>
     <Card style={{ width: '100%',textAlign: 'center', backgroundColor: ' #282c34'}}>
     <Card.Body>
       <h1>Ourselves</h1>
       </Card.Body>
     </Card>
     
      </Col>

   <Col>
      <div className='App-header'>
    <div className='App-card'>
   
    <>
  <Card  style={{ width: '100%', backgroundColor: ' #282c34'}}>
    <Card.Header></Card.Header>
    <Card.Body>
      <Card.Title>High-quality rendered and equally</Card.Title>
      <Card.Title>
          affordable artwork
        
      </Card.Title>
    </Card.Body>
  </Card>
  <br />

  <Card  style={{ width: '100%', backgroundColor: ' #282c34'}}>
    <Card.Header></Card.Header>
    <Card.Body>
      <Card.Title>Learning,researching, and studying the crypto market daily</Card.Title>
      
    </Card.Body>
  </Card>
  <br />

  <Card  style={{ width: '100%', backgroundColor: ' #282c34'}}>
    <Card.Header></Card.Header>
    <Card.Body>
      <Card.Title>The immersive world of NFTs with all its collectors & projects</Card.Title>
     
    </Card.Body>
  </Card>
  <br />

  <Card  style={{ width: '100%', backgroundColor: ' #282c34'}}>
    <Card.Header></Card.Header>
    <Card.Body>
      <Card.Title>Slow,steady and natural community growth within the Lazy Lounge Club</Card.Title>
      
    </Card.Body>
  </Card>
  <br />

  
</>

  </div>
  </div>
  </Col> 
  
  </Row>
  
  </Container>
  </div>
  </div>
  <div className='App-header' >
    <div className='App-card'>
   
  <Card style={{ width: '20rem',display: 'flex',backgroundColor: '#234',textAlign: 'center'}}    >
  <Card.Img variant="top" src={img4}/>
  
  <Card.Body>
    {/* <Card.Title style={{textDecorationColor:'re#234'}}> minting</Card.Title> */}
   
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
  
   </Card>
   
  </div>
  </div>
  <div  >
    <div className='app1'>
   
 
    <Button  className='btn9 btn-success'>minting</Button>
  
   
  </div>
  </div>
  </div>
    )

}

export default Navbar1;