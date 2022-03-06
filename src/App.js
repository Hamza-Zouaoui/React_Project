
import { Button, Card, Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import car2 from "./assets/car2.jpg";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/car1.jpg"
      alt="car1"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={car2}
      alt="car2"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cullinan-magma-red-ext-4-1525901623.jpg"
      alt="car3"
    />
    
  </Carousel.Item>
</Carousel>
<br/>
<br/>
<br/>
<div className='Cards'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.challenges.fr/assets/img/2016/09/15/cover-r4x3w400-57da92d8571c5-15C1092_14_D284668.jpg" alt="Moteur thermique"/>
  <Card.Body>
    <Card.Title>Moteur thermique</Card.Title>
    <Card.Text>
      Un moteur thermique est un type de moteur, (comme le moteur d'une voiture) qui produit un mouvement macroscopique à partir de chaleur. 
    </Card.Text>
    <Button variant="primary">Lire la suite</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.vroomly.com/media/images/iStock-948704972.2e16d0ba.fill-1500x1000.jpegquality-60.jpg" alt="Boîte de vitesses" />
  <Card.Body>
    <Card.Title>Boîte de vitesses</Card.Title>
    <Card.Text>
      Une boîte de vitesses est un dispositif mécanique, et souvent mécatronique sur les véhicules récents.
    </Card.Text>
    <Button variant="primary">Lire la suite</Button>
  </Card.Body>
</Card>
</div>
<br/>
<br/>
<br/>
<div className='Cards'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.courroie-distribution.fr/media/images/iStock-866353964.width-500.jpg" alt="Embrayage" />
  <Card.Body>
    <Card.Title>Embrayage</Card.Title>
    <Card.Text>
      L'embrayage est un dispositif d'accouplement entre un arbre dit moteur et un autre dit récepteur.
    </Card.Text>
    <Button variant="primary">Lire la suite</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://media.ooreka.fr/public/image/disque-frein-ventile-main-13186753.jpg" alt="Frein" />
  <Card.Body>
    <Card.Title>Frein</Card.Title>
    <Card.Text>
      Un frein est un système permettant de ralentir, voire d'immobiliser, les pièces d'une machine ou d'un véhicule.
    </Card.Text>
    <Button variant="primary">Lire la suite</Button>
  </Card.Body>
</Card>
</div>
<br/>
<br/>
<br/>
<footer class="bg-light text-center text-lg-start">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Voiture électrique</h5>

        <p>
          Une voiture électrique est une automobile mue par un ou plusieurs moteurs électriques, généralement alimentés par une batterie d'accumulateurs voire une pile à hydrogène.
        </p>
      </div>

      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Automobile hybride</h5>

        <p>
          Une automobile hybride électrique est un véhicule automobile faisant appel à deux types d'énergie embarqués pour se mouvoir, dont l'un est de nature électrique. 
        </p>
      </div>
    </div>
  </div>

  <div class="text-center p-3">
    © 2020 Copyright: 
    <a class="text-dark" href="https://www.facebook.com/hamza.zouaoui.14/">Hamza Zouaoui</a>
  </div>
</footer>

    </div>
  );
}

export default App;
