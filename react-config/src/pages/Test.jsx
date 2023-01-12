import {Box, Button, Typography} from "@mui/material";
import {useState} from "react";
import CustomModal from "../component/UI/CustomModal/CustomModal";

const Test = () => {
    const [open, setOpen] = useState(false);
    return (
        <Box>
            <Typography varient='caption'>Test Page</Typography>
            <Button onClick={() => setOpen(prevState => !prevState)}>Click Here!</Button>
            {open && <CustomModal onClose={() => setOpen(prevState => !prevState)}
                                  onAccept={() => setOpen(prevState => !prevState)} open={open}><Box>CustomModal</Box></CustomModal>}
        </Box>
    )
};

export default Test;