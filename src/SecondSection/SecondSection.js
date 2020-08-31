import React from 'react';
import first from './Images/1.png';
import second from './Images/2.png';
import third from './Images/3.png';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    typo1: {
        marginLeft: "400px",
        paddingTop: "50px",
        fontSize: "29px",
        fontWeight: "bold"
    },
    image1Div: {
        marginLeft: "400px",
        marginTop: "40px"
    },
    image: {
        marginLeft: "40px"
    },
    textDiv: {
        width: "18%",
        float: "left",
        marginTop: "20px"
    },
    typoLearn: {
        float: "left",
        marginTop: "12px",
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans - serif"
    }

}))

export default function SecondSection() {
    const styles = useStyles();

    return (
        <div style={{ height: "700px" }}>
            <Typography className={styles.typo1}>OUR SUCCESS STORIES</Typography>
            <div>
                <div className={styles.image1Div}>
                    <img src={first} alt="first" />
                    <img className={styles.image} src={second} alt="second" />
                    <img className={styles.image} src={third} alt="third" />
                </div>

                <div >
                    <div className={styles.textDiv} style={{ marginLeft: "400px" }}>
                        <Typography
                            style={{ fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans - serif" }}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum sagittis, nisi ac aptent vitae est facilisi.
                        </Typography>
                        <Typography className={styles.typoLearn}>Learn More</Typography>
                    </div>

                    <div className={styles.textDiv} style={{ marginLeft: "40px" }}>
                        <Typography
                            style={{ fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans - serif" }} >
                            Porttitor varius auctor litora congue sociosqu montes eleifend facilisi elementum convallis, diam et nullam sem.
                        </Typography>
                        <Typography className={styles.typoLearn}>
                            Learn More</Typography>
                    </div>

                    <div className={styles.textDiv} style={{ marginLeft: "40px" }}>
                        <Typography
                            style={{ fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans - serif" }}>
                            Commodo convallis varius egestas purus rhoncus cras morbi dignissim, ligula vestibulum ultrices urna semper.
                        </Typography>
                        <Typography className={styles.typoLearn}>Learn More</Typography>
                    </div>
                </div>
            </div>
        </div >
    )
}