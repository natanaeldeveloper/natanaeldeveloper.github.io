import { Timeline } from "antd"
import { ClockCircleOutlined } from "@ant-design/icons"
import { Container, History, TimelineCss } from "./style"

const TimelinePage: React.FC = () => {
  return (
    <Container id="timeline">
      <Timeline
        mode="alternate"
        style={{ width: 900 }}
        className={TimelineCss()}
        items={[
          {
            color: "green",
            children: (
              <History>
                <h3>Técnico de Informática</h3>
                <h4>E.E.E.P Prof Luíza de Teodoro Vieira</h4>
                <p>2018/Jan - 2020/Dez</p>
                <p>Ensino médio integrado ao curso técnico.</p>
              </History>
            ),
          },
          {
            dot: <ClockCircleOutlined style={{ fontSize: '16px', marginBottom: "8px" }} />,
            children: (
              <History>
                <h3>Programador de Sistemas</h3>
                <h4>Secretaria Municipal de Educação - SEDUC</h4>
                <p>2021/Mar - Atualmente</p>
                <p>Responsável pelo levantamento requisitos, desenvolvimento e
                  manutenção de aplicações educacionais da rede pública.</p>
              </History>
            ),
          },
          {
            dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
            children: (
              <History>
                <h3>Graduando Análise e Desenvolvimento de Softwares</h3>
                <h4>Faculdade Descomplica</h4>
                <p>2023/Jan - Atualmente</p>
                <p></p>
              </History>
            ),
          }
        ]} />
    </Container>
  )
}

export default TimelinePage