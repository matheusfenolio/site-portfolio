import React from 'react';
import GlobalStyle, { Container, Menu, Content } from './styles/global';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

const App: React.FC = () => {
  return (<>
    <GlobalStyle />
    <Container>
      <Menu>
        <img src="https://avatars2.githubusercontent.com/u/37229507?s=460&u=f0810fe968ce8a88395bc09e41444cbba3636c7b&v=4" alt="Matheus F Prado" />
        <a href="https://github.com/matheusfenolio" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/matheusfprado/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="mailto:mtfprado@outlook.com" target="_blank">
          <AiOutlineMail />
        </a>    
      </Menu>
      <Content>
        <section>
          <strong>Personal</strong>
          <hr />
          <ul>
            <li>
              <strong>Fullname: </strong>
              <span>Matheus Fenólio do Prado</span>
            </li>
            <li>
              <strong>Age: </strong>
              <span>23</span>
            </li>
            <li>
              <strong>Country: </strong>
              <span>Brazil</span>
            </li>
          </ul>
        </section>

        <section>
          <strong>School</strong>
          <hr />
          <ul>
            <li>
              <strong>ETEC Dr. Carolino da Motta e Silva - </strong>
              <span>2012 - 2015</span>
              <ul>
                <li>
                  Web development
                </li>
                <li>
                  Desktop development
                </li>
              </ul>
            </li>
            <li>
              <strong>Unipinhal - </strong>
              <span>2015 - 2019</span>
              <ul>
                <li>
                  Computer engineering
                </li>
              </ul>
            </li>
            <li>
              <strong>Rocketseat - </strong>
              <span>2020</span>
              <ul>
                <li>
                  Node.js
                </li>
                <li>
                  React.js
                </li>
                <li>
                  React Native
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <strong>Professional</strong>
          <hr />
          <ul>
            <li>
              <strong>Tuca Infomática - </strong>
              <span>2012 - 2017</span>
              <ul>
                <li>
                  Support
                </li>
                <li>
                  Client attendance
                </li>
                <li>
                  Infrasctructure and network
                </li>
              </ul>
            </li>
            <li>
              <strong>Palinialves - </strong>
              <span>2017 - 2019</span>
              <ul>
                <li>
                  Operations
                </li>
                <li>
                  .net Developer
                </li>
              </ul>
            </li>
            <li>
              <strong>International paper - </strong>
              <span>01/2020 - 03/2020</span>
              <ul>
                <li>
                  Operations
                </li>
              </ul>
            </li>
            <li>
              <strong>Monitora - </strong>
              <span>03/2020 - Now</span>
              <ul>
                <li>
                  Full stack developer
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <strong>Skills</strong>
          <hr />
          <ul>
            <li>
              .net, .netCore, SpringBoot, Node.js, React, React Native and Expo, AWS Lambda, GraphQL
            </li>
            <li>
              Kafka
            </li>
            <li>
              Hibernate, Jooq, TypeOrm, Prisma2
            </li>
            <li>
              Sql Server, Mysql, MongoDb, Oracle, Postgres 
            </li>
            <li>
              Docker, Kubernetes, Jenkins, Vercel
            </li>
            <li>
              Windows, Linux
            </li>
          </ul>
        </section>
      </Content>
    </Container>
  </>); 
}

export default App;
