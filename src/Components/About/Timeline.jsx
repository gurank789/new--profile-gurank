import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaSuitcase, FaGraduationCap, FaStar } from "react-icons/fa";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);

  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"April 2013 - June 2014"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<FaSuitcase />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              School
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Oxford model Senior Secondary School, CBSE
            </h4>
            <p data-aos="fade-right">
              I passed my Intermediate in June 2014 with CGPA: 5.8
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"July-2014 - July 2017"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<FaSuitcase />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Diploma
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Glocal University 
            </h4>
            <p data-aos="fade-right">
              I passed my diploma in computer science from Glocal University with SGPA:6.3.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"July 2020 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<FaGraduationCap />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              College(B.Tech)
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Galgotias University – B.Tech
            </h4>
            <p data-aos="fade-right">
              I am pursuing B.Tech from Galgotias University in Computer science my last SGPA was 6.5 in 7th semester.
            </p>
          </VerticalTimelineElement>
          {/* Rest of the elements */}
          <VerticalTimelineElement
          date={"April 2023- Present"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
            icon={<FaStar />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            
          > 
          
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Function-up (TRAINING )
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Front-end Developer 
            </h4>
            <p data-aos="fade-right">
              I am pursuing training from Function-up in Front-end Developer tell present.
            </p></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};