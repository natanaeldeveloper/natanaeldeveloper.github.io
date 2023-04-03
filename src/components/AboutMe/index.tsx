import { Space, Tooltip } from "antd"
import CIcon from "@coreui/icons-react"
import {
  cibLaravel,
  cibJquery,
  cibBootstrap,
  cibMysql,
  cibPostgresql,
  cibReact,
  cibCss3,
  cibJs,
  cibHtml5,
} from '@coreui/icons'

import {
  containerCss,
  stackListAreaCss,
  stackItemCss,
  myPhotoCss,
  textAreaCss,
  contentCss,
} from "./style"

import myPhoto from '../../assets/myPhoto02.jpeg'

type StackListProps = {
  title: string;
  content: string[];
  color: string;
  fill?: string;
}

const AboutMe: React.FC = () => {

  const stackList: StackListProps[] = [
    {
      title: 'Laravel',
      color: '#F55247',
      content: cibLaravel,
    },
    {
      title: 'JQuery',
      color: '#0769ad',
      content: cibJquery,
    },
    {
      title: 'Bootstrap',
      color: '#6610f2',
      content: cibBootstrap,
    },
    {
      title: 'MySQL',
      color: '#3E6E93',
      content: cibMysql,
    },
    {
      title: 'PostgreSQL',
      color: '#336791',
      content: cibPostgresql,
    },
    {
      title: 'React',
      color: '#61dafb',
      content: cibReact,
    },
    {
      title: 'CSS3',
      color: '#2965f1',
      content: cibCss3,
    },
    {
      title: 'JavaScript',
      color: '#F0DB4F',
      content: cibJs,
      fill: 'black',
    },
    {
      title: 'HTML5',
      color: '#F06529',
      content: cibHtml5,
    }
  ]

  return (
    <div className={containerCss()}>
      <img src={myPhoto} className={myPhotoCss()} alt="My Photo" />
      <div className={contentCss()}>
        <div className={textAreaCss()}>
          <h1>Quem sou</h1>
          <p>Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has
            survived not only five cent uries, but also the leap
            into electronic typesetting, remaining essentially</p>
        </div>
        <div className={stackListAreaCss()}>
          {stackList.map((item, key) => (
            <Tooltip title={item.title} color={item.color} key={key}>
              <span>
                <CIcon
                  icon={item.content}
                  className={stackItemCss({
                    css: {
                      '&:hover': {
                        backgroundColor: item.color,
                        border: `1px solid ${item.color}`,
                        fill: item.fill ? item.fill : 'white'
                      }
                    }
                  })}
                />
              </span>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutMe