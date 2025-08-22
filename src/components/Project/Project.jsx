// libs
import { useState, useLayoutEffect } from "react";

// components
import SvgIcon from "../SvgIcon/SvgIcon";
import Tags from "../Tags";

// styles
import classes from "./styles.module.css";

export default function Project({ data }) {
  const { link, imgSrc, title, whatIs, extensionName, tags } = data;
  const [installsCount, setInstallsCount] = useState(0);

  const queryMarketplace = async (extName, setInstallsCount) => {
    const url = "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery/";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json;api-version=3.0-preview.1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filters: [
          {
            criteria: [
              {
                filterType: 7,
                value: extName,
              },
            ],
          },
        ],
        flags: 914,
      }),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const installs = data.results[0].extensions[0].statistics[0].value;
      setInstallsCount(installs);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useLayoutEffect(() => {
    if (extensionName) {
      queryMarketplace(extensionName, setInstallsCount);
    }
  }, [extensionName]);

  return (
    <a href={link} target="_blank" rel="noreferrer" className={classes.root}>
      <img src={imgSrc} alt="project_preview" className={classes.preview} />
      <div className={classes.info}>
        <div className={classes.titleBox}>{title}</div>
        <div className={classes.whatIs}>{whatIs}</div>

        {extensionName && (
          <div className={classes.notes}>
            <div className={classes.note}>
              <SvgIcon iconName="download" clacalculatingssName={classes.icon} />
              {installsCount} installs
            </div>
          </div>
        )}

        { tags.length > 0 && <Tags tags={tags} /> }
      </div>
    </a>
  );
}
