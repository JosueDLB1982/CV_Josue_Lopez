import styles from '../styles/Modal.module.css'
import { useState } from "react";
import { Button, Typography, Modal, Grid, TextField } from "@mui/material";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Picker from "emoji-picker-react";
import AttachFileIcon from '@mui/icons-material/AttachFile';




const style = {
    position: "absolute",
    top: "68%",
    left: "92%",
    transform: "translate(-60%, -45%)",
    width: 310,
    height: 430,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "8px",
    boxShadow: 24,
    pb: 2
};

export const ChildModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [chosenEmoji, setChosenEmoji] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    return (
        <>
            <label
                style={{
                    position: "absolute",
                    left: "280px",
                    top: "381px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "flex-end",
                    marginBottom: "4px"
                }}
            >
                <EmojiEmotionsIcon
                    color={"disabled"}
                />
                <button
                    onClick={handleOpen}
                    name="emoji"
                    style={{ display: "none" }}
                ></button>
            </label>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Grid container spacing={2} sx={{ ...style }}>
                    <div>
                        {chosenEmoji ? (
                            <span>Tu elección: {chosenEmoji.emoji}</span>
                        ) : (
                            <span>No hay emoji seleccionado</span>
                        )}
                        <Picker onEmojiClick={onEmojiClick} />
                    </div>
                    <Grid item md={12}>
                        <label style={{ cursor: "pointer" }}>
                            <EmojiEmotionsIcon
                                color={"disabled"}
                            />
                            <button
                                onClick={handleClose}
                                name="emoji"
                                style={{ display: "none" }}
                            ></button>
                        </label>
                    </Grid>
                </Grid>
            </Modal>
        </>
    );
};

const NestedModal = () => {
    const isBrowser = typeof window !== "undefined"

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className={styles.button} /* sx={{position: "fixed", left: '89%', top: '440px', backgroundColor: 'red', color: 'white' }} */ onClick={handleOpen}>¡Vamos a Chatear!</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Grid container spacing={2} sx={{ ...style }}>
                    <Grid item md={12}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Josue Lopez
                        </Typography>
                        <Typography variant="p" id="modal-modal-description">
                            En breve le atenderé
                        </Typography>
                    </Grid>
                    <Grid item md={12} sx={{ display: "flex", alignItems: "flex-end" }}>
                        <TextField size="small" />
                        <label style={{ cursor: "pointer" }}>
                            <AttachFileIcon
                                color={"disabled"}
                            />
                            <input
                                type="file"
                                name="myfile"
                                style={{ display: "none" }}
                                accept="image/*,.doc,.docx,.ppt,.pptx,.xlsx,.xls,.pdf"
                            />
                        </label>
                    </Grid>
                    <ChildModal />
                </Grid>
            </Modal>
        </div>
    );
};
export default NestedModal;
