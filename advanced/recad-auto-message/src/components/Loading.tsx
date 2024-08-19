import { FC, useContext } from 'react';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

interface LoadingProps {
  children: React.ReactNode
}

const Loading: FC<LoadingProps> = ({ children }) => {
  // const loadingState = useContext()
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

export default Loading