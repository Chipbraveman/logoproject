// import * as React from 'react';
// import {Button as MuiButton} from '@mui/material/Button';

// function Button({ variant,  children, ...props }) {
//   return (
//       <MuiButton
//       variant={variant}
//       {...props}
//     >
//       {children}
//     </MuiButton>
//   );
// }
// export default Button;

import { Button as MuiButton } from "@mui/material";

function Button({ variant, loading, children, ...props }) {
  return (
    <MuiButton
      className={loading ? "MuiButton-loading" : ""}
      variant={variant}
      {...props}
    >
      {loading ? <Loading /> : children}
    </MuiButton>
  );
}


export default Button;
// export default Button;