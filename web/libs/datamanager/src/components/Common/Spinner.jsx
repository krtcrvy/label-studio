import { inject } from "mobx-react";
import React from "react";
// import Running from "../../assets/running";

const injector = inject(({ store }) => {
  return {
    SDK: store?.SDK
  };
});

export const Spinner = injector(({ SDK, visible = true, ...props }) => {
  const size = React.useMemo(() => {
    switch (props.size) {
      case "large":
        return SDK?.spinnerSize?.large ?? 128;
      case "middle":
        return SDK?.spinnerSize?.middle ?? 48;
      case "small":
        return SDK?.spinnerSize?.small ?? 24;
      default:
        return SDK?.spinnerSize?.middle ?? 48;
    }
  }, [props.size]);

  /*   const source = React.useMemo(() => {
    return Running.full;
  }, [props.size]); */

  /* const videoStyles = {
    width: "100%",
    height: "100%",
    objectFit: "contain"
  }; */

  const ExternalSpinner = SDK?.spinner;

  const fallbackSpinner = (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "4px solid transparent",
          borderTop: "4px solid #15E194",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          boxSizing: "border-box"
        }}
      />
    </>
  );

  return visible ? (
    <div
      {...props}
      style={{ width: size, height: size }}
      children={
        // <div style={{ width: "100%", height: "100%" }}>
        //   {ExternalSpinner ? (
        //     <ExternalSpinner size={size} />
        //   ) : (
        //     <img
        //       src={source.x1}
        //       srcSet={[`${source.x1} 1x`, `${source.x2} 2x`].join(",")}
        //       style={videoStyles}
        //       alt="opossum loader"
        //     />
        //   )}
        // </div>
        <div {...props} style={{ width: size, height: size }}>
          <div style={{ width: "100%", height: "100%" }}>
            {ExternalSpinner ? (
              <ExternalSpinner size={size} />
            ) : (
              fallbackSpinner
            )}
          </div>
        </div>
      }
    />
  ) : null;
});
