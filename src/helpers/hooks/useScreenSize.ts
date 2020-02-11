import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

type ScreenSizeHook = () => boolean;

const useScreenSize: ScreenSizeHook = () => {
    const theme = useTheme();

    return useMediaQuery(theme.breakpoints.down('md'));
};

export default useScreenSize;
