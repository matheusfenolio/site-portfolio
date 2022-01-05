import React from 'react';
import GlobalStyle, { Container, Menu, Content } from './styles/global';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { Interval, DateTime} from "luxon";

const App: React.FC = () => {

  const calculateAge = () => {
    const now = DateTime.now();
    const birthDay = DateTime.local(1997, 2, 26);
    const i = Interval.fromDateTimes(birthDay, now);

    console.log(i);

    return Math.floor(i.length('years'));
  }

  return (<>
    <GlobalStyle />
    <Container>
      <Menu>
        <img src="https://avatars2.githubusercontent.com/u/37229507?s=460&u=f0810fe968ce8a88395bc09e41444cbba3636c7b&v=4" alt="Matheus F Prado" />
        <a href="https://github.com/matheusfenolio" target="_blank" rel="noopener noreferrer">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/matheusfprado/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
        <a href="mailto:mtfprado@outlook.com" target="_blank" rel="noopener noreferrer">
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
              <span>{calculateAge()}</span>
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
              <strong>IGTI - </strong>
              <span>2021 - Now</span>
              <ul>
                <li>Software Architeture</li>
              </ul>
            </li>
            <li>
              <strong>ETEC Dr. Carolino da Motta e Silva - </strong>
              <span>2012 - 2015</span>
              <ul>
                <li>Web development</li>
              </ul>
            </li>
            <li>
              <strong>ETEC Dr. Carolino da Motta e Silva - </strong>
              <span>2012 - 2015</span>
              <ul>
                <li>Desktop development</li>
              </ul>
            </li>
            <li>
              <strong>Unipinhal - </strong>
              <span>2015 - 2019</span>
              <ul>
                <li>Computer engineering</li>
              </ul>
            </li>
            <li>
              <strong>Rocketseat - </strong>
              <span>2020</span>
              <ul>
                <li>Node.js</li>
                <li>React.js</li>
                <li>React Native</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <strong>Professional</strong>
          <hr />
          <ul>
          <li>
              <strong>CI&T - </strong>
              <span>11/2021 - Now</span>
              <ul>
                <li>Full-stack software developer Java, Typescript using Spring boot, and AgularJS.</li>
                <li>Development of new features in Microservices using Spring Boot, JPA, and Hibernate liking those features in a front-end using Angular 12 with Typescript.</li>
                <li>Unit tests in both (back and front-end).</li>
                <li>Working with an international mixed team.</li>
              </ul>
            </li>
            <li>
              <strong>Monitora - </strong>
              <span>03/2020 - 11/2021</span>
              <ul>
                <li>Full-stack software developer Java, JavaScript using Spring boot, NodeJS, Apollo, Kafka, and ReacJS.</li>
                <li>Development microservices that automate the process and give agility to the business process.</li>
                <li>Participating in meetings that bring architectural solutions for the projects.</li>
                <li>Create scripts to maintain and automate database processes.</li>
                <li>Add new modules in front-end projects, using ReactJS, Redux, and Apollo Server.</li>
                <li>Create microservices and serverless functions using AWS modules.</li>
                <li>Used Python to process large data files.</li>
              </ul>
            </li>
            <li>
              <strong>Altf Systems (Self-employed) - </strong>
              <span>05/2017 - 05/2020</span>
              <ul>
                <li>Develop solutions using .Net Framework using SQL Server as database.</li>
                <li>Web developer with JavaScript, Bootstrap, MySQL.</li>
                <li>Give updates for a legacy .Net (WF) software used by the Sales.</li>
                <li>Implements custom features for existing .Net (WF) projects.</li>
                <li>Develop new solutions for small stores.</li>
              </ul>
            </li>
            <li>
              <strong>International paper - </strong>
              <span>01/2020 - 03/2020</span>
              <ul>
                <li>Conduct troubleshooting to resolve IT-related and application issues for more than 700 users.</li>
                <li>Participated, as a .Net developer in an automation project which automates the greenhouse and brings more information for engineering statistics.</li>
              </ul>
            </li>
            <li>
              <strong>Palinialves - </strong>
              <span>2017 - 2019</span>
              <ul>
                <li>IT support for 100 users.</li>
                <li>Managed servers Windows and Firewall in order to maintain the stability and security of services provided.</li>
                <li>Maintained a VPN for our branches and external employees, in order to them have access to the system.</li>
                <li>Created some Excel sheets using VBA to accomplish several tasks with Accounting and Sales department. Also, was used as a first step to implementing software to control production planning.</li>
                <li>I developed software in C#, that handles production planning, which gives alerts and organizes data, giving the user more control of the information.</li>
                <li>Development queries in SQL and reports to be used by PPC, Sales, Purchasing, and Accounting departments.</li>
                <li>Development solutions in C#, that work together with TOTVS CorporeRM, like as JOBs and other software for the Sales department, that complements the process.</li>
              </ul>
            </li>
            <li>
              <strong>Tuca Infomática - </strong>
              <span>2012 - 2017</span>
              <ul>
                <li>Diagnostic and resolved technical issues for end-users.</li>
                <li>Worked as a Salesperson.</li>
                <li>Setup and maintenance of companies' infrastructure.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <strong>Languages</strong>
          <hr />
            <ul>
              <li>
                <strong>Portuguese - </strong>
                <span>Native</span>
              </li>
              <li>
                <strong>English - </strong>
                <span>Advanced</span>
              </li>
            </ul>
        </section>

        <section>
          <strong>Skills</strong>
          <hr />
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" title="Typescript"><img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" title="JavaScript"><img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" /></a>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" title="React"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" /></a>
            <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer" title="React Native"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React Native" /></a>
            <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" title="Redux"><img src="https://github.com/get-icon/geticon/raw/master/icons/redux.svg" alt="Redux" /></a>
            <a href="https://angular.io/" target="_blank" rel="noopener noreferrer" title="Angular"><img src="https://github.com/get-icon/geticon/raw/master/icons/angular-icon.svg" alt="Angular" /></a>
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" title="Node.js"><img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node.js" /></a>
            <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer" title="Java"><img src="https://github.com/get-icon/geticon/raw/master/icons/java.svg" alt="Java" /></a>
            <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer" title="Java"><img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/c-sharp.svg" alt="C#" /></a>
            <a href="https://spring.io/" target="_blank" rel="noopener noreferrer" title="Spring"><img src="https://github.com/get-icon/geticon/raw/master/icons/spring.svg" alt="Spring" /></a>
            <a href="https://dotnet.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer" title="Spring"><img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/dotnet.svg" alt="Spring" /></a>
            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" title="Python"><img src="https://github.com/get-icon/geticon/raw/master/icons/python.svg" alt="Python" /></a>
            <a href="https://maven.apache.org/" target="_blank" rel="noopener noreferrer" title="Python"><img src="https://raw.githubusercontent.com/get-icon/geticon/d74874bc93170cc8f8b65c1ad2fa2cbbf35d798c/icons/maven.svg" alt="Maven" /></a>
            <a href="https://gradle.org/" target="_blank" rel="noopener noreferrer" title="Python"><img src="https://raw.githubusercontent.com/get-icon/geticon/d74874bc93170cc8f8b65c1ad2fa2cbbf35d798c/icons/gradle.svg" alt="Gradle" /></a>
            <a href="https://www.mongodb.org/" target="_blank" rel="noopener noreferrer" title="MongoDB"><img src="https://github.com/get-icon/geticon/raw/master/icons/mongodb-icon.svg" alt="MongoDB" /></a>
            <a href="https://dev.mysql.com/" target="_blank" rel="noopener noreferrer" title="MySQL"><img src="https://github.com/get-icon/geticon/raw/master/icons/mysql.svg" alt="MySQL" /></a>
            <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" title="PostgreSQL"><img src="https://github.com/get-icon/geticon/raw/master/icons/postgresql.svg" alt="PostgreSQL" /></a>
            <a href="https://redis.io/" target="_blank" rel="noopener noreferrer" title="PostgreSQL"><img src="https://raw.githubusercontent.com/get-icon/geticon/d74874bc93170cc8f8b65c1ad2fa2cbbf35d798c/icons/redis.svg" alt="Redis" /></a>
            <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer" title="GraphQL"><img src="https://github.com/get-icon/geticon/raw/master/icons/graphql.svg" alt="GraphQL" /></a>
            <a href="https://www.apollographql.com/" target="_blank" rel="noopener noreferrer" title="Apollo"><img src="https://github.com/get-icon/geticon/raw/master/icons/apollostack.svg" alt="Apollo" /></a>
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" title="Git"><img src="https://github.com/get-icon/geticon/raw/master/icons/git-icon.svg" alt="Git" /></a>
            <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer" title="npm"><img src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="npm" /></a>
            <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer" title="Yarn"><img src="https://github.com/get-icon/geticon/raw/master/icons/yarn.svg" alt="Yarn" /></a>
            <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" title="AWS"><img src="https://github.com/get-icon/geticon/raw/master/icons/aws.svg" alt="AWS" /></a>
            <a href="https://deno.land/" target="_blank" rel="noopener noreferrer" title="Deno"><img src="https://github.com/get-icon/geticon/raw/master/icons/deno.svg" alt="Deno" /></a>
            <a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer" title="docker"><img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/jenkins.svg" alt="Jenkins" /></a>
            <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" title="docker"><img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/kubernetes.svg" alt="Kubernetes" /></a>
            <a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer" title="docker"><img src="https://github.com/get-icon/geticon/raw/master/icons/docker-icon.svg" alt="docker" /></a>
            <a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer" title="docker"><img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/kafka-icon.svg" alt="Kafka" /></a>
            <a href="https://www.sonarqube.org/" target="_blank" rel="noopener noreferrer" title="docker"><img src="https://raw.githubusercontent.com/get-icon/geticon/d74874bc93170cc8f8b65c1ad2fa2cbbf35d798c/icons/sonarqube.svg" alt="Sonarqube" /></a>
            <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer" title="Linux"><img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/linux-tux.svg" alt="Linux" /></a>

        </section>
      </Content>
    </Container>
  </>); 
}

export default App;
