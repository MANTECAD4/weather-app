// import * as React from "react";
// import Button from "@mui/material/Button";
// import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import { useHandleError } from "../providers/app-state/useHandleError";

// export const ErrorSnackbar = () => {
//   const { error, hasError } = useHandleError();

//   const handleClose = (
//     event: React.SyntheticEvent | Event,
//     reason?: SnackbarCloseReason,
//   ) => {
//     if (reason === "clickaway") {
//       return;
//     }
//   };

//   const action = (
//     <IconButton aria-label="close" color="inherit" onClick={handleClose}>
//       <CloseIcon fontSize="small" />
//     </IconButton>
//   );

//   return (
//     <div>
//       <Snackbar
//         open={true}
//         autoHideDuration={6000}
//         onClose={handleClose}
//         message={"olaaaa"}
//         action={action}
//         sx={{}}
//         slotProps={{
//           content: {
//             sx: {
//               backgroundColor: "background.paper",
//               color: "#fff",
//             },
//           },
//         }}
//         // slots={{}}
//       />
//     </div>
//   );
// };
