import React from 'react';
import { Input, makeStyles, Button, Typography } from '@material-ui/core';
import BG from './Images/BG.jpg';
// import Backdrop from '../UI/Backdrop/Backdrop'

const useStyles = makeStyles((theme) => ({
    // FOR HEADER
    mainDiv: {
        height: "600px",
    },
    firstHeadDiv: {
        color: "white",
        width: "50%",
        float: "left",
        marginTop: "60px",
        textAlign: "center"
    },
    typo1: {
        color: "white",
        display: "inline",
        fontWeight: "bold"
    },
    secHeadDiv: {
        color: "white",
        width: "50%",
        float: "right",
        marginTop: " 60px",
        textAlign: "center"
    },
    typo2: {
        color: "white",
        display: "inline",
        marginLeft: "25px",
        fontWeight: "bold",
        fontSize: "18px"
    },
    // FOR BOLD TEXT
    mainOuter: {
        color: "white",
        width: "100%",
        float: "left",
        marginTop: "80px"
    },
    mainTxt: {
        fontSize: "xxx-large",
        color: "white",
        paddingLeft: "400px",
        fontWeight: "bold",
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
    },
    mainText2: {
        width: "100%",
        float: "left",
        paddingBottom: "30px"
    },
    text2: {
        color: "white",
        paddingLeft: "400px",
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        fontSize: "17px"
    },

    text3First: {
        color: "white",
        marginLeft: "400px",
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        display: "inline",
        fontSize: "17.5px",
        fontWeight: "bold"
    },

    text3Second: {
        color: "white",
        display: "inline",
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        fontSize: "17px"
    },

    /* INPUT BAR */
    input: {
        marginTop: "12px",
        marginRight: "15px",
        width: "440px",
        height: "40px",
        marginLeft: "400px",
        borderRadius: "5px",
        border: "1px solid grey",
        fontSize: "15px",
        paddingLeft: "15px",
        backgroundColor: "white",
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
    },
    // Button
    button: {
        width: "290px",
        height: "40px",
        borderRadius: "7px",
        fontSize: "17px",
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans - serif"
    },
}))

export default function FirstSection() {
    const styles = useStyles();

    return (
        <div className={styles.mainDiv} style={{ backgroundImage: `url(${BG})` }}>
            {/* <Backdrop/> */}
            {/* HEADER */}
            <div className={styles.firstHeadDiv}>
                <Typography className={styles.typo1} style={{ fontSize: "20px" }}>START SIMPLE</Typography>
            </div>

            <div className={styles.secHeadDiv}>
                <Typography className={styles.typo1} style={{ fontSize: "18px" }}>Home</Typography>
                <Typography className={styles.typo2}>Work</Typography>
                <Typography className={styles.typo2}>Contact</Typography>
            </div>

            {/* MAIN BOLD TEXT 1*/}
            <div className={styles.mainOuter} >
                <Typography className={styles.mainTxt}>STARTUP LANDING PAGE<br /> FOR YOUR PRODUCT &<br /> SERVICES</Typography>
            </div>

            {/* TEXT 2 */}
            <div className={styles.mainText2}>
                <Typography className={styles.text2}>Perfect landing page to showcase your product or service. Built with Bootstrap 4.</Typography>
            </div>

            {/* TEXT 3 */}
            <Typography className={styles.text3First}>TRY FOR FREE </Typography>
            <Typography className={styles.text3Second}> - Just leave your e-mail below and we will get in touch</Typography><br />

            <div className={styles.bottomDiv}>
                {/* Input */}
                <Input className={styles.input} type="text" placeholder="*Your Email Address" />

                {/* Button */}
                <Button className={styles.button} variant="contained" color="secondary" >Request Free Trial</Button>
            </div>


        </div >
    )
}