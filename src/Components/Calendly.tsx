import React, { useEffect } from "react";
import { PopupWidget } from "react-calendly";

type Props = {};

const calendlyWidgetScript: string = "calendlyWidgetScript";
const calendarDivId: string = "letsMeet";

const Calendly = (props: Props) => {
  const url = "https://calendly.com/imohsen/quick-chat?";
  const minWidth: string = "320px";
  const height: string = "750px";
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("id", calendlyWidgetScript);
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    script.setAttribute("async", "");
    head?.appendChild(script);

    // return () => {
    //   if (document.getElementById(calendlyWidgetScript) && head) {
    //     const script = document.getElementById(calendlyWidgetScript);
    //     script?.remove();
    //     const calendar = document.getElementById(calendarDivId);
    //     calendar?.remove();
    //   }
    // };
  }, []);

  return (
    <div
      id="letsMeet"
      style={
        {
          // display: "inline-block",
          // width: "300px",
          // height: "300px",
        }
      }
    >
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth, height }}
        // data-auto-load="true"
      />
      {/* <PopupWidget
        url={url}
        rootElement={document.getElementById("root")!}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      /> */}
    </div>
  );
};

export default Calendly;
