import { Timeline } from "antd"
import { ClockCircleOutlined } from "@ant-design/icons"
import { Container, History, TimelineCss, Title } from "./style"
import { useEffect, useState } from "react"

const TimelinePage: React.FC = () => {

  var [width, setWidth] = useState(0)

  function handleResize() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    handleResize()
  }, [])

  return (
    <Container id="experiences">
      <Title>EXPERIÊNCIAS</Title>
      <Timeline
        mode={width < 765 ? "left" : "alternate"}
        className={TimelineCss()}
        items={[
          {
            children: (
              <History>
                <h3>Desenvolvedor Pleno Full-Stack</h3>
                <h4>Fabrica Info</h4>
                <h5>2023/Maio - Atualmente</h5>
                <p><i>Responsável pelo desenvolvimento e
                  manutenção de aplicações para plataformas web.</i></p>
              </History>
            ),
          },
          {
            children: (
              <History>
                <h3>Programador de Sistemas</h3>
                <h4>SME - Secretaria Municipal de Educação de Maracanaú</h4>
                <h5>2021/Mar - Atualmente</h5>
                <p><i>Responsável pelo levantamento requisitos, desenvolvimento e
                  manutenção de aplicações educacionais da rede pública.</i></p>
              </History>
            ),
          },
          {
            children: (
              <History>
                <h3>Análise e Desenvolvimento de Softwares</h3>
                <h4>Gradução - Faculdade Descomplica</h4>
                <h5>2023/Jan - Atualmente</h5>
              </History>
            ),
          },
          {
            children: (
              <History>
                <h3>Técnico de Informática</h3>
                <h4>E.E.E.P Prof Luíza de Teodoro Vieira</h4>
                <h5>2018/Jan - 2020/Dez</h5>
                <p><i>Ensino médio integrado ao curso técnico.</i></p>
              </History>
            ),
          },
        ]} />
    </Container>
  )
}

export default TimelinePage