import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="151px" height="39.812px" viewBox="0 0 67" enable-background="new 0 0 67" xmlSpace="preserve" {...props}>
 <image overflow="visible" width="151" height="40" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAoCAYAAADzA2jZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
 bWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp
 bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6
 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0
 NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo
 dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw
 dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv
 IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS
 ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD
 cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNl
 SUQ9InhtcC5paWQ6NDFENjA5ODdCQTQxMTFFQjhBRERBODA5NUU4RkM0MzQiIHhtcE1NOkRvY3Vt
 ZW50SUQ9InhtcC5kaWQ6NDFENjA5ODhCQTQxMTFFQjhBRERBODA5NUU4RkM0MzQiPiA8eG1wTU06
 RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MUQ2MDk4NUJBNDExMUVCOEFE
 REE4MDk1RThGQzQzNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MUQ2MDk4NkJBNDExMUVC
 OEFEREE4MDk1RThGQzQzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w
 bWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrFLt5QAAC55SURBVHja7HwHfFTVuv060yeTmcxk0nsv
 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">
 </image>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
