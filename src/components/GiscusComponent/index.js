import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="LinHeMa/LinHeMaIsCrusing"
      repoId="R_kgDOJmVRsA"
      category="General"
      categoryId="DIC_kwDOJmVRsM4CXcxe" // E.g. id of "General"
      mapping="url" // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="bottom"
      theme={colorMode}
      lang="zh-TW"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}
