import { Card, CardBody, CardHeader, Container, Title } from './style'

const items = [
  {
    id: 1,
    name: "first project",
    description: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    images: [
      "https://www.maracanau.ce.gov.br/wp-content/uploads/2022/07/eb4b2961-9ba0-45a2-b7de-58a2a275f27c.jpg"
    ]
  },
  {
    id: 1,
    name: "first project",
    description: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    images: [
      "https://www.maracanau.ce.gov.br/wp-content/uploads/2022/07/eb4b2961-9ba0-45a2-b7de-58a2a275f27c.jpg"
    ]
  },
  {
    id: 1,
    name: "first project",
    description: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    images: [
      "https://www.maracanau.ce.gov.br/wp-content/uploads/2022/07/eb4b2961-9ba0-45a2-b7de-58a2a275f27c.jpg"
    ]
  },
  {
    id: 1,
    name: "first project",
    description: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    images: [
      "https://www.maracanau.ce.gov.br/wp-content/uploads/2022/07/eb4b2961-9ba0-45a2-b7de-58a2a275f27c.jpg"
    ]
  },
  {
    id: 1,
    name: "first project",
    description: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    images: [
      "https://www.maracanau.ce.gov.br/wp-content/uploads/2022/07/eb4b2961-9ba0-45a2-b7de-58a2a275f27c.jpg"
    ]
  },
]

const Holdings = () => {
  return (
    <Container>
      <Title>Participações</Title>
      {items.map((item, key) => (
        <Card key={key}>
          <CardHeader>
            <img src={item.images[0]} alt={item.name} />
          </CardHeader>
          <CardBody>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </CardBody>
        </Card>
      ))}
    </Container>
  )
}

export default Holdings