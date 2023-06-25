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
      mapping="pathname" // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="zh-TW"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}
{/* <script src="https://giscus.app/client.js"
        data-repo="LinHeMa/LinHeMaIsCrusing"
        data-repo-id="R_kgDOJmVRsA"
        data-category="General"
        data-category-id="DIC_kwDOJmVRsM4CXcxe"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-TW"
        crossorigin="anonymous"
        async>
</script> */}