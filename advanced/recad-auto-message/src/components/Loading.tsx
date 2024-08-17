import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

interface LoadingProps {
  children: React.ReactNode
  isLoading: boolean
}

const Loading: React.FC<LoadingProps> = ({ children, isLoading = true }) => {
  return (
    <>
      {isLoading ? (
        <Box className=" w-full h-full flex justify-center items-center">
          <CircularProgress />
        </Box >
      ) : (
        <>
          {children}
        </>
      )}
    </>
  );
}

export default Loading