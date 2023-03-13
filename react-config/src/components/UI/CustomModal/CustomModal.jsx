import ReactDOM from 'react-dom';
import {Box, Button} from "@mui/material";
import useStyles from "./useStyles";

const CustomModal = ({open,children,onClose, onAccept}) => {
    const classes = useStyles()
    const domElement = document.getElementById('CustomModal');

    if (!open) return  null

    return ReactDOM.createPortal(
        <Box className={classes.container}>
            <Box className={classes.content}>
                {children}
            </Box>
            <Box className={classes.actionBox}>
                <Button onClick={onAccept} color='primary'>OK!</Button>
                <Button onClick={onClose} color='error'>Close</Button>
            </Box>

        </Box>,
        domElement,
    );
};

export default CustomModal;