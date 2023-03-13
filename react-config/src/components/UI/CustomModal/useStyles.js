import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    container:{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
        zIndex: '100',
        width: '50vw',
        margin: '0 auto',
        height: '50vh',
        top: '25%',
        left: '0',
        right:'0',
        background: 'blueviolet',
    },

    content:{
        flexGrow:'1'
    },

    actionBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        gap:'1rem',
        padding:'2rem 1rem',

        '& .MuiButton-root':{
            width:'100%',
        }
    }
}));

export default useStyles;