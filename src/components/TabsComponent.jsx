import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const TabsComponent = () => {
  return (
    <Tabs
      defaultActiveKey="build"
      id="uncontrolled-tab-example"
      className="justify-content-center mb-3 custom-tabs"
    >
      <Tab eventKey="build" title="Build Instantly">
        <div className="content-text">
          <p className="dhiwise-content text-center">
            Deliver new digital experiences in hours, not days. Remove the
            mundane tasks and automate your programming lifecycle so you can
            focus on innovation.
          </p>
        </div>

        <div className="background-video w-background-video w-background-video-atom">
          <video autoPlay loop playsInline muted>
            <source src="https://static.dhiwise.com/design-to-code.mp4" />
          </video>
        </div>
      </Tab>
      <Tab eventKey="code" title="Code what matters">
        <div className="content-text">
          <p className="dhiwise-content text-center">
            DhiWise generates code for your UI so you do not have to code
            everything from scratch and spend your time copying hex-codes, fonts
            and pixel values.
          </p>
        </div>

        <div className="w-background-img img-container">
          <img src="https://static.dhiwise.com/home/Code_20what_20matters.webp" />
        </div>
      </Tab>
      <Tab eventKey="zeroDep" title="Zero Dependencies">
        <div className="content-text">
          <p className="dhiwise-content text-center">
            DhiWise generated Flutter and React code is built on 100% open
            source libraries like GetX, Connectivity, fluttertoast, Tailwind
            CSS, etc. There is no library that is solely dependent on DhiWise.
          </p>
        </div>

        <div className="w-background-img img-container">
          <img src="https://static.dhiwise.com/home/Zero_20Dependencies.webp" />
        </div>
      </Tab>
      <Tab eventKey="amazingDevex" title="Amazing DevEx">
        <div className="content-text">
          <p className="dhiwise-content text-center">
            DhiWise UI/UX is designed in such a way that it feels like you are
            working in just another IDE. The experience of working with DhiWise
            is unmatchable.
          </p>
        </div>

        <div className="w-background-img img-container">
          <img src="https://static.dhiwise.com/home/Code_20what_20matters.webp" />
        </div>
      </Tab>
    </Tabs>
  );
};

export default TabsComponent;
