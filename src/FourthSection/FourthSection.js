import React from 'react';
import { FormControl, Input, makeStyles, Button, Typography, TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    // TYPO FIRST
    typo1: {
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "30px"
    },
    // LEFT DIV
    div1: {
        width: "50%",
        float: "left",
        textAlign: "center"
    },
    typo2: {
        textAlign: "center"
    },
    form: {
        display: "inline-block"
    },
    // RIGHT DIV
    div2: {
        width: "50%",
        float: "right",

    },
    // INNER DIV 1
    innerDiv1: {
        textAlign: "right"
    },
    typo3: {
        textAlign: "right",
        paddingRight: "350px",
        marginTop: "10px",
        fontSize: "17.5px",
        fontWeight:"600"
    },
    typo4: {
        textAlign: "right",
        paddingRight: "350px",
        fontSize: "17px"
    },

    // INNER DIV 2
    innerDiv2: {
        textAlign: "center"
    },

    // INNER DIV 3
    innerDiv3: {
        textAlign: "center"
    }
}))

export default function FourthSection() {
    const styles = useStyles();

    return (
        <div >

            <Typography className={styles.typo1}>TELL US ABOUT YOUR REQUIREMENT</Typography>

            <div className={styles.div1}>
                <Typography className={styles.typo}>CONTACT US</Typography>
                <FormControl>
                    <Input placeholder="*Name" />
                    <Input placeholder="*Your Email" />
                    <TextareaAutosize rowsMin={10} placeholder="*Your Message"></TextareaAutosize>
                    <Button>Submit</Button>
                </FormControl>
            </div>

            <div className={styles.div2}>
                <div className={styles.innerDiv1}>
                    <Typography className={styles.typo3}>ADDRESS</Typography>
                    <Typography className={styles.typo4} style={{}}>Start Simple <br />United States</Typography>
                </div>
                <div className={styles.innerDiv2}>
                    <Typography className={styles.typo3}>PHONE</Typography>
                    <Typography className={styles.typo4}>(123)456789</Typography>
                </div>
                <div className={styles.innerDiv3}>
                    <Typography className={styles.typo3}>EMAIL</Typography>
                    <Typography className={styles.typo4}>contact@example.com</Typography>
                </div>
            </div>
        </div >
    )
}