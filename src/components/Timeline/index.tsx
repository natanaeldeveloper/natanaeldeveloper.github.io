import React, { useState } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline as TimelineAntd } from 'antd';
import { Container, Content, TimelineItem } from './style';

const Timeline: React.FC = () => {

  return (
    <Container>
      <Content>
        <TimelineAntd
          mode="alternate"
          style={{ width: '90%' }}
          items={[
            {
              children: (
                <TimelineItem>
                  <h3>2015-09-01</h3>
                  <span>Create a services site 2015-09-01</span>
                </TimelineItem>
              ),
            },
            {
              children: (<TimelineItem>
                <span>Solve initial network problems 2015-09-01</span>
              </TimelineItem>)
            },
            {
              dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
              children: (
              <TimelineItem>
                <span>Sed ut perspiciatis unde omnis iste natus error sit 
                  voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto 
                  beatae vitae dicta sunt explicabo.</span>
              </TimelineItem>
              ),
            },
            {
              children: (
                <TimelineItem>
                  <h3>2015-09-01</h3>
                  <span>Create a services site 2015-09-01</span>
                </TimelineItem>
              ),
            },
            {
              children: (<TimelineItem>
                <span>Solve initial network problems 2015-09-01</span>
              </TimelineItem>)
            },
            {
              dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
              children: (
              <TimelineItem>
                <span>Sed ut perspiciatis unde omnis iste natus error sit 
                  voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto 
                  beatae vitae dicta sunt explicabo.</span>
              </TimelineItem>
              ),
            },
          ]}
        />
      </Content>
    </Container>
  )
};

export default Timeline;