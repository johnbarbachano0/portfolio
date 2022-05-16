import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const useCommon = () => {
  const isMobile = useMediaQuery("(max-width:576px)");
  const isMid = useMediaQuery("(max-width:768px)");
  const isLarge = useMediaQuery("(max-width:992px)");
  const isXLarge = useMediaQuery("(max-width:1200px)");
  const { palette } = useTheme();
  const isDark = palette?.mode === "dark";
  return { isMobile, isMid, isLarge, isXLarge, isDark, palette };
};

export default useCommon;
