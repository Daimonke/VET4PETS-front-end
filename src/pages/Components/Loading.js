import { CircularProgress, Box } from "@mui/material";

export default function Loading(){
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", margin:'30px' }}
    >
      <CircularProgress />
    </Box>
  )
}